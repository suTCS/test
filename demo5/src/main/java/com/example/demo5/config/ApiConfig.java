package com.example.demo5.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

@Configuration
public class ApiConfig {
	//the ObjectMapper will define how JSON strings in the request body are deserialized 
		//from requests in POJOs or Plain Old Java Objects, which we use to model our data.
		//The ObjectWriter will define how we serialize our Java objects into a JSON string 
		//in the response body.
	
		
		public ObjectMapper objectMapper() {
			ObjectMapper objectmapper = new ObjectMapper();
			objectmapper.registerModule(new JavaTimeModule());
			return new ObjectMapper();
		}
		
		@Bean
		public ObjectWriter objectWritter(ObjectMapper objectMapper) {
			return objectMapper.writerWithDefaultPrettyPrinter();
		}
}
