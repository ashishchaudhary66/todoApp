const Todo=require('../models/Todo');

exports.deleteTodo = async(req,res)=>{
    try{
        const id=req.params.id;
        const response=await Todo.findByIdAndDelete(id);

        res.status(200).json({
                success:true,
                data:response,
                message:`Data with id=${id} deleted successfully`
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