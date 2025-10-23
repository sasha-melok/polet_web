'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import './MobileNavigation.css'

export default function MobileNavigation(){
    const pathname = usePathname()

    const closeMenu = () => {
        document.body.querySelector('.wrapper')?.classList.remove('visible')
        document.body.querySelector('.nav_button')?.classList.remove('visible')
        document.body.querySelector('.back')?.classList.remove('visible')
    }

    const handleNavToggle = () => {
        document.body.querySelector('.wrapper')?.classList.toggle('visible')
        document.body.querySelector('.nav_button')?.classList.toggle('visible')
        document.body.querySelector('.back')?.classList.toggle('visible')
    }

    const handleLinkClick = () => {
        closeMenu()
    }

    return (
        <>
            <div className="back" onClick={handleNavToggle}></div>
            <nav className="mobile">
                <div className="logo">
                    <Link href={'/'} onClick={handleLinkClick}>
                        <Image src={'/logo.png'} alt='Логотип ПО "Полет"' width={206} height={40} priority />
                    </Link>
                </div>
                <div className="nav_button">
                    <button onClick={handleNavToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                
                <div className="wrapper">
                    <ul>
                        <li>
                            <Link href="/news" className={pathname === '/news' ? 'active' : ''} onClick={handleLinkClick}>
                                новости
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className={pathname === '/products' ? 'active' : ''} onClick={handleLinkClick}>
                                продукция
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={handleLinkClick}>
                                о предприятии
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts" className={pathname === '/contacts' ? 'active' : ''} onClick={handleLinkClick}>
                                контакты
                            </Link>
                        </li>
                        <li>
                            <Link href="/career" className={pathname === '/career' ? 'active' : ''} onClick={handleLinkClick}>
                                карьера
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}