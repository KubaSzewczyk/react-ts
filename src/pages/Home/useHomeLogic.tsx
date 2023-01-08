import { useState, useEffect } from 'react'

interface ProductItem{
color: String
id: any
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

const LIMIT_PER_PAGE = 5

export const useHomeLogic = () => {

    const [products, setProducts] = useState<null | ProductItem[]>(null);
    const [filteredProducts, setFilteredProducts] = useState<String | Number>();
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState<Number>(0);

    const handleNextPage = () => page === totalPage ? alert('ostatnia strona') : setPage(page +1)
    const handlePrevPage = () => page === 1 ? alert('pierwsza strona') : setPage(page -1)

    useEffect(() => {
        (async () => {
            try {
               const response =  await fetch(`https://reqres.in/api/products?page=${page}&per_page=${LIMIT_PER_PAGE}`)
                const data: ResponseData = await response.json()
                console.log(data)
                setTotalPage(data.total_pages)
                setProducts(data.data)
            } catch (error) {
                console.log('Something went wrong', error)
            }
        })()
    }, [page]);

return {products, filteredProducts, setFilteredProducts, handleNextPage, handlePrevPage, }
}
