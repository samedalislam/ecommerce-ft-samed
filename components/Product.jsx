import { useRouter } from 'next/router'
import { MdStar, MdStarBorder, MdStarHalf } from 'react-icons/md'

const Product = ({product}) => {
    const router = useRouter()
  return (
    <div className="product" onClick={() => router.push(`/details/${product.id}`)}>
        <div className="poster">
            <img src={product.image} alt="" />
        </div>
        <div className="info">
            <p className="title">{product.title.length  >= 50 ? `${product.title.slice(0, 47)}...` : product.title}</p>
            <div className="rate-count">
                <span className="rate">
                    {
                        Array.from({
                            length: 5
                        }, (v, i) => (
                            product.rating?.rate >= i+1 ? <MdStar /> : product.rating?.rate >= i+ 0.5 ? <MdStarHalf /> : <MdStarBorder />
                        ))
                    }
                </span>
                ~
                <span className="count">{product.rating?.count}</span>
            </div>
            <p className="price">$<span>{product.price}</span></p>
        </div>
    </div>
  )
}
export default Product