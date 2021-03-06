var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vendorSchema = new Schema({
    name: { type:String },
    email: { type:String, required: false, default: "" },
    phone: { type: Number, unique: true, required: true},
    password: { type:String },
    createdAt: { type: Date, default: Date.now() },
    lastLogin: { type: Date,default: Date.now() , required: false },
    googleOAuth: { type: String, defaule: "" },
    facebookOAuth: { type: String, default: "" },
    verified: { type: Boolean, default: false },
    otp: [{
        forgotPassword: { type: Number, default: 0 },
        accountVerify: { type: Number, default: 0 },
    }],
    addressAdded: {type:Boolean, default:false},
    address: {
        address: { type: String, default: "" },
        landmark: { type: String, default: "" },
        state: { type: String, default: ""},
        pin: { type: Number, default: ""},
        lat: { type: String, default: "" },
        lang: { type: String,default: "" },
        dist: { type: String, default: "" }
    },
    rating: {type: Number, default: 0 }
});

var vendorModel = mongoose.model('vendor', vendorSchema);
module.exports = vendorModel;