<?php 
if(isset($_POST['pass']) && $_POST['pass'] === getenv('PASSWORD')) {
	if(isset($_POST['title']) && isset($_POST['body'])) {
		$title = filter_var( $_POST['title'], FILTER_SANITIZE_STRING);
		$body = filter_var( $_POST['body'], FILTER_SANITIZE_STRING);
		$data = json_encode([
	'title' => $title,
	'body' => $body
			]);
	    $ret = file_put_contents('en.json', $data);
	    if($ret === false) {
	        die('There was an error writing this file');
	    }
	    header("Location: index.html");
	die();
	}
} else {
	die('Incorrect password');
}