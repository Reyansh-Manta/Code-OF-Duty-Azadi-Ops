import { Card } from '../models/card.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiErrors.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { uploadOnCloudinary, deleteFromCloudinary } from '../utils/cloudinary.js';


const createPost = asyncHandler(async (req, res) => {
    const { content } = req.body;
    

    if (!content) {
        throw new ApiError(400, 'Content is required');
    }

    const Sr = await Card.countDocuments()

    const postData = {
        SrNo: Sr+1,
        content
    };

    const contentimglocalpath = req.files?.ContentImage[0]?.path
    const coverimglocalpath = req.files?.coverImage[0]?.path
    
    if (!contentimglocalpath) {
        throw new ApiError(402 , "Please provide content image")
    }
    if (!coverimglocalpath) {
        throw new ApiError(402 , "Please provide cover image")
    }

    const CoverImageUrl = await uploadOnCloudinary(coverimglocalpath)
    const ContentImageUrl = await uploadOnCloudinary(contentimglocalpath)
    
    postData.CoverImage = CoverImageUrl.url;
    postData.ContentImage = ContentImageUrl.url;

    const post = await Card.create(postData);

    return res.status(201).json(new ApiResponse(201, post, 'Post created successfully'));
})

const getPosts = asyncHandler(async (req, res) => {
    const posts = await Card.find();
    return res.status(200).json(new ApiResponse(200, posts, 'Posts fetched successfully'));
});

export {
    createPost,
    getPosts
}