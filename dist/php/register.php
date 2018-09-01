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
	$time = time();
	$sql2 = "select username from jinli_users where username = '{$username}'";
	$query=mysql_query($sql2);
    $rows = mysql_num_rows($query);
	if($rows>0){
		echo "重名";
		exit;
	}else{
		$sql = "insert into jinli_users(username, password, create_time) values('{$username}','{$password}',{$time})";
		echo "注册成功";
	}
	
	$res = mysql_query($sql);
	/* if($res){
		echo "<script>alert('注册成功！');location.href='../register.html';</script>";
	}else{
		echo "<script>alert('注册失败！');location.href='../register.html';</script>";
	} */
	mysql_close($link);
 ?>
 
  