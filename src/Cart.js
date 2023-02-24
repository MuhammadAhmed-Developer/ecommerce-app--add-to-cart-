import React from 'react';
import { useCart } from 'react-use-cart';

export default function Cart() {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart();

    if(isEmpty){
        return <h1 className='fs-bold text-center'>Your Cart is Empty</h1>
    }

  return (
    <section>
        <div className="py-5 container">
            <div className="row justify-content-center">
                <div className="col">
                   <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                   <table className='table table-light table-hover m-0'>
                    <tbody className='text-start'>
                       {items.map((item, i)=>{
                         return (
                         <tr key={i}>
                            <td>
                                <img src={item.img} style={{height:'4rem'}}/>
                            </td>
                            <td>{item.title}</td>
                            <td>$ {item.price}</td>
                            <td>Quantity ({item.quantity})</td>
                            <td>
                                <button className='btn btn-sm btn-info fw-bold fs-6' onClick={()=>{
                                    updateItemQuantity(item.id, item.quantity - 1)
                                }}>-</button>
                                <button className='btn btn-sm btn-info mx-2 fw-bold fs-6' onClick={()=>{
                                    updateItemQuantity(item.id, item.quantity + 1)
                                }}>+</button>
                                <button className='btn btn-sm btn-danger m-2' onClick={()=>{
                                    removeItem(item.id)
                                }}>Remove Item</button>
                                </td>

                         </tr>)
                       })}
                    </tbody>
                   </table>
                </div>
            </div>
                <div className="col text-end mt-2">
                    <h4>Total Price: $ {cartTotal}</h4>
                </div>
                <div className="col text-end mt-2">
                    <h4 className='btn btn-danger ' onClick={()=>{emptyCart()}}>Clear Cart</h4>
                </div>
        </div>
    </section>
  )
}
