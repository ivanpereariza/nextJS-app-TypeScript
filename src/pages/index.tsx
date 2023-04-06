import NavBar from "components/NavBar/NavBar"
import Link from "next/link"
import { useEffect, useState } from "react"

const Home = () => {

  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    fetch('/api/avo')
      .then(res => res.json())
      .then(({ data }) => setProductList(data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <NavBar />
      <h1>Hola mundo! Soy Ivan</h1>
      {
        productList.map(({ name, id, attributes }) => {
          return (
            <div key={id}>
              <h1>{name}</h1>
              <p>{attributes.description}</p>
              <Link href={`/product/${id}`}>Go to details</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home
