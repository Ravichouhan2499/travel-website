import React, { useRef } from 'react'
import './adPackages.css'
import { database } from '../../Config'
import { Link, useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'

export default function AdPackage() {

    const pgplace = useRef()
    const Pgday = useRef()
    const pgperson = useRef()
    const pgprice = useRef()


const value =  collection(database , 'myProject')

 


    const Add = async(e)=>
    {
      e.preventDefault()

      var obj = {
        place : pgplace.current.value,
        day : Pgday.current.value,
        person : pgperson.current.value,
        price : pgprice.current.value
      }

      await addDoc(value , obj)
      console.log("Data Saved")


      e.target.reset()
      console.log("Obj is :", obj)
    }
    


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="form-container">
            <h2 className='text-center alert-success'> Add Packages</h2>
            <form onSubmit={Add}>
              <div className="form-group">
                <label htmlFor="image"><b>Image</b></label>
                <input type="file" accept="image/*" required/>
                {/* onChange={(e) => setImg(e.target.files[0])} */}
              </div>
              <div className="form-group">
                <label ><b>Place</b></label>
                <input type="text"  ref={pgplace} className='form-control' required/>
              </div>
              <div className="form-group">
                <label ><b>Days</b></label>
                <input type='number' ref={Pgday}  className='form-control' required/>
              </div>
              <div className="form-group">
                <label ><b>Person</b></label>
                <input type="number" ref={pgperson} className='form-control' required/>
              </div>
             
              <div className="form-group">
                <label><b>Price</b></label>
                <input type="number"  ref={pgprice} className='form-control' required/>
              </div>
              <button type="submit" className='btn btn-info btn-block mt-3'>Add Package</button>
            </form>

            <hr/>

            
          </div>
        </div>
      </div>
    </div>
  )
}