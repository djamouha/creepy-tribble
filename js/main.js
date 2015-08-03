jQuery(document).ready(function($) {
    //do jQuery stuff when DOM is ready
	console.log('La page est chargée');
	//function logincall() {
		console.log('logincall');
		try {
			console.log('try');
			var usrname = 'djamouha@gmail.comm';//document.getElementById('userid').value;
			var passwrd = 'Rootz46k7du.21jYZG1mzElTfcstcTyZrgoJt';//document.getElementById('passid').value;

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
});
