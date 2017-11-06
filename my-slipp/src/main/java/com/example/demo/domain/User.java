package com.example.demo.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(nullable=false, length=20)
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
