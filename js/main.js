jQuery(document).ready(function($) {
    //do jQuery stuff when DOM is ready
	console.log('La page est chargée');
	//function logincall() {
		console.log('logincall');
		try {
			console.log('try');
			var usrname = 'djamouha@gmail.com';//document.getElementById('userid').value;
			var passwrd = 'gfsdg45gfd56g4d54gd646gdf4';//document.getElementById('passid').value;

			if (usrname == null || usrname == '' || passwrd == null || passwrd == '') {
				console.log('Please enter Username AND Password');
				return;
			}

			var result = sforce.connection.login(usrname, passwrd);

			console.log("Logged in with session id " + result.sessionId);
		} catch (error) {
			console.log('catch');
			console.log(error);
		}

	//}
	
	console.log('fin chargement page');
	
	$('h1').velocity({
		translateY:[0,200],
		translateX:[180,0]
	},
					 {
		duration:3000
	}
					);
	console.log("V E L O C I T Y");
});
