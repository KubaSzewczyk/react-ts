import { ChangeEvent } from 'react'

import { useHomeLogic } from './useHomeLogic'
import ProductsTable from '../../components/ProductsTable'

const Home = () => {
    const {
        products,
        filteredProducts,
        setFilteredProducts,
    } = useHomeLogic() 

    if (!products) {
    return null
    }

    return (
        <>
            <input
                type="number"
                placeholder='type id of products'
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFilteredProducts(e.target.value)}
            />
            <ProductsTable
                products={products}
                filteredProducts={filteredProducts}
            />
        </>
        )
}

export default Home