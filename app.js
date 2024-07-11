const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT ||8080;


const arrBrand = [
    {
        percentage:30,
        keyword:"Hair conditioner"
    },
    {
        percentage:10,
        keyword:"Hair oil"
    },
    {
        percentage:10,
        keyword:"Hair shampoo"
    },
    {
        percentage:15,
        keyword:"Hair serum"
    },
    {
        percentage:15,
        keyword:"Hair massager"
    },
    {
        percentage:20,
        keyword:"Hair wax"
    }
]

const arrCom = [
    {
        percentage:30,
        keyword:"C Wax"
    },
    {
        percentage:10,
        keyword:"C oil"
    },
    {
        percentage:10,
        keyword:"C shampoo"
    }
]

app.use(cors());

app.get("/data",(req,res)=>{
   if(req.query.type === "brand"){
    res.status(200).json({
        status:"success",
        data:{
            arr:arrBrand
        }
    })
   }else{
    res.status(200).json({
        status:"success",
        data:{
            arr:arrCom
        }
    })
   }

    
})

app.listen(PORT,()=>{
console.log(`App is running on PORT: ${PORT}`);
});