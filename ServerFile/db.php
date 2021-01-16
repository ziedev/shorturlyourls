<?php
try{
$db = new PDO('mysql:host=localhost;dbname=dbname','dbuser','dbpass');
}
	catch(Exception $e) {
		die ('Error: ' . $e->getMessage());
	}
?>