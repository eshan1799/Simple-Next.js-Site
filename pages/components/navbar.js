import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="py-6 flex-start text-left font-bold text-white border-b-2 border-gray-100">
            <Link href="/">
                <a className="px-20">
                    Invoicing
                </a>
            </Link>
            <Link href="/savingscalculator">
                <a>
                    Savings Calculator
                </a>
            </Link>
        </nav>
    )
}