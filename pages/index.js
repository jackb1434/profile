import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  function Github(){
    window.open("https://github.com/jackb1434");
  }

  function YouTube(){
    window.open("https://www.youtube.com/channel/UC6sF6mfM8-pVqkqwxJdcatg");
  }

  function Discord(){
    window.open("https://github.com/jackb1434");
  }

  return (
    <div className={styles.content}>
      <Head>
        <title>gramgram ♡</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Radio+Canada:wght@300;400;500;600;700&family=VT323&display=swap" rel="stylesheet"/>
      </Head>

      <div className={styles.main}>
        <img className={styles.image} src="/pfp.png" alt="pfp"></img>
        <h1>gramgram</h1>
        <p>Hello! My name is Jack and Im a developer and a music producer. I make games, desktop applications, console applications, and websites. Im currently learning OpenGL with c++ and will be working on an engine soon after that!</p>
        <div className={styles.socials}>
          <input className={styles.s_btns} type="image" onClick={Github} src="/github.png" alt="github logo"/>
          <input className={styles.s_btns} type="image" onClick={YouTube} src="/youtube.png" alt="youtube logo"/>
          <input className={styles.s_btns} type="image" onClick={Discord} src="/discord.png" alt="discord logo"/>
        </div>
      </div>

      <footer>
        <code>developed by jackb1434</code>
      </footer>
    </div>
  )
}
