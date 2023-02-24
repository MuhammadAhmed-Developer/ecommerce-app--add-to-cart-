import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='auth'>
       <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
             <div className="card shadow bg-dark text-white p-2 p-md-3 p-lg-4">
               <div className="row">
                <div className="col">
                   <h3 className='mb-4'>Sign Up</h3>
                </div>
               </div>
              <form>
              <div className="row mb-3">
                <div className="col">
                   <label htmlFor="email">Email</label>
                  <input type="email" className='form-control' placeholder='Enter Your Email'  name='email' />
                </div>
               </div>
               <div className="row mb-4">
                <div className="col">
                   <label htmlFor="password">Password</label>
                  <input type="password" className='form-control' placeholder='Enter Your Password'  name='password' />
                </div>
               </div>
               <div className="row mb-4">
                <div className="col">
                  <button className='btn btn-success w-100'>Register </button>
                </div>
               </div>
              </form>
              <div className="row">
                <div className="col">
                  <p className="mb-0 text-center">Already have an Account? <Link to='/signIn' className=''>Sign In</Link></p>
                </div>
               </div>
             </div>
          </div>
        </div>
       </div>
    </div>
  )
}
