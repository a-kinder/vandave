<?php 
if(isset($_POST['pass']) && $_POST['pass'] === getenv('PASSWORD')) {
	if(isset($_POST['title']) && isset($_POST['body'])) {
	    $data = "
	    var data = {
	    	title: '".$_POST['title']."',
	    	body: '".$_POST['body']."'
	    };
	";
	    $ret = file_put_contents('en.js', $data);
	    if($ret === false) {
	        die('There was an error writing this file');
	    }
	    header("Location: index.html");
	die();
	}
} else {
	die('Must provide password');
}