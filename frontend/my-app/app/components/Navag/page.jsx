"use client"

import styles from "./footer.module.css"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navag({children}) {

        return (
            <div style={{opacity: "1"}}>
            {children}
            <nav className={styles.nav}>
                <img src="/w t.png" alt="" style={{height: "100px" , position: "relative", marginRight: "53vw"}}/>
                <ul className={styles.list}>
                    <Link className={`${styles.culture} ${styles.link}`} href={"/culture"}>
                        Culture
                    </Link>
                    <Link className={`${styles.fairs} ${styles.link}`} href={"/fairs"}>
                        Fairs
                    </Link>
                    <Link className={`${styles.about} ${styles.link}`} href={"/aboutus"}>
                        About Us
                    </Link>
                </ul>
               
            </nav>
            </div>
        )
    }