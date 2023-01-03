import React ,{useState} from "react";
import Navbar from './Component/Navbar/Navbar'
import ProductSection from './Component/ProductSection/ProductSection'
import products from "./Component/data/product";
import Toast from './Component/Toast/Toast'
import Cart from "./Component/Cart/Cart";
import productsContext from './Contextes/ProductContext'
import './App.css'
export default function App() {
  const [allProducts]=useState(products)
  const [userCart,setUserCart]=useState([])
  const [isShowToast,setIsShowToast]=useState(false)
  const [isShowCart,setIsShowCart]=useState(false)
  const [count ,setCount]=useState(0)

  return (
    <div>
      <productsContext.Provider value={{
        allProducts,
        userCart,
        setUserCart,
        isShowCart,
        setIsShowCart,
        isShowToast,
        setIsShowToast,
        count,
        setCount
      }}>
      <Navbar />
      <main className="pb-5 mt-5">
        <div className="container">
          <h1 className="text-center main-title">محصولات</h1>
        </div>
   
          <ProductSection />
       
    
       
      </main>
      <Toast/>
      <Cart/>
      </productsContext.Provider>
    </div>
  );
}

