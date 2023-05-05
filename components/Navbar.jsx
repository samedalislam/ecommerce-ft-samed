import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { MdArrowDropDown } from "react-icons/md"

const Navbar = () => {
  const router = useRouter()
  const [cats, setCats] = useState([])
  useEffect(() => {
    const fetchCats = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/categories`)
      const data = await res.json()

      setCats(data)
    }

    fetchCats()
  }, [])
  return (
    <div className="navbar">
      <div className="categories">
        <span>
          Categories
          <MdArrowDropDown />
        </span>
        <ul>{
          cats.map((c, i) => (
            <li key={i} value={c} onClick={() => router.push(`/${c}`)}>{String(c).toUpperCase()}</li>
          ))
        }
        </ul>
      </div>
    </div>
  )
}
export default Navbar