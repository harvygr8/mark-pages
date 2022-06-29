const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema({
  pagekey:{
    type:String,
    required:true,
    unique:true
  },
  content:{
    type:String,
    required:true,
  },
})

export default mongoose.models.page || mongoose.model('page',PageSchema);
