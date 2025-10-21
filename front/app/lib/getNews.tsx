'use server'

export async function getNews() {
    try{
        const res = await fetch(`${process.env.STRAPI_URL}/api/news?populate=image`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.STRAPI_API}`
            }
        })
        const data = await res.json()        

        if (!res.ok){
            throw new Error('Ошибка при получении данных')
        }

        return data.data
    } catch (err){
        console.log(err)
        throw new Error('Ошибка при получении данных')
    }
}

export async function getNew(slug:string) {
    try{
        const res = await fetch(`${process.env.STRAPI_URL}/api/news?filters[slug][$eq]=${slug}&populate=image`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.STRAPI_API}`
            }
        })
        const data = await res.json()        

        if (!res.ok){
            throw new Error('Ошибка при получении данных')
        }

        return data.data[0]
    } catch (err){
        console.log(err)
        throw new Error('Ошибка при получении данных')
    }
}