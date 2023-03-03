const mongoose = require('mongoose');


const formSchema = new mongoose.Schema({
	name1: {
		type: String,
		//required: false,
		trim: true,
	},
	name2: {
		type: String,
		//required: false,
		trim: true,
	},
	gender: {
		type: String,
		//required: false,
		trim: true,
	},
	city: {
		type: String,
		//required: false,
		trim: true,
	},
	email: {
		type: String,
		//required: false,
		trim: true,
	},
    dob: {
        type: Date,
        //required: false,
        trim: true,
    },
    termsConditions: {
        type: String,
        // required: false,
        trim: true,
    }
});


module.exports = mongoose.model('Form', formSchema);