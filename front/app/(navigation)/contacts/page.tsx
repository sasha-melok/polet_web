'use client'

import s from './page.module.css'
import { getContacts } from '@/app/lib/getContacts'
import { useEffect, useState } from 'react'

export default function Contacts(){
    // throw new Error('twert')

    const [ contData, setContData ] = useState<any[]>([])
    useEffect(()=>{
        document.body.classList.add('con-act')
        return () => {
            document.body.classList.remove('con-act')
        }
    }, [])

    useEffect(() => {
        const getData = async () => {
            try{
                const data = await getContacts()

                setContData(data.info)
            } catch (err){
                console.error(err)
            }
        }

        getData()
        
    }, [])

    return (
        <div className={s.p_con         }>
        {contData.map((el:any, index:number) => {
            if (el.type == 'heading'){
                return (
                    <h3 key={index}>
                        {el.children.map((ch:any,index:number) => (
                            <span key={index}>{ch.text}</span>
                        ))}
                    </h3>
                )
            }else{
                return (
                    <p key={index}>
                        {el.children.map((ch:any,index:number) => (
                            <span key={index}>{ch.text}</span>
                        ))}
                    </p>
                )
            }
        })}
        </div>
    )
}