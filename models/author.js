var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        max: 100
    },
    family_name: {
        type: String,
        required: true,
        max: 100
    },
    date_of_birth: {
        type: Date
    },
    date_of_death: {
        type: Date
    },
});

// Virtual for author's full name
AuthorSchema.virtual('name').get(function () {
    //handle errors of either blank first name or family name
    var fullname = '';
    if (this.first_name && this.family_name) {
        fullname = this.family_name + ', ' + this.first_name;
    }
    if (!this.first_name || !this.family_name) {
        fullname = '';
    }
    return fullname;
});

// Virtual for author's URL
AuthorSchema.virtual('url').get(function () {
    return '/catalog/author/' + this._id;
});

// Virtual for author's lifespan
AuthorSchema.virtual('lifespan').get(function () {
    var lifetime = '';
    if (this.date_of_birth) {
        lifetime = moment(this.date_of_birth).format('MMMM Do, YYYY');
    }
    lifetime += ' - ';
    if (this.date_of_death) {
        lifetime += moment(this.date_of_death).format('MMMM Do, YYYY');
    }
    return lifetime;
    //return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

AuthorSchema.virtual('dobFormatted').get(function () {
    return moment(this.date_of_birth).format('YYYY-MM-DD');
});

AuthorSchema.virtual('dodFormatted').get(function () {
    return moment(this.date_of_death).format('YYYY-MM-DD');
});


// Export Model
module.exports = mongoose.model('Author', AuthorSchema);