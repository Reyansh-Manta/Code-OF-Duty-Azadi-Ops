"use client"

import Navbar from "../components/Navbar/page"
import styles from "./culture.module.css"
import Navag from "../components/Navag/page"
import Footer from "../components/Footer/page"

export default function Culture() {
    return (
        <>
        <img src="/Untitled design.png" alt="" className={styles.culback}/>
            <Navag />
            <div className={styles.main}>
                
            
                <div className={styles.culture1}>
                    <p className={styles.p1}>Rohru, nestled along the banks of the Pabbar River, is a cultural jewel of Himachal Pradesh where the pace of life is harmoniously tied to the mountains and seasons. The people here follow traditions that blend Hindu beliefs with local deities, with Shikru Devta being one of the most revered. Fairs like the Shikru Devta Mela and Lavi Mela turn the town into a vibrant hub of folk music, traditional dances like Nati, and bustling markets filled with handicrafts and local produce. Architecture here reflects the skill of local craftsmen—houses and temples often feature kath-kuni (wood-and-stone) construction, ornate wooden carvings, and sloped slate roofs built to withstand snow. The cuisine carries flavors of the mountains, with dishes like siddu, chha gosht, and locally brewed drinks shared during gatherings. Storytelling, oral traditions, and community gatherings around bonfires during winters keep the cultural fabric alive, passing history and values from one generation to the next.</p>
                    <img src="/temple1.jpeg" alt="" style={{ width: "30vw", position: "relative", right: "10px" }} />
                </div>
                <div className={styles.culture1}>
                    <img src="/apple.jpg" alt="" style={{ width: "30vw", position: "relative", right: "10px" }} />
                    <p className={styles.p2}>Apples are the lifeblood of Rohru’s economy, identity, and pride. The region’s unique microclimate—cool summers, snowy winters, and fertile alluvial soil—creates apples of exceptional taste, color, and shelf life, making them highly sought after in markets nationwide. For locals, apple cultivation is not just farming; it’s a heritage passed down like an heirloom. Families teach children how to graft saplings, manage orchards, and recognize the perfect harvest time. Apple season, typically from August to October, transforms Rohru into a bustling trade zone: trucks line the roads, apple boxes stack high in courtyards, and commission agents, traders, and laborers converge from different states. This period also brings a festive spirit—neighbors help each other during peak harvest, tea stalls buzz with conversations about market rates, and the air smells faintly of ripe fruit. Over the decades, apple cultivation has modernized with cold storage units, improved varieties, and scientific orchard management, yet the heart of the trade still beats with tradition and community trust.</p>
                </div>

                <div className={styles.culture1}>
                    <p className={styles.p1}>Rohru is a serene yet adventurous gateway to the lesser-explored side of Himachal Pradesh, offering a perfect blend of natural beauty, cultural charm, and outdoor activities. The town is surrounded by lush apple orchards, dense deodar forests, and snow-capped peaks, making it a year-round destination for nature lovers. The crystal-clear Pabbar River is famous for trout fishing, attracting anglers from across the country, while trekking routes like the Chandernahan Lake trek lead to pristine high-altitude glacial lakes and meadows bursting with wildflowers. In winter, nearby slopes turn into snow-laden playgrounds for skiing and snow hiking. Traditional fairs, local temples, and bustling village markets allow visitors to experience the authentic Himachali way of life. Unlike crowded hill stations, Rohru offers a quieter, more personal travel experience—ideal for those who wish to slow down, breathe in the mountain air, and truly connect with the land and its people.</p>
                    <img src="/1.webp" alt="" style={{ width: "30vw", position: "relative", right: "15px" }} />
                </div>
                </div>
                
            </>
            )
}