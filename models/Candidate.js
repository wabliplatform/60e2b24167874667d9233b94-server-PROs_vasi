
const { MunicipalityMimageSchema } =require('./MunicipalityMimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
Underscoreid:String , 


cname:String , 


cbio:String , 


cimage:  
MunicipalityMimageSchema
 



})

module.exports = {
  Candidate : mongoose.model('candidate', candidateSchema),
}

