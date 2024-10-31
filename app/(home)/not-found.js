import './404.scss'
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="notFoundSec">
            <div className="flex-container">
                <div className="text-center">
                    <h1>
                        <span className="fade-in" id="digit1">4</span>
                        <span className="fade-in" id="digit2">0</span>
                        <span className="fade-in" id="digit3">4</span>
                    </h1>
                    <h3 className="fadeIn">PAGE NOT FOUND</h3>
                    <Link href="/">Return To Home</Link>
                </div>
            </div>
        </section>
    )
}