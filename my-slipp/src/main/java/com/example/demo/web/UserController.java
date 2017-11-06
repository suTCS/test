package com.example.demo.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.domain.User;
import com.example.demo.domain.UserRepository;

@Controller
@RequestMapping("/users")
public class UserController {
	//private ArrayList<User> users = new ArrayList<User>();
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("")
	public String create(User user) {
		System.out.print("user : " + user);
		//users.add(user);
		userRepository.save(user);
		return "redirect:/users";
	}
	
	@GetMapping("")
	public String list(Model model) {
		model.addAttribute("users", userRepository.findAll());
		return "list";
		}
}
