 FROM openjdk:8-jdk-alpine
 VOLUME /tmp
 ARG DEPENDENCY=build/libs/dependency/
 COPY ${DEPENDENCY}/BOOT-INF/lib /app/lib
 COPY ${DEPENDENCY}/META-INF /app/META-INF
 COPY ${DEPENDENCY}/BOOT-INF/classes /app
 ENTRYPOINT ["java","-cp","app:app/lib/*","net.corda.explorer.ExplorerServer"]
