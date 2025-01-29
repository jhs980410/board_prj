<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="/js/login.js"></script>
</head>
<body>

<div>
	<span>아이디 : </span>
	<input type='text' id='userId' placeholder='아이디를 입력하세요.'>
</div>
<div>
	<span>비밀번호: </span>
	<input type='password' id='userPw' placeholder='비밀번호를 입력하세요.'>
</div>
<div>
	<input type='button'  value="로그인" onclick='userLogin()'>
	<input type='button' onclick='' value="회원가입">
</div>

</body>
</html>