import { useState, useEffect } from 'react'
import { ProductTableItem } from '../../components/ProductsTable'

export interface ProductItem{
color: string
id: number
name: string
pantone_value: string
year: number
}

interface ResponseData {
data: ProductItem[]
page: number
per_page: number
support: {
    url: string,
    text: string
} 
total: number
total_pages: number
}

const LIMIT_PER_PAGE = 5

export const useHomeLogic = () => {

    const [products, setProducts] = useState<null | ProductItem[]>();
    const [filteredProduct, setFilteredProducts] = useState<number>(0);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState <ProductItem | null>(null)
    
    const handleNextPage = () => page === totalPage ? alert('ostatnia strona') : setPage(page +1)
    const handlePrevPage = () => page === 1 ? alert('pierwsza strona') : setPage(page -1)
    const handleModal = (product: ProductTableItem) => {
        setModal((prevState: boolean) => !prevState)
        setSelectedProduct(product)
    }

    useEffect(() => {
        (async () => {
            try {
               const response =  await fetch(`https://reqres.in/api/products?page=${page}&per_page=${LIMIT_PER_PAGE}`)
                const data: ResponseData = await response.json()
                console.log(data)
                setTotalPage(data.total_pages)
                setProducts(data.data)
            } catch (error) {
                console.error('Something went wrong', error)
            }
        })()
    }, [page]);

    return {
        products,
        filteredProduct,
        setFilteredProducts,
        handleNextPage,
        handlePrevPage,
        modal,
        handleModal,
        selectedProduct,
        setSelectedProduct,
        setModal
    }
}
