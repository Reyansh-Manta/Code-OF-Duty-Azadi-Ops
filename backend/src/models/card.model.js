import mongoose from "mongoose"
import { Schema } from "mongoose"

const CardSchema = new Schema({
        SrNo:{
            type: Number,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        CoverImage:{
            type: String,
            required: true
        },
        ContentImage:{
            type: String,
            required: true
        },
        content:{
            type:String,
            required: true
        }
    },{timestamps: true})

export const Card = mongoose.model("card" , CardSchema)    