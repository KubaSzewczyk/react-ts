import { ChangeEvent } from 'react'

import { useHomeLogic } from './useHomeLogic'
import ProductsTable from '../../components/ProductsTable'
import Modal from '../../components/Modal'

const Home = () => {
    const {
        products,
        filteredProducts,
        setFilteredProducts,
        handleNextPage,
        handlePrevPage,
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
            <button onClick={() => handlePrevPage()}>Prev</button>
            <button onClick={() => handleNextPage()}>Next</button>
        </>
        )
}

export default Home