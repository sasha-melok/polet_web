'use client'

import Image from "next/image"
import Link from "next/link"
import './Navigation.css'
import { usePathname } from "next/navigation"

export default function Navigation(){
    const pathname = usePathname()
    return(
        <nav className="desktop">
            <div className="logo">
                <Link href={'/'}>
                    <Image src={'/logo.png'} alt='Логотип ПО "Полет"' width={206} height={40} priority />
                </Link>
            </div>
            <ul>
                <li>
                    <Link href={"/news"} className={pathname === '/news' ? 'active' : ''}>новости</Link>
                </li>
                <li>
                    <Link href={"/products"} className={pathname === '/products' ? 'active' : ''}>продукция</Link>
                </li>
                <li>
                    <Link href={"/about"} className={pathname === '/about' ? 'active' : ''}>о предприятии</Link>
                </li>
                <li>
                    <Link href={"/contacts"} className={pathname === '/contacts' ? 'active' : ''}>контакты</Link>
                </li>
                <li>
                    <Link href={"/career"} className={pathname === '/career' ? 'active' : ''}>карьера</Link>
                </li>
            </ul>
        </nav>
    )
}