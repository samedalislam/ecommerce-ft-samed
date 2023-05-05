import { useEffect, useState } from "react"
import Product from "./Product"

const Products = () => {
  const [products, setProducts] = useState([])
  console.log(products)

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`)
      const data = await res.json()

      setProducts(data)
    }

    getProducts()
  }, [])
  return (
    <div className="products">
      {
        products.map(p => <Product key={p.id} product={p} />)
      }
    </div>
  )
}
export default Products