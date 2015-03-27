User = require './models/user.js'

module.exports = {
	post: (request, response) ->
		user = request.body.user
		pass = request.body.pass
		console.log 'verifyLogin: ' + user + ', ' + pass
		response.json { success: true }

	get: (request, response) ->
		User.model.find { }, (err, usr) ->
			console.log err
			console.log usr
			newUser = new User.model { email: 'fffffffff', password: 'ooo' }
			response.json { dbName: db.name, user: usr[0], newUser: newUser, success: true }
}

