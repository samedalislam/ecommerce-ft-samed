import { useRouter } from 'next/router'
import { MdOutlineShoppingCart, MdSearch } from 'react-icons/md'

const Header = () => {
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="header">
            {/* Logo */}
            <div className="left">
                <img src="/logo.png" alt="Brand" onClick={() => router.push('/')} />
            </div>
            {/* Search Box */}
            <div className="center">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search in ..." />
                    <MdSearch onClick={handleSubmit} />
                </form>
            </div>
            {/* Cart & Profile */}
            <div className="right">
                <div className="cart" onClick={() => router.push('/cart')} >
                    <MdOutlineShoppingCart />
                    <span>0</span>
                </div>
                <div className="profile">
                    <button onClick={() => router.push('/signin')}>Sign In</button>
                </div>
            </div>
        </div>
    )
}
export default Header