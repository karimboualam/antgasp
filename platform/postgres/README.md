# Postgres (local / dev)
- Image par défaut: `postgres:16` (dans `ops/docker/docker-compose.dev.yml`).
- Active `uuid-ossp` (et **optionnellement** PostGIS si tu utilises l'image `postgis/postgis`).
- Les scripts du dossier `init/` sont exécutés au démarrage du conteneur s'ils sont montés dans `/docker-entrypoint-initdb.d`.

## Fichiers
- `init/01_extensions.sql` : extensions utiles.
- `init/02_seed.sql` : exemple de seeds.

