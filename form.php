<?php 
if(isset($_POST['pass']) && $_POST['pass'] === getenv('PASSWORD')) {
	$langs = ['en', 'fr'];

	foreach ($langs as $l)
	{
		$langlink = 	filter_var( $_POST['lang-link-' . $l], FILTER_SANITIZE_STRING);
		$title = 			filter_var( $_POST['title-' . $l], FILTER_SANITIZE_STRING);
		$subtitle = 	filter_var( $_POST['subtitle-' . $l], FILTER_SANITIZE_STRING);
		$add1 = 			filter_var( $_POST['add1-' . $l], FILTER_SANITIZE_STRING);
		$add2 = 			filter_var( $_POST['add2-' . $l], FILTER_SANITIZE_STRING);
		$add3 = 			filter_var( $_POST['add3-' . $l], FILTER_SANITIZE_STRING);
		$date = 			filter_var( $_POST['date-' . $l], FILTER_SANITIZE_STRING);
		$time = 			filter_var( $_POST['time-' . $l], FILTER_SANITIZE_STRING);

		$data = json_encode([
			'lang-link' => $langlink,
			'title' => $title,
			'subtitle' => $subtitle,
			'address-line-1' => $add1,
			'address-line-2' => $add2,
			'address-line-3' => $add3,
			'date' => $date,
			'time' => $time
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