package com.example.demo.web;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {
	private ArrayList<User> users = new ArrayList<User>();
	
	@PostMapping("/create")
	public String create(User user) {
		System.out.print("user : " + user);
		users.add(user);
		return "redirect:/list";
	}
	
	@GetMapping("/list")
	public String list(Model model) {
		model.addAttribute("users", users);
		return "list";
		}
}