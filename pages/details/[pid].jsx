import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md"

const pDetails = ({ p }) => {
  return (
    <>
    <Header />
    <Navbar />
    <div className="pid">
      <div className="wrapper">
        <div className="poster">
          <img src={p.image} alt="" />
        </div>
        <div className="info">
          <p className="title">{p.title}</p>
          <p className="category"><b>Category</b>: <span>{p.category}</span></p>
          <div className="rate-count">
            <span className="rate star">
              {
                Array.from({
                  length: 5
                }, (v, i) => (
                  p.rating?.rate >= i + 1 ? <MdStar /> : p.rating?.rate >= i + 0.5 ? <MdStarHalf /> : <MdStarBorder />
                  ))
              }
            </span>
            ~
            <span className="count">{p.rating?.count}</span>
          </div>
          <p className="price">$<span>{p.price}</span></p>
        </div>
      </div>
    </div>
                  </>
  )
}
export default pDetails


export async function getServerSideProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.pid}`)
  const data = await res.json()

  return {
    props: {
      p: data
    }
  }
}