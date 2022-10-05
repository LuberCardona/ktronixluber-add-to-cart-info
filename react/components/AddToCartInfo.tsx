import React from 'react'
import { useProduct } from 'vtex.product-context' 
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from './ButtonGroup'
import {generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'


const AddToCartInfo = ({blockClass}: {blockClass: string}) => {
    const container = generateBlockClass(styles.container, blockClass)
    const container__item =  generateBlockClass(styles.container__item, blockClass)   
    const productInfo = useProduct() 
    const {orderForm} =  useOrderForm()

    console.log("Prueba orderForm", orderForm )

    const { orderForm:{
      items,
      totalizers
    }} = useOrderForm()
 
    console.log("Este producto tiene esta info", productInfo)
    console.log("Esta es mi información de la orden.. ITEMS", items) 
    console.log("Esta es mi información de la orden.. ITEMS", totalizers)   
    
    return (
      <div className={container}>
        {
          items.map((item: any, index: number)=>{

            console.log("Mi item del .map:", item)

            return(
             <div key={index} className={container__item}>
              <div>
                <img src={item.imageUrls.at1x} />
              </div>
              <div>
                <p>{item.name}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>$ {item.price / 100}</p>
               {/*  <p>Total x item $: {item.priceDefinition.total / 100} </p> */}
              </div>
             </div>            
            )
          })
        }
        <div>
          <p>Tienes {items.length} items en tu compra</p>
          <p>Prueba orderForm: {orderForm.userType} </p>
          {/* <p>Shipping country $: {orderForm.shipping.countries} </p> */}
          <p>Total general $: {totalizers[0]?.value} </p> 
        </div>
        
        <ButtonGroup /> 
      </div>        
    )
}

export default AddToCartInfo