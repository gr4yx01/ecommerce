import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav clas>
        <div>
            <Link href='/'>Shopr</Link>
        </div>
        <div>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/checkout">Checkout</Link>
        </div>
        <div>

        </div>
    </nav>
  )
}

export default Navbar
