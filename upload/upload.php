<?php
	ob_start();
	session_start();
	error_reporting(0);
	include "connection.php";
	if(isset($_SESSION['id']))
	{
	$name = $_REQUEST['profileTextualDetail.name'];
	$gender = $_REQUEST['profile.gender.id'];
	$age_year = $_REQUEST['profile.ageYrs'];
	$age_month = $_REQUEST['profile.ageMonths'];
	$height_feet = $_REQUEST['profile.heightFeet'];
	$height_inch = $_REQUEST['profile.heightInches'];
	$date_of_missing = $_REQUEST['eventDate'];
	$relationship = $_REQUEST['profile.relationship.id'];
	$dob = $_REQUEST['dateOfBirth'];
	$differently_abled = $_REQUEST['profile.physicalDisability'];
	$descr = $_REQUEST['profileTextualDetail.description'];
	$dis_detail = $_REQUEST['profileTextualDetail.disabilityDetails'];
	$m_ill = $_REQUEST['profile.mentalDisability'];
	$hair_length = $_REQUEST['profile.hairSize.id'];
	$hair_color = $_REQUEST['profile.hairColor.id'];
	$eye_type = $_REQUEST['profile.eyesType.id'];
	$eye_color = $_REQUEST['profile.eyeColor.id'];
	$ear_type = $_REQUEST['profile.earsType.id'];
	$ear_size = $_REQUEST['profile.earsSize.id'];
	$lip_type = $_REQUEST['profile.lipsType.id'];
	$lip_color = $_REQUEST['profile.lipsColor.id'];
	$front_teeth = $_REQUEST['profile.frontTeeth.id'];
	$specs_type = $_REQUEST['profile.spectaclesType.id'];
	$specs_color = $_REQUEST['profile.spectaclesColor.id'];
	$build = $_REQUEST['profile.build.id'];
	$neck_type = $_REQUEST['profile.neckType.id'];
	$top_wear = $_REQUEST['profile.topWear.id'];
	$top_wear_color = $_REQUEST['profile.topWearColor.id'];
	$bottom_wear = $_REQUEST['profile.bottomWear.id'];
	$bottom_wear_color = $_REQUEST['profile.bottomWearColor.id'];
	$foot_wear = $_REQUEST['profile.footWear.id'];
	$foot_wear_color = $_REQUEST['profile.footWearColor.id'];
	$id_marks = $_REQUEST['profileTextualDetail.identificationMarks'];
	$f_name = $_REQUEST['profileTextualDetail.fatherName'];
	$m_name = $_REQUEST['profileTextualDetail.motherName'];
	$f_email = $_REQUEST['profile.fatherEmail'];
	$m_email = $_REQUEST['profile.motherEmail'];
	$f_mob = $_REQUEST['profile.fatherNumber'];
	$m_mob = $_REQUEST['profile.motherNumber'];
	$pri_lang = $_REQUEST['profile.primaryLanguage.id'];
	$other_lang = $_REQUEST['profile.otherKnownLanguages.id'];
	$aadhar = $_REQUEST['profile.aadhaarNo'];
	$state = $_REQUEST['profile.state.id'];
	$dist = $_REQUEST['profile.district.id'];
	$addr = $_REQUEST['profileTextualDetail.address'];
	$pin = $_REQUEST['profile.pinCode'];
	$photo = $_REQUEST['photoFiles'];
	$video = $_REQUEST['videoFiles'];
	$fir_state = $_REQUEST['profile.refNcrbState.ncrbStateId'];
	$fir_dist = $_REQUEST['profile.refNcrbPoliceStation.ncrbPoliceStationId'];
	$police_loc = $_REQUEST['profile.refNcrbDistrict.ncrbDistrictId'];
	$fir_no = $_REQUEST['profile.firnumber'];
	$fir_date = $_REQUEST['firDate'];
	$confirm = $_REQUEST['confirm'];

	$user_id = $_SESSION['id'];
	
	$sql="INSERT INTO missing(user_id,name,age_year,age_month,date_of_missing,dob,descr,m_ill,gender,height_feet,height_inch,relationship,differently_abled,dis_detail,hair_length,hair_coloreye_type,eye_color,ear_size,ear_color,lip_type,lip_color,front_teeth,specs_type,specs_color,complexion,build,neak_type,top_wear,top_wear_color,bottom_wear,bottom_wear_color,foot_wear,foot_wear_color,id_marks,f_name,f_email,f_mob,m_name,m_email,m_mob,pri_lang,other_lang,aadhar,state,dist,addr,pin,photo,video,fir_state,fir_dist,police_loc,fir_no,fir_date,confirm) value('$user_id','$name','$age_year','$age_month','$date_of_missing','$dob','$descr','$m_ill','$gender','$height_feet','$height_inch','$relationship','$differently_abled','$dis_detail','$hair_length,'$hair_coloreye_type','$eye_color','$ear_size','$ear_color','$lip_type','$lip_color','$front_teeth','$specs_type','$specs_color','$complexion','$build','$neak_type','$top_wear','$top_wear_color','$bottom_wear','$bottom_wear_color','$foot_wear','$foot_wear_color','$id_marks','$f_name','$f_email','$f_mob','$m_name','$m_email','$m_mob','$pri_lang','$other_lang','$aadhar','$state','$dist','$addr','$pin','$photo','$video','$fir_state,'$fir_dist','$police_loc','$fir_no','$fir_date','$confirm')";
	mysqli_query($con,$sql);
	echo "Data Uploaded in Database.";
	header("Refresh:2; url=../index.html");
	}
	else
	{
		echo "Please Login First";
		header("Refresh:2; url=../login/login.html");
	}
?>