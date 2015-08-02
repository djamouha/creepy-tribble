jQuery(document).ready(function($) {
    //do jQuery stuff when DOM is ready
	console.log('La page est chargée');
	function logincall() {

		try {
			var usrname = 'djamouha@gmail.com';//document.getElementById('userid').value;
			var passwrd = 'Rootz46k7du.2';//document.getElementById('passid').value;

			if (usrname == null || usrname == '' || passwrd == null || passwrd == '') {
				alert('Please enter Username AND Password');
				return;
			}

			var result = sforce.connection.login(usrname, passwrd);

			alert("Logged in with session id " + result.sessionId);
		} catch (error) {
			alert(error);
		}

	}
	
	console.log('fin chargement page');
});
