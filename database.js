var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;



var user = new Schema({
    _id: ObjectId,
    name: { type: String, required: true },
    avatar: Buffer,
    required: true
});

var technology = new Schema({
    name: { type: String, required: true },
    image: { type: Buffer },
    required: true
});

var sreenshot = new Schema({
    _id: ObjectId,
    type: Buffer
});

var tag = new Schema({
    _id: ObejctId,
    type: String
});



var completedProject = new Schema({

    Users: [user],

    Technologies: [technology],

    Name: String,

    Description: String,

    ScreenShots: [screenshot],

    TimeBegin: {
        time: Date,
        date: { type: Date, required: true },
        required: true
    },

    TimeBegin: {
        time: Date,
        date: { type: Date, required: true },
        required: true
    },

    Tags: [tag],

    Stage: {
        completed: Boolean,
        image: Buffer
    }
});


var requestedObject = new Schema({

    Users: [user],

    Technologies: [technology],

    Name: String,

    Description: String,

    ScreenShots: [screenshot],

    TimeBegin: {
        time: Date,
        date: { type: Date, required: true },
        required: true
    },

    TimeBegin: {
        time: Date,
        date: { type: Date, required: true },
        required: true
    },

    Tags: [tag],

    Stage: {
        In_Progress: Boolean,
        Estimated: Boolean,
        Discussed: Boolean
    }
});








