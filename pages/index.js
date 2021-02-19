import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invoicing</title>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/512046d075.js" crossorigin="anonymous"></script>
      </Head>

      <main className={styles.main}>
        <div className={styles.row}>
          <div className={styles.grid}>
            <h1 className="text-4xl lg:text-6xl text-left pb-9 font-bold">
              Invoices that get you paid on time.
            </h1>
            <a href="#" className="self-start bg-white">
              <p className="font-normal text-lg mb-9">Send better invoices now
                <i className="fas fa-arrow-right"></i>
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
