"use client"

import Navag from "../components/Navag/page";
import styles from "./events.module.css";
import Navbar from "../components/Navbar/page";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function EventsPage() {
    const [fetchposts, setfetchposts] = useState([false])
    const [posts, setPosts] = useState([])
    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:2002/api/v1/posts/getposts`,
                    { withCredentials: true }
                )
                setPosts(response.data.data)
            } catch (error) {
                throw new Error("Failed to fetch posts")
            } finally {
                setfetchposts(true)
            }
        }
        fetchData()
    }, [])

    if (fetchposts) {

        return (
            <>
                <Navbar />
                <div className={styles.main}>
                    <img src="/Untitled design.png" alt="" className={styles.bgimage} />
                    <div className={styles.cp}>
                        <p className={styles.p1}>Local</p>
                        <p className={styles.p2}>Events!</p>
                    </div>
                    <div>
                        <div>
                            <button className={`${styles.new} ${styles.glowButton}`} id="create-post" onClick={() => router.push("/create-post")}>Create Post</button>
                        </div>
                    </div>

                    {posts.map((post) => (
                        
                        <div className={styles.container} key={post.id}>
                            <a className={styles.link} href={`/event?id=${post.SrNo}`} >
                            <div className={styles.incont}>
                                <img src={post.CoverImage} alt="" style={{width: "270px" , height: "320px"}} />
                            </div>
                            <p className={styles.title}>{post.title}</p>
                            </a>
                        </div>
                        
                    ))}

                </div>
            </>
        )
    }
    else {
        <h1>Loading...</h1>
    }
}