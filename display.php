<?php
	header("Access-Control-Allow-Origin: *");
	$local= "localhost";
	$username= "creatnlr_pfolio";
	$password= "creatnlrn";
	$database= "creatnlr_portfolio";
	$con= mysqli_connect($local,$username,$password,$database);
	$counter = 0;
	$sql= "SELECT * FROM `result`";
	$result= mysqli_query($con,$sql);
?>
<?php 	foreach($result as $a) { ?>
<tr>
	<td><?php echo ++$counter;  ?></td>
	<td><?php echo $a['user']; ?></td>
	<td><?php echo $a['score']; ?></td>
</tr>
<?php } ?>