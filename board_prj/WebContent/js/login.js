/**
 * login.jsp 
 */

$(document).ready(function() {
    console.log("로그인 화면");
});

function userLogin(){
	let userId = $('#userId').val();
	let userPw = $('#userPw').val();
	
	console.log(userId);
	console.log(userPw);
	
	const userForm = {
		userId : userId,
		userPw : userPw
	}
	
	$.ajax({
		url : '/user/login',
		method : 'post',
		data : JSON.stringify(userForm),
		dataType : 'json',
		contentType : 'application/json; charset=UTF-8',
		success: function(response) {
		    if (response === userId) {
		        alert(userId + '님, 접속 성공!');
		    } else {
		        alert(userId + '회원 확인 불가');
		    }
		},
		error: function(xhr, status, error) {
		    alert("로그인 요청 실패: " + error);
		}
	});
}
