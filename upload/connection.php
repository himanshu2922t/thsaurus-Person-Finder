<?php
	$con=mysqli_connect("localhost","root","","thsaurus");
	if($con->mysqli_connect){
		die("connection failed".$con->connect_error);
	}
	else{
		echo 'Database connected';
	}
?>