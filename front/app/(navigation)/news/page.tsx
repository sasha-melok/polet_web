'use client'

import { getNews } from '@/app/lib/getNews'
import { useEffect, useState } from 'react'
import NewsList from '@/app/Components/NewsList'
import s from './page.module.css'

export default function News(){
    const [ newsData, setNewsData ] = useState<any[]>([])
    const [ newsFilter, setNewsFilter ] = useState(newsData)
    const [ newsYear, setNewsYear ] = useState('2025')

    useEffect(() => {
        const loadNews = async () => {
            try{
                const data = await getNews()

                const filtNews = data.sort((a:any,b:any) => {
                    if (new Date(a.date) < new Date(b.date)){
                        return 1
                    }
                    else if (new Date(b.date) < new Date(a.date)){
                        return -1
                    } else{
                        return 0
                    }
                })
                
                setNewsData(filtNews)
            } catch (err){
                console.log(err)
                throw new Error('Ошибка при получении данных')
            }
        }

        loadNews()
    }, [])

    useEffect(()=>{
        document.body.classList.add('new-act')
        return () => {
            document.body.classList.remove('new-act')
        }
    }, [])

    useEffect(() => {
        const n_data = newsData.filter((el:any) => new Date(el.date).getFullYear() == Number(newsYear))

        setNewsFilter(n_data)
    }, [newsYear, newsData])

    const giveClass = () => {
        const el = document.querySelector(`.${s.choose}`)
        if (el != null){
            el.classList.toggle(s.open)
        }
        document.body.querySelector(`.${s.back_n}`)?.classList.toggle(s.open)
    }

    return (
        <>
        <div className={s.back_n} onClick={giveClass}></div>
        <div className={s.p_news}>
            <h1>Новости</h1>
            <div className={s.year_ch}>
                <div className={s.wrapper}>
                    <div className={s.visual_block}>
                        <button className={s.curr_y} onClick={giveClass}>{newsYear}</button>
                    </div>
                </div>
                <div className={`${s.wrapper} ${s.choose}`}>
                    <div className={s.choose_block}>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2025</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2024</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2023</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2022</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2021</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2020</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2019</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2018</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2017</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2016</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2015</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2014</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2013</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2012</button>
                        <button onClick={(e:any) => {setNewsYear(e.target.innerText); giveClass()}} className="year">2011</button>
                    </div>
                </div>
            </div>
            
            {newsFilter.length == 0 ? (
                <div className={s.news_empty}>
                    <p>Новости за данный период не найдены</p>
                </div>
            ) : (
                <div className={s.news_block}>
                {newsFilter.map((el:any ) => (
                    <NewsList key={el.slug} {...el} />
                ))}
            </div>
            )}
            
        </div>
        </>
    )
}