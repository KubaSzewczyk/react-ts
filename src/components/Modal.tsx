import styled from 'styled-components'
import { ProductTableItem } from './ProductsTable'

interface ModalProps {
    selectedProduct: ProductTableItem,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 400px;
height: 250px;
top: 10%;
left: 30%;
padding: 20px;
border: 1px solid black;
border-radius: 12px;
background-color: white;
`

const CloseButton = styled.div`
position: absolute;
text-align: center;
height: 20px;
width: 20px;
top: 2%;
right: 2%;
border: 1px solid black;
border-radius: 50%;
cursor: pointer;
`

const Modal = ({ selectedProduct, setModal }: ModalProps) => {
    const {id, color, pantone_value, year, name} = selectedProduct 
    
    return (
        <ModalContainer>
        <CloseButton onClick={() => setModal((prevState) => !prevState)}>x</CloseButton>
        <p>id: {id}</p>
        <p>name: {name}</p> 
        <p>color: {color}</p>
        <p>year: {year}</p>
        <p>value: {pantone_value}</p>
    </ModalContainer>
)
}

export default Modal