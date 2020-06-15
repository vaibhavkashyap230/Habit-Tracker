//importing mongoose
const mongoose = require('mongoose');

//declaring Schema
const habbitSchema = new mongoose.Schema({
    habbit: {
        type: String,
        required: true
    },
    done: {
        type: Array,
        default: 0
    }
});

//creating the Habbit model
const Habbit = mongoose.model('Habbit',habbitSchema);

module.exports = Habbit;