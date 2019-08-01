<?php
ob_start();
session_start();
error_reporting(0);
include "connection.php";
$em=$_REQUEST['email'];
$ps=$_REQUEST['pass'];
$sql="select * from user where email='$em' and pass='$ps'";
$res=mysqli_query($con,$sql);
$arr=mysqli_fetch_array($res);
$nums=mysqli_num_rows($res);
if($nums>0)
{
	$_SESSION['email']=$arr['email'];
	$_SESSION['pass']=$arr['pass'];
	$_SESSION['name']=$arr['name'];
	$_SESSION['id']=$arr['id'];
	echo "Login Successful.";
	echo "Welcome ".$arr['name'];
	header("Refresh:2; url=../index.html");
}
else
{
	session_destroy();
	echo "Wrong Details. Try Again!!!";
	header("Refresh:2; url=login.html");
}
?>