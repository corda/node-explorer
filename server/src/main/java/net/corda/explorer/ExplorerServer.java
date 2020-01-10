package net.corda.explorer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExplorerServer {

    public static void main(String[] args) {
        SpringApplication.run(ExplorerServer.class, args);
    }
}
