'use client'

import { useEffect, useState, useRef } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import AccordionItem from './AccordionItem'
import Vacancies from '../../Components/Vacancies'
import { Suspense } from 'react'
import Loading from '@/app/loading'
import getVacancies from '@/app/lib/getVacancies'

export default function Career(){
    useEffect(()=>{
        document.body.classList.add('car-act')
        return () => {
            document.body.classList.remove('car-act')
        }
    }, [])

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const isAnimating = useRef(false); // ← флаг анимации

    const handleToggle = (index: number) => {
        if (isAnimating.current) return; // ← не реагировать во время анимации

        if (openIndex === index) {
        // Просто закрываем
            isAnimating.current = true;
            setOpenIndex(null);
            setTimeout(() => {
                isAnimating.current = false;
            }, 350); // время анимации
            } else {
            // Закрываем старый (если есть)
            if (openIndex !== null) {
                isAnimating.current = true;
                setOpenIndex(null);
                // Ждём, пока закроется, потом открываем новый
                setTimeout(() => {
                setOpenIndex(index);
                // Скроллим к новому
                setTimeout(() => {
                    if (itemRefs.current[index]) {
                    itemRefs.current[index]!.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    }
                    isAnimating.current = false;
                }, 20); // дать время DOM обновиться
                }, 350); // время анимации закрытия
            } else {
                // Ничего не открыто — просто открываем
                setOpenIndex(index);
                setTimeout(() => {
                if (itemRefs.current[index]) {
                    itemRefs.current[index]!.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                    });
                }
                }, 50);
            }
        }
    };

    const [VacData,setVacData] = useState([])

    useEffect(() => {
        const loadVac = async () => {
            try{
                const res = await getVacancies();
                console.log(res)
                setVacData(res)
            }catch (err){
                console.error(err)
            }
        }
        loadVac()
    }, [])

  // Данные для аккордеона
    const items = [
        {
        title: "Профсоюзная организация",
        content: (
            <div className={styles.txt}>
                <p className={styles.info}>Производственное объединение «Полёт», расположенное в Омске, является одним из крупнейших предприятий оборонной промышленности России. Работа здесь требует высокой квалификации сотрудников, постоянного профессионального роста и соблюдения строгих условий труда и именно поэтому профсоюзы играют важную роль в жизни объединения.</p>
                <ul>
                    <li>
                        <p>Защита трудовых прав</p>
                        <p className={styles.info}>Профсоюз следит за соблюдением трудового законодательства, защищает интересы членов организации от задержек зарплаты, нарушений техники безопасности и т.д.</p>
                    </li>
                    <li>
                        <p>Улучшение условий труда</p>
                        <p className={styles.info}>Профсоюз помогает улучшить условия труда путём переговоров с руководством, проведения проверок состояния рабочих мест и внедрения мер профилактики травматизма.</p>
                    </li>
                    <li>
                        <p>Обеспечение социальной защиты</p>
                        <p className={styles.info}>Выплата пособий по временной нетрудоспособности, оплата больничных листов, компенсация расходов на санаторное лечение и отдых детей сотрудников.</p>
                    </li>
                    <li>
                        <p>Профессиональный рост и обучение персонала</p>
                        <p className={styles.info}>Профсоюз поддерживает программы повышения квалификации, организует курсы переподготовки кадров, способствует развитию профессиональных компетенцией сотрудников.</p>
                    </li>
                </ul>
            </div>
        )
        },
        {
        title: "Молодежный совет",
        content: (
            <div className={styles.txt}>
                <p className={styles.info}>Молодежный совет производственного объединения «Полет» является уникальной структурой, направленной на поддержку молодого поколения работников предприятия. Созданный в 2006 году, Совет ставит перед собой важные цели: привлечение талантливой молодежи, содействие профессиональному росту и созданию комфортной среды для молодых сотрудников.</p>
                <ul>
                    <li>
                        <p>Профессиональное развитие</p>
                        <p className={styles.info}>Организация конкурсов профессионального мастерства, повышение квалификации молодых сотрудников.</p>
                    </li>
                    <li>
                        <p>Спортивная активность</p>
                        <p className={styles.info}>Проведение регулярных спортивных мероприятий, направленных на укрепление здоровья и сплочение коллектива. </p>
                    </li>
                    <li>
                        <p>Социальная адаптация</p>
                        <p className={styles.info}>Мероприятия по ознакомлению молодых сотрудников с правилами и традициями предприятия, помощь в адаптации к рабочей среде.</p>
                    </li>
                    <li>
                        <p>Участие в городской жизни</p>
                        <p className={styles.info}>Сотрудничество с администрацией города Омска, участие в общественных и культурных событиях городского масштаба.</p>
                    </li>
                    <li>
                        <p>Научная деятельность</p>
                        <p className={styles.info}>Поддержка участия молодых сотрудников в научно-технических конференциях и конкурсах, создание условий для реализации инновационных идей.</p>
                    </li>
                </ul>
            </div>
        )
        },
        {
        title: "Вакансии",
        content: (
            <div className={styles.vacancies}>
                <Suspense fallback={<Loading />}>
                    {VacData.map((el:any) => (
                        <Vacancies key={el.id} {...el} />
                    ))}
                </Suspense>
            </div>
        )
        }
    ];


    return (
        <div className={styles.p_car}>
            <div className={styles.block}>
                <h2>Почему стоит выбрать ПО «Полет»</h2>
                <div className={styles.reasons}>
                    <div className={styles.top}>
                        <Image src={'/res1.png'} alt="" width={120} height={120}></Image>
                        <h5>Современное оборудование и технологии</h5>
                    </div>
                    <div className={styles.top}>
                        <Image src={'/res2.png'} alt="" width={120} height={120}></Image>
                        <h5>Возможности для роста и развития</h5>
                    </div>
                    <div className={styles.top}>
                        <Image src={'/res3.png'} alt="" width={120} height={120}></Image>
                        <h5>Комфортные условия труда</h5>
                    </div>
                    <div className={styles.top}>
                        <Image src={'/res4.png'} alt="" width={120} height={120}></Image>
                        <h5>Поддержка и наставничество</h5>
                    </div>
                </div>
            </div>
            <div className={styles.block}>

                {items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                        // Передаём ref напрямую в div
                        itemRef={(el) => {
                        itemRefs.current[index] = el;
                        }}
                    >
                        {item.content}
                    </AccordionItem>
                ))}
            </div>
        </div>
    )
}