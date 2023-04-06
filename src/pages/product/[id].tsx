import { useRouter } from "next/router"

const ProductItem = () => {

    const { query: { id } } = useRouter()

    return (
        <div>PAGINA PARA PRODUCTO: {id}</div>
    )
}

export default ProductItem