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
        modal,
        handleModal
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
                handleModal={handleModal}
            />
            <button onClick={() => handlePrevPage()}>Prev</button>
            <button onClick={() => handleNextPage()}>Next</button>
            {modal && <Modal />}
        </>
        )
}

export default Home