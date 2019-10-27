package com.tutospringvue.backend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {
    @Value("${app.origins}")
    private String[] origins;
    @Value("${app.methods}")
    private String[] methods;
    @Value("${app.headers}")
    private String[] headers;


    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(origins)
                .allowedHeaders(headers)
                .allowedMethods(methods);
    }
}
