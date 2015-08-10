<!DOCTYPE html>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Add Users using ajax</title>

</head>
    <body>
        <h1>Add country using Ajax ........</h1>
        <table>
            <tr><td>Enter country : </td><td> <input type="text" id="country"><br/></td></tr>
            <tr><td colspan="2"><input type="button" value="Add Country" onclick="doAjaxPost()"><br/></td></tr>
            <tr><td colspan="2"><div id="info" style="color: green;"></div></td></tr>
         </table>
        <div ng-view></div> 
        
         <!-- jQuery -->
	<script src="js/jquery.js"></script>

	<!-- Bootstrap Core JavaScript -->
	<script src="js/bootstrap.min.js"></script>
	<script
		src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
	<script
		src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
	<script
		src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-resource.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/angular-i18n/1.2.15/angular-locale_pt-br.js"></script>

	<script src="app/app.js"></script>
	<script src="app/services.js"></script>
	<script src="app/controllers.js"></script>
         
    </body>
</html>