var mainProject = new Schema({
    Users: [{
        id: Schema.User.ObjectId, 
        name: String,
        required: true
    }],

    Techologies: [{
        name: {type: String, required: true},
        id: ObjectId,
        required: true
    }],

    Name: {
        type: String,
        required: true    
    },

    Description: String,

    ScreenShots: {
        id: ObjectId,
        type: Buffer
    },

    TimeBegin: Date,

    TimeEnd: Date,

    Tags: [{String}],

    Stage: {
        type: Boolean
        image: {type: Buffer, id: ObjectId}
    }

});

var reqProject = new Schema({
    Name: String,
    Description: String,
    Tags: String,

    Techologies: [{
        name: {type: String, required: true},
        id: ObjectId,
        required: true
    }],


    ScreenShots: {
        id: ObjectId,
        type: Buffer
    },

    Stage: [{
        in_progress: Boolean,
        Estimated: Boolean,
        Discussed: Boolean
    }]
});