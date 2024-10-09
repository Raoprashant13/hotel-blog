import express from "express";
import router from 'router';

//create a blog post
router.post("/create-post",async(req,res)=>{
    try {
        //console.log("Blog data from api",req.body)
        const newPost = new Blog({...req.body});
        await newPost.save();
        res.status(201).send({
            message:"post created succesfully",
           post: newPost
        })
    } catch (error) {
        console.log("createing a post error",error)
        res.status(500).send({message:"creating a error"})
    }
})


router.get('/',(req,res)=>{
    res.send('Blog route is here:')
})

module.exports=router;