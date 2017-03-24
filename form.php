<?php 
if(isset($_POST['pass']) && $_POST['pass'] === getenv('PASSWORD')) {
	$langs = ['en', 'fr'];

	foreach ($langs as $l)
	{
		$langlink = 	filter_var( $_POST['lang-link-' . $l], FILTER_SANITIZE_STRING);
		$info = 			str_replace('<var rv-html="dataen.info">',"",$_POST['info-' . $l]);
		$info = 			str_replace("</var>","",$info);
	
		$data = json_encode([
			'lang-link' => $langlink,
			'info' => $info
			]);
		$ret = file_put_contents($l . '.json', $data);
		if($ret === false) {
			die('There was an error writing this file');
		}
	}

	header("Location: /form.html");
	die();
	

} else {
	die('Incorrect password');
}