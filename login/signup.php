<?php
	ob_start();
	session_start();
	error_reporting(0);
	include "connection.php";
	$name=$_REQUEST['username'];
	$email=$_REQUEST['email'];
	$mob=$_REQUEST['mobile'];
	$aadhar=$_REQUEST['aadhar'];
	$addr=$_REQUEST['address'];
	$state=$_REQUEST['state'];
	$pin=$_REQUEST['pin_code'];
	$pass=$_REQUEST['password'];

	$sql="INSERT INTO user(name,email,mob,aadhar,addr,state,pin,pass) value('$name','$email','$mob','$aadhar','$addr','$state','$pin','$pass')";
	mysqli_query($con,$sql);
	$_SESSION['msg']="Your account is registered. Now you can log in.";
	$_SESSION['email']=$email;
	$_SESSION['pass']=$pass;
	$_SESSION['name']=$name;
	echo 'and Data saved';
	header("Refresh:2; url=login.php");
?>