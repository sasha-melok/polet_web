

interface Vacancy {
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
}

export default async function getVacancies() {
    try{
        const res = await fetch('https://api.hh.ru/vacancies?employer_id=137955&per_page=100', {next: { revalidate: 86400 }, cache: 'force-cache' })

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)

        const data = await res.json()
        return data.items.filter((vac: Vacancy) => vac.area.name === 'Омск')
    } catch (error){
        console.error('Ошибка загрузки вакансий', error);
        return []
    }
}