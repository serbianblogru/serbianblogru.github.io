<?php header('Content-Type: text/html; charset=UTF-8'); ?><!DOCTYPE html>
	<html xmlns="http://www.w3.org/1999/xhtml" lang="ru-RU">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Serbian Blog ! &rsaquo; Войти</title>
	<link rel='stylesheet' id='wp-admin-css'  href='/wp-admin/css/wp-admin.min_ver-351.css' type='text/css' media='all' />
<link rel='stylesheet' id='buttons-css'  href='/wp-includes/css/buttons.min_ver-351.css' type='text/css' media='all' />
<link rel='stylesheet' id='colors-fresh-css'  href='/wp-admin/css/colors-fresh.min_ver-351.css' type='text/css' media='all' />
<script type='text/javascript' src='/wp-includes/js/jquery/jquery_ver-183.js'></script>
<meta name='robots' content='noindex,nofollow' />
	</head>
	<body class="login login-action-login wp-core-ui">
	<div id="login">
		<h1><a href="http://wordpress.org/" title="Работает на WordPress">Serbian Blog !</a></h1>
	
<form name="loginform" id="loginform" action="/wp-login.php" method="post">
	<p>
		<label for="user_login">Имя пользователя<br />
		<input type="text" name="log" id="user_login" class="input" value="" size="20" /></label>
	</p>
	<p>
		<label for="user_pass">Пароль<br />
		<input type="password" name="pwd" id="user_pass" class="input" value="" size="20" /></label>
	</p>
	<p class="forgetmenot"><label for="rememberme"><input name="rememberme" type="checkbox" id="rememberme" value="forever"  /> Запомнить меня</label></p>
	<p class="submit">
		<input type="submit" name="wp-submit" id="wp-submit" class="button button-primary button-large" value="Войти" />
		<input type="hidden" name="redirect_to" value="/wp-admin/" />
		<input type="hidden" name="testcookie" value="1" />
	</p>
</form>

<p id="nav">
Забыли свой пароль?
</p>

<script type="text/javascript">
function wp_attempt_focus(){
setTimeout( function(){ try{
d = document.getElementById('user_login');
d.focus();
d.select();
} catch(e){}
}, 200);
}

wp_attempt_focus();
if(typeof wpOnload=='function')wpOnload();
</script>

	<p id="backtoblog"><a href="/" title="Потерялись?">&larr; Вернуться назад на Serbian Blog !</a></p>
	
	</div>

	
		<div class="clear"></div>
	</body>
	</html>
	