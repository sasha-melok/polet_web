'use client'

import Link from "next/link"
import Image from "next/image"
import styles from './page.module.css'
import { useEffect } from "react"

export default function About(){
    useEffect(()=>{
        document.body.classList.add('about-act')
        return () => {
            document.body.classList.remove('about-act')
        }
    }, [])

    return (
        <div className={styles.p_abo}>
            <div className={styles.block}>
                <p className={styles.date}>24 июля 1941</p>
                <p>Эта дата стала точкой отсчёта для легендарного омского предприятия, которое прошло путь от военного авиазавода до одного из флагманов ракетно-космической отрасли России. Война, холодное противостояние сверхдержав, гонка за космос - ПО «Полёт» было в гуще всех этих событий, а его история - это история трудового подвига, инженерного гения и безграничной преданности делу.</p>
            </div>
            <div className={styles.block}>
                <Image src="/about1.png" alt="Орден Трудового Красного Знамени" width={200} height={200}></Image>
                <p>Предприятие получило орден Трудового Красного Знамени - награду, выкованную в цехах под лозунгом: «Каждый самолет удар по врагу!».</p>
                <p className={styles.date}>2 июля 1945</p>                
            </div>
            <div className={styles.block}>
                <p className={styles.date}>17 июня 1961</p>
                <p>Предприятие получило орден Ленина - высшую государственную награду СССР</p>
                <Image src="/about2.png" alt="Орден Ленина" width={200} height={200}></Image>
            </div>
            <div className={styles.block}>
                <Image src="/about3.png" alt='Логотип ПО "Полет"' width={200} height={200}></Image>                
                <p>Завод стал производственным объединением, в состав которого вошли также заводы по производству ракетно-космической техники и товаров народного потребления.</p>
                <p className={styles.date}>1970</p>
            </div>
            <div className={styles.block}>
                <p className={styles.date}>16 декабря 1971</p>
                <p>Предприятие получило орден Октябрьской Революции - второй по старшинству орден СССР.</p>
                <Image src="/about4.png" alt="Орден Октябрьской Революции" width={200} height={200}></Image>
            </div>
            <div className={styles.block}>
                <Image src="/about5.png" alt="Логотип ФГУП «ГКНПЦ им. М. В. Хруничева»" width={200} height={200}></Image>
                <p>Производство вошло в состав ФГУП «ГКНПЦ им. М. В. Хруничева», получив новый импульс для развития</p>
                <p className={styles.date}>3 февраля 2007</p>
            </div>
        </div>
    )
}