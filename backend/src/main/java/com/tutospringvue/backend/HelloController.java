package com.tutospringvue.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Olá! A data atual é: " + new Date().toString();
    }
}
