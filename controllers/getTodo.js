const Todo=require('../models/Todo');

exports.getTodo = async(req,res)=>{
    try{
        const response=await Todo.find({});
        res.status(200).json({
                success:true,
                data:response,
                message:"All data are fetched"
            }
        );
    }
    catch(error){
        console.log(error)
        console.error(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message,
        })
    }
}

exports.getTodoById= async(req,res)=>{
    try{
        const id=req.params.id;
        const response=await Todo.findById({_id:id});

        //Not Found
        if(!response){
            return res.status(404).json({
                success:false,
                message:"No data found with given id"
            })
        }

        //found
        res.status(200).json({
                success:true,
                data:response,
                message:`Todo ${id} data successfully fetched`
            }
        );
    }
    catch(error){
        console.log(error)
        console.error(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message,
        })
    }
}