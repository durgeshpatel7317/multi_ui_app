FROM maven:3.8-openjdk-17-slim

WORKDIR /app
COPY demo.jar /app/demo.jar

ENTRYPOINT ["java", "-jar", "demo.jar"]