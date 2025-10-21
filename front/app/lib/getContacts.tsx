'use server'

export async function getContacts() {
    try{
        const res = await fetch(`${process.env.STRAPI_URL}/api/contact`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.STRAPI_API}`
            },
            
        })
        if (!res.ok){
            throw new Error('Ошибка при получении данных')
        }

        const data = await res.json()
        
        return data.data
    } catch (err){
        console.log(err)
        throw new Error('Ошибка при получении данных')
    }
}