<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="resources/css/bootstrap.min.css" />
		
		<script src="resources/js/jquery.js"></script>
		<script src="resources/js/bootstrap.js"></script>
		<script src="resources/js/angular.js"></script>
		
		<script src="js/angularApp.js"></script>
		
	</head>
	<body data-ng-app="app" data-ng-controller="MailController">
		<form class="col-md-4">
			<div class="form-group">
				<label for="Mail">Mail</label>
				<input id="Mail" type="text" class="form-control" placeholder="Mail" data-ng-model="email" data-ng-change="validateEmail()">
				<span>{{message}}</span>
			</div>
	  	</form>
	</body>
</html>
