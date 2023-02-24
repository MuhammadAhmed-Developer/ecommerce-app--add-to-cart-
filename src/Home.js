import React from 'react';
import Itemscard from './Itemscard';
import data from './data';

export default function Home() {
  return (
    <>
      <h1 className='fw-bold text-center mt-3'>All Items</h1> 
      <section>
          <div className="container mt-5 text-center">
            <div className="row text-center">
                {data.productData.map((item, i)=>{
                  return <Itemscard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={i}/>
                })}
                
            </div>
          </div>
        </section> 
    </>
  )
}
