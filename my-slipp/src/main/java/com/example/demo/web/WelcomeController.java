package com.example.demo.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WelcomeController {
	@GetMapping("/helloworld")
	public String welcome(String userId, String age, Model model) {
		System.out.print("userId: " + userId + " age: " + age);
		model.addAttribute("userId", userId);
		model.addAttribute("age", age);
		return "welcome";
	}
}
