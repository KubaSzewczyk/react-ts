import { ChangeEvent } from 'react'
import styled from 'styled-components'

import { useHomeLogic } from './useHomeLogic'
import ProductsTable from '../../components/ProductsTable'
import Modal from '../../components/Modal'

const StyledInput = styled('input')`
    width: 100%;
    height: 50px;
    border-radius: 8px;
    border: 0.5px solid black;
`

const Home = () => {
    const {
        products,
        filteredProduct,
        setFilteredProducts,
        handleNextPage,
        handlePrevPage,
        modal,
        handleModal,
        selectedProduct, 
        setModal
    } = useHomeLogic()

    if (!products) {
    return null
    }

    return (
        <>
            <StyledInput
                type="number"
                placeholder='type id of products'
                onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                    if (Number(e.target.value) < 0) {
                        return alert('The entered number should not be less than 0')
                    }
                    setFilteredProducts(Number(e.target.value))
                }}
            />
            <ProductsTable
                products={products}
                filteredProduct={filteredProduct}
                handleModal={handleModal}
            />
            <button onClick={() => handlePrevPage()}>Prev</button>
            <button onClick={() => handleNextPage()}>Next</button>
            {modal && <Modal setModal={setModal} selectedProduct={selectedProduct} />}
        </>
        )
}

export default Home