<?php
	header("Content-type:text/html;charset=utf-8");
	header("Access-Control-Allow-Origin: *");
	$username = $_POST['username'];
	$password = $_POST['password'];
	$link = mysql_connect('localhost', 'root', 'root');
	if(!$link){
		echo '数据库链接失败';
		exit; //退出
	}
	mysql_set_charset('utf8');
	mysql_select_db('jinlidemo');
	$sql = "SELECT * FROM `jinli_users` WHERE username='$username' ";
	
	
		
	$res = mysql_query($sql);
		//echo $res;
		$i = 0;
		$arr = array();
		while($result = mysql_fetch_assoc($res)){
			$arr[$i] = $result['password']; 
			$i++;
		}
		
		echo json_encode($arr);
	/* if($arr['username'] == $username){
		if($arr['password'] == $password){
				echo "<script>alert('登录成功');location.href='userlist.php';</script>"
			}else{
				echo "<script>alert('密码错误');location.href='register.html';</script>"
			}
		}else{
			echo "<script>alert('用户名不存在');location.href='register.html';</script>"
		} */
?>