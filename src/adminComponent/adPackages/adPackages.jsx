import React, { useRef, useState } from 'react'
import './adPackages.css'
import { database, storage } from '../../Config'
import { addDoc, collection } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

export default function AdPackage() {
    const pgplace = useRef()
    const Pgday = useRef()
    const pgperson = useRef()
    const pgprice = useRef()

    const [img, setImg] = useState(null)
    const [message, setMessage] = useState('')

    const value = collection(database,'Packages')

    const Add = async (e) => {
        e.preventDefault()
        setMessage('')

        try {
            let imageUrl = null
            if (img) {
                const imageRef = ref(storage, `package-images/${v4()}`)
                const snapshot = await uploadBytes(imageRef, img)
                imageUrl = await getDownloadURL(snapshot.ref)
            }

            const obj = {
                pkplace: pgplace.current.value,
                pkday: parseInt(Pgday.current.value),
                pkperson: parseInt(pgperson.current.value),
                pkprice: parseFloat(pgprice.current.value),
                pkimageUrl: imageUrl
            }

            const docRef = await addDoc(value, obj)
            console.log("Document written with ID: ", docRef.id)
            setMessage("Data saved successfully!")

            e.target.reset()
            setImg(null)
        } catch (error) {
            console.error("Error adding document: ", error)
            setMessage("Error saving data. Please try again.")
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="form-container">
                        <h2 className='text-center alert-success'>Add Packages</h2>
                        {message && <div className="alert alert-info">{message}</div>}
                        <form onSubmit={Add}>
                            <div className="form-group">
                                <label htmlFor="image"><b>Image</b></label>
                                <input 
                                    type="file" 
                                    onChange={(e) => setImg(e.target.files[0])} 
                                    accept="image/*" 
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Place</b></label>
                                <input type="text" ref={pgplace} className='form-control' required/>
                            </div>
                            <div className="form-group">
                                <label><b>Days</b></label>
                                <input type='number' ref={Pgday} className='form-control' required/>
                            </div>
                            <div className="form-group">
                                <label><b>Person</b></label>
                                <input type="number" ref={pgperson} className='form-control' required/>
                            </div>
                            <div className="form-group">
                                <label><b>Price</b></label>
                                <input type="number" ref={pgprice} className='form-control' required/>
                            </div>
                            <button type="submit" className='btn btn-info btn-block mt-3'>
                                Add Package
                            </button>
                        </form>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
}