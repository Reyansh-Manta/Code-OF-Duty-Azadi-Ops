import mongoose from "mongoose"
import { Schema } from "mongoose"

const SlideSchema = new Schema({
        SrNo:{
            type: String,
            required: true
        },
        image:{
            type: String,
            required: true
        }
    },{timestamps: true})

export const Slide = mongoose.model("Slide" , SlideSchema)    