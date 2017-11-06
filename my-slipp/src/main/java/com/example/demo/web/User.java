package com.example.demo.web;

public class User {
	private String userId;
	private String pw;
	
	
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", pw=" + pw + "]";
	}
	
}
