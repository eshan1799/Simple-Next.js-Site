import Head from 'next/head'
import NavBar from './components/navbar'
import styles from '../styles/Saving.module.css'

export default function SavingsCalculator() {
    return (
        <>
            <Head>
                <title>Savings Calculator</title>
            </Head>
            <main>
                <NavBar />
                <div className={styles.row}>
                <div className={styles.grid}>
                    <h1 className="text-3xl lg:text-6xl pb-9 font-bold">
                        Savings Calculator
                    </h1>
                    <form className={styles.grid}>
                        <label for="">How much do you currently pay your accountant per month?</label>
                        <input type="text">
                        </input>
                        <label for="">How many employees do you have?</label>
                        <input type="text">
                        </input>
                        <input type="submit" value="Find out how much I'll save">
                        </input>
                    </form>
                </div>
                <div>
                    <div className={styles.row}>
                        <p className="text-xl lg:text-2xl pb-9">You'll save</p>
                        <h1 className="text-2xl lg:text-4xl pb-9 font-bold">£1,504.78</h1>
                        <p className="text-xl lg:text-2xl pb-9">per year</p>
                    </div>
                </div>
                </div>
            </main>
        </>
    )
}