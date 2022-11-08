
const { MunicipalityMimageSchema } =require('./MunicipalityMimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const municipalitySchema = new Schema({
Underscoreid:String , 


mname:String , 




 mcandidates: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'candidate'
  }

]
, 

mimage:  
MunicipalityMimageSchema
 



})

module.exports = {
  Municipality : mongoose.model('municipality', municipalitySchema),
}

