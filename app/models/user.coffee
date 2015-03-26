mongoose = require 'mongoose'

schema = mongoose.Schema {
	email: String,
	password: String
}

model = mongoose.model 'User', schema

module.exports = {
	schema: schema,
	model: model
}

