"use client"

import Navbar from "../components/Navbar/page"
import styles from "./fairs.module.css"
import { useState } from "react"

export default function CreatePost() {

    const [Posted, setPosted] = useState(false)
    const [mess, setmess] = useState(false)
    const [content, setcontent] = useState("")
    const [ContentImage, setContentImage] = useState(null)
    const [CoverImage, setCoverImage] = useState(null)

    const dbcall = async () => {

        const submitdata = async () => {
            try {
                const formData = new FormData();
                formData.append("content", content)
                formData.append("CoverImage", CoverImage)
                formData.append("ContentImage", ContentImage)
                const response = await axios.post(`http://localhost:2002/api/v1/posts/post`,
                    formData
                    ,
                    { 
                        withCredentials: true,
                        headers: { "Content-Type": "multipart/form-data" }
                     }
                )

                setPosted(true)

                return true

            } catch (error) {
                console.error("Error in submitting data")
                return false
            }
        }
        const dt = await submitdata()
        return dt
    }

    const submiitt = async (event) => {
        event.preventDefault();

            const success = await dbcall()

            if (success) {
                setmess(true)
            }
            else{
                setmess(false)
            }
        }
    

    return (
        <>
            <Navbar />
            <form onSubmit={submiitt}>
                <div>
                    <label className={`${styles.labelContent} ${styles.label}`} htmlFor="content">Content</label>
                    <textarea className={`${styles.inputContent} ${styles.input}`} id="content" placeholder="Enter the content" required
                        value={content}
                        onChange={(e) => setcontent(e.target.value)}></textarea>
                </div>
                <div>
                    <label className={`${styles.labelCover} ${styles.label}`} htmlFor="cover">CoverImage</label>
                    <input type="file" className={`${styles.inputContent} ${styles.input}`} id="cover" required
                        onChange={(e) => setCoverImage(e.target.files[0])} />
                </div>
                <div>
                    <label className={`${styles.labelContent} ${styles.label}`} htmlFor="cover">ContentImage</label>
                    <input type="file" className={`${styles.inputContent} ${styles.input}`} id="contentimg" required
                        onChange={(e) => setContentImage(e.target.files[0])} />
                </div>
                <p>{mess}</p>
            </form>
        </>
    )

}