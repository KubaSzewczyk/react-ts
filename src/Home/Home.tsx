import { useHomeLogic } from './useHomeLogic'

const Home = () => {
const  products  = useHomeLogic() 

    if (!products) {
    return null
}
    return (
        <>
            {products.map(({ name, id }) => <p key={id.toString()}> {name} </p>)}
        </>
        )
}

export default Home