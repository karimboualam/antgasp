# Runbooks

## BFF 5xx
1. Vérifier les logs BFF (pino) et la connectivité vers `products`.
2. Vérifier la variable `PRODUCTS_API`.
3. Si latence côté `products`: checker la DB (Postgres).

## Products p95 élevé
1. Examiner l'explain plan des requêtes (index ?).
2. Vérifier saturation CPU/heap de la JVM.
3. Si DB saturée: taille des connexions, index manquants.
