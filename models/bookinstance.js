var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var enu = {
    values: ['Available', 'Maintenance', 'Loaned', 'Reserved']
};

var BookInstanceSchema = new Schema({
    book: {
        type: Schema.ObjectId,
        ref: 'Book',
        required: true
    },
    imprint: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: enu,
        default: 'Maintenance'
    },
    due_back: {
        type: Date,
        default: Date.now
    },
});

// Virtual for bookinstance's URL
BookInstanceSchema.virtual('url').get(function () {
    return '/catalog/bookinstance/' + this._id;
});

// Virtual to format dates using moment
BookInstanceSchema.virtual('due_back_formatted').get(function () {
    return moment(this.due_back).format('MMMM Do, YYYY');
});


// Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);