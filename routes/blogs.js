var express = require("express");
const { uuid } = require("uuidv4");
const { db } = require("../mongo");
var router = express.Router();

// GET ALL listings  
router.get("/all", async (req,res,next) => {
    try {
        const blogs = await db().collection("sample_blogs")
        .find({})
        .toArray();

        res.json({
            success: true,
            blogs: blogs,
        })
    } catch (error) {
        
    }

})

module.exports = router;