<?php
	header("Access-Control-Allow-Origin: *");
	$local= "localhost";
	$username= "creatnlr_pfolio";
	$password= "creatnlrn";
	$database= "creatnlr_portfolio";
	$con= mysqli_connect($local,$username,$password,$database);

	if (isset($_POST['score'])) {
		$name= $_POST['name'];
		$score= $_POST['score'];
		$sql= "INSERT INTO `result`(`user`, `score`) VALUES ('$name','$score')";
		$insert_db= mysqli_query($con,$sql);
	}
?>
