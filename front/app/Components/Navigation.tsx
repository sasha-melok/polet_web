import Image from "next/image"
import Link from "next/link"
import './Navigation.css'

export default function Navigation(){

    return(
        <nav>
            <div className="logo">
                <Link href={'/'}>
                    <Image src={'/logo.png'} alt='Логотип ПО "Полет"' width={186} height={36} priority />
                </Link>
            </div>
            <ul>
                <li>
                    <Link href={"/news"}>новости</Link>
                </li>
                <li>
                    <Link href={"/products"}>продукция</Link>
                </li>
                <li>
                    <Link href={"/about"}>о предприятии</Link>
                </li>
                <li>
                    <Link href={"/contacts"}>контакты</Link>
                </li>
                <li>
                    <Link href={"/career"}>карьера</Link>
                </li>
            </ul>
        </nav>
    )
}