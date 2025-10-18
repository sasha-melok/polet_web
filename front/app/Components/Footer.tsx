'use client'

import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            email: formData.get('email')?.toString() || '',
            message: formData.get('message')?.toString() || '',
        };

        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            alert('Сообщение отправлено!');
        } else {
            alert('Ошибка отправки');
        }
    }

    return(
        <footer>
            <div className="info">
                <div className="contacts">
                    <h3>ПО “ПОЛЕТ” 2025</h3>
                    <p className="subtext">644021, г. Омск, ул. Б.Хмельницкого, 226</p>
                    <p className="subtext">info.polet@khrunichev.ru</p>
                    <p className="subtext">Справочная АТС: (3812) 39-72-01</p>
                    <p className="subtext">Абонентский отдел: (3812) 39-71-44</p>
                    <div className="links">
                        <Link href="/">
                            <Image src={'/tg.png'} alt="Ссылка на телеграмм канал" width={40} height={40} />
                        </Link>
                        <Link href="/">
                            <Image src={'/vk.png'} alt="Ссылка на телеграмм канал" width={40} height={40} />
                        </Link>
                        <Link href="/">
                            <Image src={'/whatsapp.png'} alt="Ссылка на телеграмм канал" width={40} height={40} />
                        </Link>
                    </div>
                </div>
                <ul className="nav">
                    <li>
                        <Link href={'/'}>ГЛАВНАЯ</Link>
                    </li>
                    <li>
                        <Link href={'/news'}>НОВОСТИ</Link>
                    </li>
                    <li>
                        <Link href={'/products'}>ПРОДУКЦИЯ</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>О ПРЕДПРИЯТИИ</Link>
                    </li>
                    <li>
                        <Link href={'/contacts'}>КОНТАКТЫ</Link>
                    </li>
                    <li>
                        <Link href={'career'}>КАРЬЕРА</Link>
                    </li>
                </ul>
                <div className="form">
                    <h3>Есть вопросы <br /> Напишите нам</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <textarea name="message" id="message" placeholder="Вопрос"></textarea>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
            <div className="credits">
                <p>ПО “ПОЛЕТ” 2025</p>
                <p className="subtext">все права защищены</p>
            </div>
        </footer>
    )
}