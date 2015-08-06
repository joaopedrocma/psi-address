<!DOCTYPE html>
<%@include file="taglib.jsp"%>

<html>
<head>
<title>Cliente</title>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

</head>
<body>
<form id="sampleForm" method="post" action="/profile">
     <div>
         <input type="text" name="firstname" id="firstname">
     </div>
     <div>
         <input type="text" name="lastname" id="lastname">
     </div>
     <div>
         <button type="submit" name="submit">Submit</button>
     </div>
</form>
</body>
</html>