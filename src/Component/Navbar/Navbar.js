import React ,{useContext}from 'react'
import {BsBag} from 'react-icons/bs'
import productsContext from './../../Contextes/ProductContext'
 import './Navbar.css'
export default function Navbar() {
  const contextData=useContext(productsContext)
  return (
    <nav className="navbar navbar-expand-sm py-3 d-flex">
        <div className="container">
            <a href="#" className="navbar-brand">شیراز موبایل</a>

            <ul className="navbar-nav me-auto ms-3">
                <li className="nav-item">
                    <a href="#" className="nav-link">خانه</a>
                    </li>
            </ul>

            <div className="bag-box">
                <a href="#" className="bag">
                   <BsBag className='text-white' onClick={()=>contextData.  setIsShowCart(true)}/>
                   <span className='bag-product-counter'>{contextData.count}</span>
                </a>
            </div>
        </div>
    </nav>
  )
}
