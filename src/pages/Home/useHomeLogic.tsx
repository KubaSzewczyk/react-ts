import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
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
    const { id } = useParams()
    const navigate = useNavigate()
    const { search } = useLocation()

    const [products, setProducts] = useState<null | ProductItem[]>();
    const [filteredProduct, setFilteredProducts] = useState<number>(0);
    const [page, setPage] = useState(id ? Number(id) : 1);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductTableItem | null>(null)
    
    const url = `https://reqres.in/api/products?page=${page}&per_page=${LIMIT_PER_PAGE}`

    const handleNextPage = () => page === totalPage ? alert('ostatnia strona') : setPage(page +1)
    const handlePrevPage = () => page === 1 ? alert('pierwsza strona') : setPage(page -1)
    const handleModal = (product: ProductTableItem) => {
        setModal((prevState: boolean) => !prevState)
        setSelectedProduct(product)
    }

    useEffect(() => {
        (async () => {
            try {
               const response =  await fetch(url)
                const data: ResponseData = await response.json()
                setTotalPage(data.total_pages)
                setProducts(data.data)
            } catch (error) {
                console.error('Something went wrong', error)
            }
        })()
    }, [url]);

    useEffect(() => {
        navigate(`/page/${page}${search}`)
        search.split('=')[0] === '?product' && setFilteredProducts(Number(search.split('=')[1]))
    }, [page])

    useEffect(() => {
        filteredProduct !== 0 ? navigate(`/page/${page}?product=${filteredProduct}`) : navigate(`/page/${page}`)
    }, [filteredProduct])


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
