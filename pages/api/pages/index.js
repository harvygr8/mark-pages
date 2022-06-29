import dbConn from '../../../utils/dbConnect';
import PageModel from '../../../models/Page';

dbConn();

export default async(req,res)=>{

  const {
    query:{pagekey},
    method
  } = req;

  switch(method){
    case 'GET':
      try{
        console.log(pagekey);
        const pageData = await PageModel.findOne({"pagekey":pagekey});
        res.status(200).json({success:true,data:pageData});
      }
      catch(err){
        res.status(400).json({success:false});
      }
      break;

    case 'POST':
      try{
         const pageData = await PageModel.create(req.body);
         res.status(201).json({success:true,data:pageData})
      }
      catch(err){
        res.status(400).json({success:false});
      }
      break;
    default:
      res.status(400).json({success:false});
  }
}
