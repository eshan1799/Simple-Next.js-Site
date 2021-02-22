import Head from 'next/head'
import NavBar from './components/navbar'
import styles from '../styles/Saving.module.css'
import React, { useState } from 'react'

export default function SavingsCalculator() {
    const [state, setState] = useState({
        monthlyPrice: 0,
        employeeCount: 0
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    return (
        <>
            <Head>
                <title>Savings Calculator</title>
            </Head>
            <main className="main">
                <NavBar />
                <div className={styles.row}>
                    <div className={styles.grid}>
                        <h1 className="text-2xl lg:text-5xl pb-20 font-bold">
                    Savings Calculator
                </h1>
                        <form className={styles.grid}>
                            <label htmlFor="monthlyPrice">How much do you currently pay your accountant per month? (£)</label>
                            <input onChange={ handleChange } type="number" name="monthlyPrice" className={styles.formInput}>
                            </input>
                            <label htmlFor="employeeCount">How many employees do you have?</label>
                            <input onChange={ handleChange} type="number" name="employeeCount" className={styles.formInput}>
                            </input>
                            <input type="submit" className={styles.formSubmit} value="Find out how much I'll save">
                            </input>
                        </form>
                    </div>
                    <div className="p-20">
                        <p className="text-xl lg:text-2xl pb-9 text-center mx-20">You'll save</p>
                        <h1 className="text-3xl lg:text-7xl pb-9 font-bold text-center">£1,504.78</h1>
                        <p className="text-xl lg:text-2xl pb-9 text-center">per year</p>
                    </div>
                </div>
            </main>
        </>
    )
}