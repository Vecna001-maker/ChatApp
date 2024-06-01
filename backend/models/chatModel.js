import mongoose from "mongoose";
const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }],
        latestMessage: {
            //basically we are giving the refrence of the message stored in our database 
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

    },
    {
        timestamps: true,
    }
    
);
const Chat = mongoose.model("Chat", chatModel);
export default Chat;