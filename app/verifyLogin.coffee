module.exports = {
	post: (request, response) ->
		user = request.body.user
		pass = request.body.pass
		console.log 'verifyLogin: ' + user + ', ' + pass
		response.json { success: true }
}

