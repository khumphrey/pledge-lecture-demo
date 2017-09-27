
promiseForUser.then(function (user) {
	var promiseForMessages = DBLibrary.findAllMessagesForUser({where: {id: user.id} });
	return promiseForMessages;
})
.catch(function (err) {
	fixError(err);
	return '';
})
.then(function(messages) {
	makeMessageBox(messages); //if '' then don't build box
})































promiseForUser.then(function (user) {
	var promiseForMessages = DBLibrary.findAllMessagesForUser({where: {id: user.id} });
	return promiseForMessages;
})
.then(function (promisesForMessages) { //based on previous logic (WRONG)
	promisesForMessages.then(function (messages) {
		console.log(messages);
	}) //this is nesting thens and is the same as the
})

//preferable is if returning the promise made it so that the next .then actually had the state and information from that returned promise!! 


promiseForUser.then(function (user) {
	var promiseForMessages = DBLibrary.findAllMessagesForUser({where: {id: user.id} });
	return promiseForMessages;
})
.then(function (messages) {
	console.log(messages);
	return DBLibrary.findCommentsForMessage();	
})