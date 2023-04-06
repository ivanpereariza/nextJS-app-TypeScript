import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const ProductItem = () => {

  const { query: { id } } = useRouter()

  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    getDetails()
  }, [id])

  const getDetails = () => {
    fetch(`/api/avo/${id}`)
      .then(res => res.json())
      .then(({ data }) => setProduct(data))
      .catch(err => console.log(err))
  }


  return (
    <>
      {
        product ?
          <div>
            <h1>{product?.name}</h1>
            <h2>Price: {product?.price}</h2>
            <p>{product?.attributes.description}</p>
            <Link href={'/'}>Back Home</Link>
          </div>
          :
          <p>Loading...</p>
      }
    </>

  )
}

export default ProductItem
