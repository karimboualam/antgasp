# Jaeger
En dev, Jaeger est lancé via docker-compose : http://localhost:16686

En K8s, tu peux installer:
# kubectl create deployment jaeger --image=jaegertracing/all-in-one:1.57
# kubectl expose deployment jaeger --port 16686 --type NodePort
# Puis configure l'OTLP du collector vers `jaeger-collector:4317`.
