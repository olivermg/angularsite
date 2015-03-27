mongoose = require 'mongoose'
bcrypt = require 'bcrypt'

bcryptDifficulty = 10

bcryptIt = (pw) ->
	return bcrypt.hashSync(pw, bcryptDifficulty)

schema = mongoose.Schema {
	email: String,
	password: { type: String, set: bcryptIt }
}

model = mongoose.model 'User', schema

module.exports = {
	schema: schema,
	model: model
}

