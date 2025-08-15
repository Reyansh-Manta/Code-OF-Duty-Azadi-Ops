"use client"

import Navag from "../components/Navag/page";
import styles from "./event.module.css";
import Navbar from "../components/Navbar/page";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function EventPage() {
    const searchParams = useSearchParams();
    const [fetchposts, setfetchposts] = useState([false])
    const [posts, setPosts] = useState([])
    const router = useRouter()
    const postId = searchParams.get("id");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:2002/api/v1/posts/getpostbyid?id=${postId}`,
                    { withCredentials: true }
                )
                setPosts(response.data.data)
            } catch (error) {
                throw new Error("Failed to fetch post")
            } finally {
                setfetchposts(true)
            }
        }
        fetchData()
    }, [postId])

    if (fetchposts) {

        return (
            <>
                <Navag />

                <img src="/Untitled design.png" alt="" className={styles.bgimage} />
                
                <div className={styles.containerFtitle} >
                    <p className={styles.title}>{posts.title}</p>
                </div>

                <div className={styles.maincont}>
                    <div className={styles.p1}>
                        <p>
                            {posts.content}
                        </p>
                    </div>
                    <div className={`${styles.p1} ${styles.incont}`}>
                        <img src={posts.ContentImage} alt="" style={{ width: "370px", height: "420px" }} />
                    </div>
                </div>

            </>
        )
    }
    else {
        <h1>Loading...</h1>
    }
}
