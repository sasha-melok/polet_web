import Link from "next/link"
import './Vacancies.css'

export default function Vacancies({
    id,
    name,
    alternate_url,
    area,
    salary_range,
    experience,
    work_schedule_by_days
}:
{
    id: string,
    name: string,
    alternate_url: string,
    area: {
        name: string
    },
    salary_range: null | {
        from: string | null,
        to: string | null
    },
    experience: {
        name: string
    },
    work_schedule_by_days: Array<{
        name: string
    }>
}) {
    let salary = ''

    if ( salary_range != null){
        if ( salary_range.from != null &&  salary_range.to != null) {
            salary =  `от ${salary_range.from} до ${salary_range.to} руб/мес`
        }
        else if (salary_range.from != null &&  salary_range.to == null){
            salary =  `от ${salary_range.from} руб/мес`
        } else if (salary_range.from == null &&  salary_range.to != null){
            salary =  `до ${salary_range.to} руб/мес`
        }
    } else{
        salary =  `зарплата не указана`
    }

    return(
        <div className="vac">
            <div className="wrapper">
                <div className="data">
                    <h3>{name}</h3>
                    <p>{salary}</p>
                    <p><span>Опыт: </span>{experience.name}</p>
                    <p><span>График: </span>{work_schedule_by_days.map((el, index) => (
                        <span key={index} className="schedule">{el.name}</span>
                    ))}</p>
                </div>
                <Link target="_blank" href={alternate_url}>
                    <div className="wrapper">
                        узнать больше
                    </div>
                </Link>
            </div>
        </div>
    )
}