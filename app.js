const express = require("express");
const app = express();
const PORT = 8080;


const arr = [
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

app.get("/data",(req,res)=>{
   

    res.status(200).json({
        status:"success",
        data:{
            arr:arr
        }
    })
})

app.listen(PORT,()=>{
console.log(`App is running on PORT: ${PORT}`);
});