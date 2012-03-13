
$(document).ready(function() {
	alert("Listo!");
});

document.getElementById('alias').focus();

$("#buttonday1").click(function(event) {
	
        event.preventDefault(); 
        
        var param = $("#alias").val();
	url = "http://localhost/day1/api/dispatcher.php";
        
        $.post(url, {service: 'welcome.hello', params: {name: param}},
		function(data){
                    //alert(data);
                    $("#response").html(data);
		});

});