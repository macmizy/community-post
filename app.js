const express = require("express")
require('./db.js').connectToMongoDB()
const Message = require('./models/message.model');
const Comment = require('./models/comment.model');
require("dotenv").config()


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res)=>{
    try{
        res.status(200).send({message:" welcome"})
    }catch(error){
        console.log(error)
        res.status(400).send({message:"error loading page"})
    }
  });


  app.post("/message", async (req, res) => {
    
    try {
        const message = await Message.create({
            text: req.body.text,
            likes: 0,
            comments: []
        });
        res.status(200).json({
            message: "Message created successfully",
            status: "true",
            message: message,
        });
    } catch (error) {
        return res.status(400).json({
            status: "false",
            message: "Message creation failed",
        });
    }
});

app.post("/comment/:messageId", async (req, res) => { 
    console.log( req.params.messageId)
    try {  
        const comment = await Comment.create({
            text: req.body.text,
            messageId: req.params.messageId,
        });
        if(!comment) return console.log("comment error")
        const message = await Message.findByIdAndUpdate(req.params.messageId, {
            $push: { comments: comment._id },
        });
        res.status(200).json({
            message: "Comment created successfully",
            status: "true",
            comment: comment,
            message: message,
        });
    } catch (error) {
        return res.status(400).json({
            status: "false",
            message: "Comment creation failed",
        });
    }
});



app.get("/message", async (req, res) => {
    try {
        const messages = await Message.find({});
        res.status(200).json({
            message: "Messages fetched successfully",
            status: "true",
            messages: messages,
        });
    } catch (error) {
        return res.status(400).json({
            status: "false",
            message: "Messages fetch failed",
        });
    }
});


app.get("/message/:messageId", async (req, res) => {
    try {
        const message = await Message.findById(req.params.messageId).populate("comments");
        res.status(200).json({
            message: "Message fetched successfully",
            status: "true",
            message: message,
        });
    } catch (error) {
        return res.status(400).json({
            status: "false",
            message: "Message fetch failed",
        });
    }
});

app.put('/messages/:messageId/like', async (req, res) => {
    try {
      const { messageId } = req.params;
      const updatedMessage = await Message.findByIdAndUpdate(
        messageId,
        { $inc: { likes: 1 } },
        { new: true }
      );
      res.json(updatedMessage);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });


  PORT = process.env.PORT
    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`)
    }
    )

