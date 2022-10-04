import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from './ButtonGroup'


const AddToCartInfo = () => {
    const productInfo = useProduct()
    const { orderForm:{
      items,
      totalizers
    }} = useOrderForm()

    console.log("Este producto tiene esta info", productInfo)
    console.log("Esta es mi información de la orden", items, totalizers)    
    
    return (
        <>
          <ButtonGroup /> 
        </>        
    )
}

export default AddToCartInfo