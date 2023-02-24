import React from 'react';
import { useCart } from 'react-use-cart';

export default function Itemscard(props) {

    const {addItem} = useCart(); 

  return (
    <div className='col-11 col-md-6 col-lg-4'>
         <div className="card mx-auto shadow w-75 m-3">
      <img src={props.img} className="card-img-top img-fluid"/>
     <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h5 className="card-title">$ {props.price}</h5>
    <p className="card-text">{props.desc}</p>
    <button className="btn btn-success" onClick={()=>addItem(props.item)}>Add to Cart</button>
  </div>
</div>
    </div>
  )
}
