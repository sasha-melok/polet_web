import './NewsList.css'
import Link from 'next/link'

export default function NewsList({
    slug, name, content, date
}: {
    slug: string,
    name: string,
    content: any,
    date: string
}) {
    const date_f = new Date(date).toLocaleDateString('ru')
    
    return (
        <Link href={`/news/${slug}`} className="new_el">
            <p className="date">{date_f}</p>
            <div className="txt_block">
                <h3>{name}</h3>
                <p className="info">{content.length > 100 ? content.split(' ').slice(0,40).join(' ') +'...' : content}</p>
            </div>
        </Link>
    )
}