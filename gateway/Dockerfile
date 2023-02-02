FROM maven:3.8-openjdk-17-slim

WORKDIR /app
COPY gateway.jar /app/gateway.jar

ENTRYPOINT ["java", "-jar", "gateway.jar"]