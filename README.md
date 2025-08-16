# Ant-Gasp (vertical slice: Hello Offers)

## Démarrer en local
### Prérequis
- Node 18+ / pnpm
- Java 17 + Maven

### Installation
```bash
corepack enable
cd apps-bff/bff && pnpm i && cd ../../..
cd apps/web && pnpm i && cd ../..
cd services/products && mvn -q -DskipTests package && cd ../..
cp apps-bff/bff/.env.example apps-bff/bff/.env
