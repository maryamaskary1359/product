import React from 'react'
import { useContext } from 'react'
import productsContext from './../../Contextes/ProductContext'
import './ProductSection.css'
export default function ProductSection() {
  const contextData=useContext(productsContext)
  const addToCart=(info)=>{
    contextData.setCount(prev=>prev+1)
    contextData.setIsShowToast(true) 
    setTimeout(() => {
      contextData.setIsShowToast(false)
    }, 3000);
    let isInUserCart=contextData.userCart.some(bagProduct=>bagProduct.title==info.title)
    if(!isInUserCart){
      let newUsercard={
      id:contextData.userCart.length+1,
      title:info.title,
      price:info.price,
      count:1,
    }
   contextData.setUserCart(prevProduct=>([...prevProduct,newUsercard,]))
    }else{
      let userCart=[...contextData.userCart]
      // userCart.some(product=>{
      //   if(product.title==info.title){
      //     product.count+=1
      //     return true
      //   }
      // })
      // contextData.userCart(userCart)
      let newUserCart=userCart.map(product=>{
        if(product.title==info.title){
          product.count+=1
        }
        return product
      })
      contextData.setUserCart(newUserCart)
    }
  }
  return (
    <>
    {contextData.allProducts.map(ptoductSection=>(
       <div className='row justify-content-center mt-5' key={ptoductSection.ID}>
        <h3 className="text-center">{ptoductSection.title}</h3>
           {ptoductSection.infos.map(info=>(
             <div className="col-sm-10 col-md-5 col-lg-4 col-xl-3" key={info.id}>
            <div className="card py-3 px-3">
                <div className="col-12 text-center">
                    <img src="images/1.jpg" alt="Product Imgea" className="card-img-top w-75" />
                </div>

                <div className="card-body text-center">
                    <p className="card-text">{info.title}</p>
                    <span className="price">{info.price}تومان</span>
                   <br />
                    <a href="#nolink" className="btn btn-danger" onClick={()=>addToCart(info)}
               
               
                   >اضافه به سبد خرید</a>
                    <br />
                    <a href="#" className="btn btn-outline-dark mt-3 text-capitalize">اطلاعات بیشتر</a>
                    <p className="number">تعداد: {info.count}</p>
                </div>
            </div>
             </div>
           ))}
             
       
       
      
    </div>
    ))}
   
    </>
  )
}
