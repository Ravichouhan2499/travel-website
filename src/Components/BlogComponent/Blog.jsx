import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { collection, getDocs } from 'firebase/firestore'
import { database } from '../../Config'

export default function Blog() {


  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'blogs'));
        const blogsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);



  return (
 <div className="container-fluid py-5">
  <div className="container pt-5 pb-3">
    <div className="text-center mb-3 pb-3">
      <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Our Blog</h6>
      <h1>Latest From Our Blog</h1>
    </div>

    <div className="row pb-3">
{blogs.map((blog) => (
  <div className="col-lg-4 col-md-6 mb-4 pb-2" key={blog.id}>
    <div className="blog-item">
      <div className="position-relative">
        <img className="img-fluid w-100" src={blog.imageUrl} style={{height:'270px'}} alt={blog.title} />
        <div className="blog-date">
          <h6 className="font-weight-bold mb-n1 text-white">{blog.date}</h6>
          <small className="text-white text-uppercase"></small>
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="d-flex mb-2">
          <a className="text-primary text-uppercase text-decoration-none" href="#">{blog.place}</a>
          <span className="text-primary px-2">|</span>
          <Link to='/' className="text-primary text-uppercase text-decoration-none">
            Avantika &amp; Vacations
          </Link>
        </div>
        <a className="h5 m-0 text-decoration-none" href="#">{blog.details}</a>
      </div>
    </div>
  </div>
))}
</div> 



  </div>
</div>

  )
}

