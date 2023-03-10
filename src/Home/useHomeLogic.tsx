import { useState, useEffect } from 'react'

interface ProductItem{
    color: String
    id: Number
    name: String
    pantone_value: String
    year: Number
}

interface ResponseData {
data: ProductItem[]
page: Number
per_page: Number
support: {
    url: String,
    text: String
} 
total: Number
total_pages: Number
}


export const useHomeLogic = () => {

    const [products, setProducts] = useState<null | ProductItem []>(null)  

    useEffect(() => {
        (async () => {
            try {
               const response =  await fetch(`https://reqres.in/api/products`)
                const data: ResponseData = await response.json()
                setProducts(data.data)
            } catch (error) {
                console.log('Something went wrong', error)
            }
        })()
    }, []);

return products
}
