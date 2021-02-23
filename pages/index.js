import Head from 'next/head'
import Image from 'next/image'
import NavBar from './components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Invoicing</title>
      </Head>

      <main className={styles.main}>
        <NavBar />
        <div className={styles.row}>
          <div className={styles.grid}>
            <h1 className="text-4xl lg:text-6xl text-left pb-9 font-bold">
              Invoices that get you paid on time.
            </h1>
            <a href="#" className="self-start border-2 p-2 rounded-sm">
              <p>
                Send better invoices now
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
    </>
  )
}
