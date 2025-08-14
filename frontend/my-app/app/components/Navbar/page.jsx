"use client"

import styles from "./Navbar.module.css"
import Link from "next/link"
import { useEffect, useState } from "react"
// import { useUser } from "@/app/context/UserContext"

export default function Navbar({children}) {

        return (
            <div style={{opacity: "0.9"}}>
            <nav className={styles.nav}>
                <a href="/">
                    <img src="/My.png" alt="logo" style={{height: "81px" , top:"10px", position: "relative"}}/>
                </a>
                <ul className={styles.list}>
                    <Link className={`${styles.dashboard} ${styles.link}`} href={"/culture"}>
                        Culture
                    </Link>
                    <Link className={`${styles.about} ${styles.link}`} href={"/aboutus"}>
                        About Us
                    </Link>
                </ul>
                <div>
                    {/* <img src="/Welcome to(1).png" alt="" className={styles.welcome}/> */}
                </div>
            </nav>
            {children}
            </div>
        )
    }
   