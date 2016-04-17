<?php
	define('__ADMIN__','fe018b44b47e3836032aee281e5a35d9');
	$loggedin = false;
	if (isset($_POST['pwd'])){
		setcookie('password',md5($_POST['pwd']),0);
		if (md5($_POST['pwd']) == __ADMIN__)
			$loggedin = true;
	}elseif (isset($_COOKIE['password']) && $_COOKIE['password'] == __ADMIN__)
		$loggedin = true;
	if (isset($_POST['pwd']))
		echo json_encode(array(
			'status' => $loggedin
		));
?>