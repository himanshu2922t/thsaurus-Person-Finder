<?php
ob_start();
session_start();
error_reporting(0);
$msg = $_SESSION['msg'];
$em = $_SESSION['email'];
$pas = $_SESSION['pass'];
?>
<!DOCTYPE html>
<html lang="en">
<head>

    <title>Login</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
    <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
    <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
    <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
    <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
    <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
    <link rel="stylesheet" type="text/css" href="css/util.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="icon" type="x-icon/image" href="images/logo.png">
    
    
</head>
<body>
	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-40 p-b-30">
                <form class="login100-form validate-form" method="post" action="login_success.php">
                    <center><label><?php echo $msg; ?></label></center>
                    <span class="login100-form-title p-b-40">
                        Login
                    </span>

                    <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter email: ex@abc.xyz">
                        <input class="input100" type="text" name="email" placeholder="Email" value="<?php echo $em; ?>">
                        <span class="focus-input100"></span>
                    </div>

                    <div class="wrap-input100 validate-input m-b-20" data-validate="Please enter password">
                        <span class="btn-show-pass">
                            <i class="fa fa fa-eye"></i>
                        </span>
                        <input class="input100" type="password" name="pass" placeholder="Password" value="<?php echo $pas; ?>">
                        <span class="focus-input100"></span>
                    </div>

                    <div class="container-login100-form-btn">
                        <button type="submit" class="login100-form-btn">
                            Login
                        </button>
                    </div>
                    
                    <div>
                        <a href="../index.html" class="btn-login-with bg1 m-t-90">
                            <i class="fa fa-home"></i>
                            Back to Home
                        </a>
                    </div>

                    <div class="flex-col-c p-t-40">
                        <span class="txt2 p-b-10">
                            Don’t have an account?
                        </span>

                        <a href="signup.html" class="txt3 bo1 hov1">
                            Register now
                        </a>
                    </div>

                </form>
			</div>
		</div>
	</div>

	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
	<script src="vendor/animsition/js/animsition.min.js"></script>
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="vendor/select2/select2.min.js"></script>
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
	<script src="vendor/countdowntime/countdowntime.js"></script>
	<script src="js/main.js"></script>

</body>
</html>
<?php session_destroy(); ?>