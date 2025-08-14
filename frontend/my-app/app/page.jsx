"use client"
import Navbar from "./components/Navbar/page"
import styles from "./page.module.css"
import { useState , useEffect } from "react"

export default function HomePage() {
  const [timeout, setTime] = useState(false)

useEffect(() => {
  const timer = setTimeout(()=>{
    setTime(true)
  },7444)

  return () => {
    clearTimeout(timer)
  }
}, [])

  return(
    <>
    <Navbar/>
    <video src="/bg1.mp4" className={styles.bgimage} autoPlay loop muted></video>
    <div>
      {
<div className={styles.writbefore}>
<p className={styles.wtr}>Welcome To Rohru</p>
{
timeout && <p className={styles.logag}>The land of gods and goddesses</p>
}
</div>
}
    </div>
    </>
  )
}