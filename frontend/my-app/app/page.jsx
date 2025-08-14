"use client"
import Navbar from "./components/Navbar/page"
import styles from "./page.module.css"
import { useState , useEffect } from "react"

export default function HomePage() {
  const [timeout, setTime] = useState(false)
  const [timeout2, setTime2] = useState(false)

useEffect(() => {
  const timer = setTimeout(()=>{
    setTime(true)
  },5444)

  return () => {
    clearTimeout(timer)
  }
}, [])

useEffect(() => {
  const timer = setTimeout(()=>{
    setTime2(true)
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