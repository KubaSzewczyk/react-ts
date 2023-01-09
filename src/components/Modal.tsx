import styled from 'styled-components'
import { ProductItem } from '../pages/Home/useHomeLogic'

interface ModalProps {
selectedProduct: any, setModal: any
}


const ModalContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
width: 200px;
height: 250px;
top: 10%;
left: 30%;
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
        <CloseButton onClick={() => setModal((prevState: boolean)=> !prevState)}>x</CloseButton>
        <p>id: {id}</p>
        <p>name: {name}</p> 
        <p>color: {color}</p>
        <p>year: {year}</p>
        <p>value: {pantone_value}</p>
    </ModalContainer>
)
}

export default Modal