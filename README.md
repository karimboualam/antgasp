# Ant-Gasp — Monorepo

Ant-Gasp est une plate-forme “anti-gaspillage” construite en **monorepo**, avec un **frontend React**, un **BFF Node/Express** et des **microservices Spring Boot**.  
Ce README explique comment développer et exécuter la première tranche verticale **“Hello Offers”** (liste des offres) et comment évoluer vers l’infra complète (Postgres, Kafka, Keycloak…).

---

## Sommaire

- [Architecture](#architecture)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Démarrage rapide](#démarrage-rapide)
  - [Windows (PowerShell)](#windows-powershell)
  - [Bash / WSL / macOS / Linux](#bash--wsl--macos--linux)
- [Services & ports](#services--ports)
- [Variables d’environnement](#variables-denvironnement)
- [Endpoints (dev)](#endpoints-dev)
- [Arborescence du repo](#arborescence-du-repo)
- [Développement](#développement)
- [Tests](#tests)
- [Ops & Observabilité](#ops--observabilité)
- [CI/CD](#cicd)
- [Conventions](#conventions)
- [Dépannage](#dépannage)
- [Roadmap](#roadmap)
- [Licence](#licence)
- [Auteurs](#auteurs)
- [Annexe — Commandes rapides](#annexe--commandes-rapides)

---

## Architecture

Web (React + Vite + TS) ───► BFF (Node/Express) ───► Products (Spring Boot)
└──► (à venir) Reservations / Users / Payments / Notifications

Infra dev: Postgres, Redis, Redpanda (Kafka), MinIO, Mailpit, OTel, Jaeger (via docker-compose)



- **apps/web** : React + Vite + TypeScript + Tailwind (page `OffersList`)
- **apps-bff/bff** : Express TypeScript, route `GET /offers` (proxy → Products)
- **services/products** : Spring Boot 3 (H2 en mémoire + seed de 3 offres)
- **services/users / reservations / payments / notifications** : stubs Spring Boot (démarrables)
- **contracts** : OpenAPI (BFF) + schémas Avro (Kafka)
- **platform** : configs infra (postgres init, redis, minio, kafka topics, otel, jaeger)
- **ops** : docker-compose dev, Helm charts (bff, products), ArgoCD, Terraform, SRE
- **.github/workflows** : CI (builds Node + Java), CD placeholder, security scan

---

## Prérequis

- **Node.js 18+** (recommandé **20+**) et **pnpm**
  ```bash
  corepack enable
Java 17 + Maven 3.9+

(Optionnel) Docker si vous lancez l’infra dev (Postgres, Redis, etc.)

(Optionnel) Git Bash / WSL si vous voulez utiliser make sous Windows

Installation

# Cloner le repo
git clone <votre_repo_github>.git
cd ant-gasp

# Installer les dépendances Node
cd apps-bff/bff && pnpm i && cd ../../..
cd apps/web && pnpm i && cd ../..

# Compiler le microservice products (Java)
cd services/products && mvn -q -DskipTests package && cd ../..
Démarrage rapide
Windows (PowerShell)
Ouvrir 3 terminaux :

Terminal 1 – Products (Spring Boot)


cd services\products
mvn spring-boot:run
Terminal 2 – BFF (Node/TS)


cd apps-bff\bff
copy .env.example .env
pnpm dev
Terminal 3 – Web (React)


cd apps\web
pnpm dev
Web : http://localhost:5173

BFF : http://localhost:4000/health

Products : http://localhost:8081/products

Sur la home web, vous devez voir 3 offres seedées.

Bash / WSL / macOS / Linux
En 3 terminaux comme ci-dessus ou en 1 commande avec make (Git Bash/WSL/macOS) :


make up
make up lance Products + BFF + Web en parallèle.
Pour arrêter : make down (best effort).

Services & ports
Service	Tech	Port
Web	React + Vite	5173
BFF	Node + Express	4000
Products	Spring Boot (H2 in-memory)	8081
Users (stub)	Spring Boot	8082
Reservations (stub)	Spring Boot	8083
Payments (stub)	Spring Boot	8084
Notifications (stub)	Spring Boot	8085
Postgres (infra dev)	Docker compose	5432
Redis (infra dev)	Docker compose	6379
Redpanda (Kafka)	Broker	9092
MinIO (infra dev)	S3-like	9000 / 9001
Mailpit (infra dev)	SMTP test UI	1025 / 8025
Jaeger (infra dev)	Tracing UI	16686

Variables d’environnement
BFF (apps-bff/bff/.env)
ini

PORT=4000
PRODUCTS_API=http://localhost:8081
CORS_ORIGINS=http://localhost:5173
Copiez l’exemple : copy .env.example .env (Windows) / cp .env.example .env (Bash)

Products (dev)
Utilise H2 en mémoire (pas de .env nécessaire).

Fichier : services/products/src/main/resources/application.yml.

Passage à Postgres + Flyway : voir Roadmap.

Endpoints (dev)
BFF
GET http://localhost:4000/health → { ok: true }

GET http://localhost:4000/offers?city=Paris&q=panier → proxy vers Products (projection identique)

Products
GET http://localhost:8081/products →


{ "items": [ { "id": "...", "title": "...", "price": 0, "merchantName": "...", "city": "...", "imageUrl": "..." } ] }
Arborescence du repo

ant-gasp/
├─ apps/
│  ├─ web/                 # React + Vite + TS + Tailwind
│  └─ admin/               # Stub React Admin (à venir)
├─ apps-bff/
│  └─ bff/                 # Node + Express (TypeScript)
├─ services/               # Microservices Spring Boot
│  ├─ products/            # Products (H2, seed)
│  ├─ users/               # Stub
│  ├─ reservations/        # Stub
│  ├─ payments/            # Stub
│  └─ notifications/       # Stub
├─ contracts/
│  ├─ openapi/bff.yaml     # Contrat REST BFF
│  └─ avro/                # Événements Kafka
├─ platform/               # Configs infra (postgres/redis/minio/kafka/otel/jaeger)
├─ ops/                    # docker-compose, Helm charts, ArgoCD, Terraform, SRE
├─ tests/                  # e2e Playwright + dossiers unit/integration/contract
├─ .github/workflows/      # CI, CD, Security
├─ Makefile
└─ README.md
Développement
Web (React)

cd apps/web
pnpm dev          # dev server
pnpm build        # build prod
pnpm preview      # prévisualisation build
BFF (Express + TS)


cd apps-bff/bff
pnpm dev          # tsx watch
pnpm build        # tsc -> dist
pnpm start        # node dist/index.js
Products (Spring Boot)


cd services/products
mvn spring-boot:run
# ou: mvn -q -DskipTests package
Tests
E2E (Playwright) : un exemple est fourni (tests/e2e/example.spec.ts).

Pour l’exécuter, installe Playwright dans apps/web (ou dans un dossier tests dédié) :


cd apps/web
pnpm dlx playwright install
# puis lance web + bff + products, et lance le test depuis la racine (ou apps/web)
Unit/Integration : dossiers prêts (tests/unit, tests/integration) — on ajoutera Vitest/Jest et Testcontainers dans les lots suivants.

Contract : dossier tests/contract (PACT prévu dans la roadmap).

Ops & Observabilité
Docker Compose (infra de dev)


cd ops/docker
cp .env.dev .env      # (optionnel)
docker compose -f docker-compose.dev.yml up -d
Services : Postgres, Redis, Redpanda, MinIO, Mailpit, Jaeger, OTel collector.

Note : La tranche “Hello Offers” utilise H2, donc compose est optionnel pour démarrer.

Kafka topics


cd platform/kafka
bash create-topics.sh   # nécessite rpk installé dans l'image redpanda (ou en local)
MinIO (bucket)


# Crée le bucket antgasp-media (depuis le conteneur)
docker exec -it <minio_container> sh /config/bucket-setup.sh
Jaeger
UI : http://localhost:16686

CI/CD
CI (.github/workflows/ci.yml) : build web (Vite), bff (tsc), products (Maven).

Security (security.yml) : Trivy (scan de repo).

CD (cd.yml) : placeholder (à brancher sur vos registries + déploiements).

Helm : charts ops/helm/bff et ops/helm/products.

ArgoCD : ops/argo/app-of-apps.yaml (GitOps).

Terraform : exemple minimal S3 (ops/terraform).

Conventions
Node : pnpm, TypeScript strict, axios, React 18, React Router.

Java : Spring Boot 3, Java 17, conventions DTO/Service/Repository, open-in-view: false.

Commit : style conventional commits (ex. feat:, fix:, chore:…).

Env : ne pas committer de secrets (.env ignorés). Utiliser les *.example.

Dépannage
PowerShell & multi-ligne : ne pas utiliser \ en fin de ligne (c’est du Bash).
Pour un message de commit long, utilisez plusieurs -m sur une seule ligne ou un here-string PowerShell.

CORS : si le front ne peut pas appeler le BFF, vérifiez CORS_ORIGINS dans apps-bff/bff/.env.

Port déjà utilisé : changez le port dans vite.config.ts (web) ou PORT (BFF) / application.yml (services).

BFF → Products 500 : assurez-vous que Products est démarré sur 8081, et que PRODUCTS_API pointe dessus.

Roadmap
 Products → PostgreSQL + Flyway (remplacer H2, migrations V1__init.sql, Testcontainers)

 Reservations : POST /reservations (idempotency-key) + Outbox vers Kafka

 Keycloak : realm antgasp, client web, middleware JWT côté BFF, useAuth côté web

 Images : MinIO + imgproxy (URLs signées)

 Observabilité : OpenTelemetry (traces), métriques Prometheus, logs centralisés

 Tests : IT Spring, e2e Playwright CI, PACT BFF↔services, coverage

 CI/CD : build images Docker, push registry, déploiement Helm via ArgoCD (canary/rollouts)

 Mobile (Expo) : réutiliser le contrat OpenAPI, navigation, géoloc, deep-links

Licence
Choisissez la licence adéquate (MIT/Apache-2.0/Propriétaire). Placeholder pour l’instant.

Auteurs
@votre-pseudo — Maintainer
Contributions bienvenues via PR ✨

Annexe — Commandes rapides


# Build complet
cd services/products && mvn -q -DskipTests package && cd ../..
cd apps-bff/bff && pnpm build && cd ../..
cd apps/web && pnpm build && cd ../..

# Lancer individuellement
(services/products) mvn spring-boot:run
(apps-bff/bff)     pnpm dev
(apps/web)         pnpm dev

# Docker infra dev
cd ops/docker && docker compose -f docker-compose.dev.yml up -d