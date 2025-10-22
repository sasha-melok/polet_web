'use server'
import contInfo from '@/public/contacts.json'

export async function getContacts() {
    try{
        // const res = await fetch(`${process.env.STRAPI_URL}/api/contact`, {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': `Bearer ${process.env.STRAPI_API}`
        //     },
            
        // })
        // console.log(res);
        
        // if (!res.ok){
        //     throw new Error('Ошибка при получении данных')
        // }

        // const data = await res.json()
        
        // return data.data
        return contInfo
    } catch (err){
        console.log(err)
        throw new Error('Ошибка при получении данных')
    }
}