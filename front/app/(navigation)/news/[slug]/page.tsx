import { getNew } from "@/app/lib/getNews";
import s from './page.module.css'
import Image from "next/image";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const content = await getNew(slug);

    console.log(content);

    // Берём заголовок первой новости, если есть
    const title = content ? content.name : 'Загрузка...';

    return {
        title: title,
    };
}


export default async function Post({ params }: { params: Promise<{ slug: string }> }){
    const { slug } = await params;
    const data = await getNew(slug)
    const date_f = new Date(data.date).toLocaleDateString('ru')

    const pargs = data.content.split('\n')

    return(
        <div className={s.p_new1}>
            <p className={s.date}>{date_f}</p>
            <h2>{data.name}</h2>

            <div className={s.content}>
                {pargs.map((el:any, index:number) => {
                    return el == '' ? (null) : (  
                        <p key={index}>{el}</p>
                    )
                })}
                
                {data.image != null ? (
                        data.image.length == 1 ? (
                        <div className={`${s.imgs} ${s.solo}`}>
                            {data.image.map((el:any, index:number) => (
                                <Image key={index} src={`${process.env.STRAPI_URL}${el.url}`} alt={el.alternativeText} width={el.width} height={el.height} />
                        ))}
                    </div> ) : (
                        <div className={`${s.imgs} ${s.mult}`}>
                        {data.image.map((el:any, index:number) => (
                            <Image key={index} src={`${process.env.STRAPI_URL}${el.url}`} alt={el.alternativeText} width={el.width} height={el.height} />
                        ))}
                    </div> )
                ) : <></> }
            </div>
        </div>
    )
}