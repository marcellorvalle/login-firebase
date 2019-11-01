package com.tutospringvue.backend;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

@SpringBootApplication
public class BackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	public FirebaseAuth firebaseAuth() throws IOException {

		final InputStream serviceAccount = new ClassPathResource("/vue-auth-ea2ec-firebase-adminsdk.json").getInputStream();

//		FileInputStream serviceAccount = new FileInputStream(
//				"vue-auth-ea2ec-firebase-adminsdk.json");

		FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount))
				.build();
				//.setDatabaseUrl("https://mydatabaseurl.firebaseio.com/").build();

		FirebaseApp.initializeApp(options);

		return FirebaseAuth.getInstance();
	}
}
