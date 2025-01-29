package com.home.controller;

public class UserController {
	
	public String login(String userId, String userPw) {
		try {
			if (userId.isEmpty()) {
				return "";
			}else {
					if ((userId.equals("양정") && userPw.equals("1234")) ) {
					return userId;
					}else {
					return "회원이 아닙니다.";
					}
			}
			
			
		} catch (NullPointerException e) {
			return "";
		}
	
		
			
			
		
	}
}
