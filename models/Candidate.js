
const { MunicipalityMimageSchema } =require('./MunicipalityMimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
Underscoreid:String , 


cimage:  
MunicipalityMimageSchema
 , 


cname:String , 


cbio:String 



})

module.exports = {
  Candidate : mongoose.model('candidate', candidateSchema),
}

