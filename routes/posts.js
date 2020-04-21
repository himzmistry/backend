const express = require('express');
const router = express.Router();
const post = require("../models/Post")
//const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ name: nameOfListing });
//client.db("Movies").collection("displayMovie").find({});
router.get('/posts',async(req,res)=>{
    try{
        const posts = await post.find();
        return res.json(posts);
    }catch (err){
        return res.json({message:err});
    }
});


module.exports=router;