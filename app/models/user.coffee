mongoose = require 'mongoose'
bcrypt = require 'bcrypt'

bcryptDifficulty = 10

schema = mongoose.Schema {
	email: {
		type: String,
		set: (v) -> return v.toLowerCase(),
		index: { unique: true }
	},
	password: {
		type: String,
		set: (pw) -> return bcrypt.hashSync pw, bcryptDifficulty
	}
}

model = mongoose.model 'User', schema

module.exports = {
	schema: schema,
	model: model
}

