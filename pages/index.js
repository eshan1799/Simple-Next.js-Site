import Head from 'next/head'
import Image from 'next/image'
import NavBar from './components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invoicing</title>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap" rel="stylesheet" />
        <script href="https://kit.fontawesome.com/512046d075.js" crossorigin="anonymous"></script>
      </Head>

      <main className={styles.main}>
        <NavBar />
        <div className={styles.row}>
          <div className={styles.grid}>
            <h1 className="text-4xl lg:text-6xl text-left pb-9 font-bold">
              Invoices that get you paid on time.
            </h1>
            <a href="#" className={styles.bgwhite} className="self-start border-2 p-2 rounded-sm">
              <p>Send better invoices now
                {/* <span clasName={styles.arrow}>
                  <i className="fas fa-arrow-right"></i>
                  <i class="bi bi-arrow-right"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </span> */}
              </p>
            </a>
          </div>
          <Image
          src="/images/Invoicing.png"
          width={1200}
          height={1000}
          alt="invoice"
          />
        </div>
      </main>
    </div>
  )
}
