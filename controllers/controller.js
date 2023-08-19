
const getAllCats =(req,res) =>{


    getAllCats((err,result)=>{
               if(!err){
                   res.json({statusCode: 200, data: result, message:'get all cats successful'});
               }
       });
    }

    const postCat = (req,res) => {

         let cat = req.body;
       postCat(cat,(err, result)=>{
           if(err){
               res.json({statusCode:201, data:result, message:'success'})
           }

      });

    }

    module.exports= {postCat, getAllCats}
    