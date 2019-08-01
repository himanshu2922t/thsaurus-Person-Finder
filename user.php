<?php 
	session_start();
	if(isset($_SESSION['name']))
	$nm=$_SESSION['name'];
	else
	$nm= 'please login first';
?>
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Appro HTML Template</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="x-icon/image" href="images/logo.png">
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    <link rel="shortcut icon" type="image/ico" href="images/favicon.ico" />
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/themify-icons.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/space.css">
    <link rel="stylesheet" href="css/theme.css">
    <link rel="stylesheet" href="css/overright.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <script src="js/vendor/modernizr-2.8.3.min.js"></script>

	<link rel="stylesheet" type="text/css" href="login/vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="login/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="login/fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
    <link rel="stylesheet" type="text/css" href="login/vendor/animate/animate.css">
    <link rel="stylesheet" type="text/css" href="login/vendor/css-hamburgers/hamburgers.min.css">
    <link rel="stylesheet" type="text/css" href="login/vendor/animsition/css/animsition.min.css">
    <link rel="stylesheet" type="text/css" href="login/vendor/select2/select2.min.css">
    <link rel="stylesheet" type="text/css" href="login/vendor/daterangepicker/daterangepicker.css">
    <link rel="stylesheet" type="text/css" href="login/css/util.css">
    <link rel="stylesheet" type="text/css" href="login/css/main.css">
    <link rel="icon" type="x-icon/image" href="images/logo.png">
</head>
<body>
    <section class="relative fix" id="contact">
        <div class="space-60"></div>
        <div class="section-bg overlay-bg">
            <img src="images/bg3.jpg" alt="">
        </div>
        <div class="container">
            <div class="row wow fadeInUp">
                <div class="col-xs-12 col-md-6 col-md-offset-3 text-center text-white">
                    <h3 class="text-uppercase">Welcome, <lable><?php echo $nm; ?></lable></h3>
                </div>
            </div>
            <div class="space-60"></div>
        </div>
    </section>
    <div>
        <div class="space-60"></div>
        <p style="text-align:center">No Content Availabale at current.</p>
    </div>
	<div class="container-login100-form-btn p-t-40">
        <button type="submit" class="login100-form-btn">
             <a href="login/logout.php" style="color:#FFF;">
			 <?php 
				if(isset($_SESSION['name'])) 
					echo "Logout";
				else
					echo "Login";
			?>
			</a>
        </button>
    </div>
</body>
</html>
