import React from 'react'
import { useContext } from 'react'
import productsContext from '../../Contextes/ProductContext'
export default function Toast() {
  const contextData=useContext(productsContext)
  return (
    <div className='toast-container position-fixed bottom-0 end-0 me-4 mb-4'>
      <div className={`${contextData.isShowToast ? 'show' :''} toast align-items-center text-white bg-primary`}  >
      <div className="d-flex align-items-center justify-content-between">
      <button type="button" className="btn-close ms-3 btn-close-white" data-bs-dismiss="toast" aria-label="Close" onClick={()=>contextData.setIsShowToast(false)}></button>
       <div className="toast-body">
        محصول با موفقیت به سبد اضافه شد
       </div>
     
      </div>
     </div>  
   </div>
  )
}
