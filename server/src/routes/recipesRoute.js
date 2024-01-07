const express=require('express')
const router=express.Router()
const recipeModel=require('../models/recipesModel')
const userModel=require('../models/userModel')

router.get('/',async(req,res)=>{
const recipes=await recipeModel.find();
res.json({success:true,recipes});
})

router.post('/',async(req,res)=>{
     const recipe=await new recipeModel(req.body)
    await recipe.save()
    res.json({
        success:true,
       recipe
    });
    })

router.put("/", async (req, res) => {
    const recipe = await recipeModel.findById(req.body.recipeID);
    const user = await userModel.findById(req.body.userID);
    try {
        user.savedRecipes.push(recipe);
        await user.save();
        res.status(201).json({ savedRecipes: user.savedRecipes });
    } catch (err) {
        res.status(500).json(err);
    }
    });

router.get("/savedRecipes/ids/:userId", async (req, res) => {
    try {
        const user = await userModel.findById(req.params.userId);
        res.status(201).json({ savedRecipes: user?.savedRecipes });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    });

router.get("/savedRecipes/:userId", async (req, res) => {
    try {
        const user = await userModel.findById(req.params.userId);
        const savedRecipes = await recipeModel.find({
        _id: { $in: user.savedRecipes },
        });
    
        console.log(savedRecipes);
        res.status(201).json({ savedRecipes });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    });

module.exports=router