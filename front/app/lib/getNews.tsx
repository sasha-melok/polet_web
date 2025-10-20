'use server'

export default async function getNews() {
    try{
        const res = await fetch('http://localhost:1337/api/news?populate=image', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.STRAPI_API}`
            }
        })
        const data = await res.json()

        console.log('token ' + process.env.STRAPI_API);
        

        if (!res.ok){
            throw new Error('Ошибка при получении данных')
        }

        return data.data
    } catch (err){
        console.log(err)
        throw new Error('Ошибка при получении данных')
    }
}