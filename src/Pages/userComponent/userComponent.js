import React from 'react';
import { Link } from 'react-router-dom';
import img from "./img15.jpg"
import img1 from "./img16.jpg"
import img2 from "./img20.jpg"
import img3 from "./img21.jpg"
import img4 from "./img25.jpg"
import img5 from "./img26.jpg"
import img6 from "./img30.jpg"
import img7 from "./img31.jpg"
import img8 from "./img35.jpg"

export default function BlogComponent() {
  // Static blog data (hardcoded)
  const blogs = [
    {
      id: 1,
      imageUrl: img, // Placeholder image URL
      date: 'October 1, 2024',
      place: 'Bangkok',
      details: 'Exploring the beauty of Bangkok in the fall season.',
    },
    // {
    //   id: 2,
    //   imageUrl: img1, // Placeholder image URL
    //   date: 'October 15, 2024',
    //   place: 'Paris',
    //   details: 'Why Paris is the best place to visit this winter.',
    // },
    {
      id: 3,
      imageUrl: img2, // Placeholder image URL
      date: 'November 5, 2024',
      place: 'Bangkok',
      details: 'Exploring the beauty of Bangkok in the fall season.',
    },
    {
      id: 4,
      imageUrl: img3, // Placeholder image URL
      date: 'November 5, 2024',
      place: 'Australia',
      details: 'in the Coral Sea, off the northeast coast of Australia.',
    },
    {
      id: 5,
      imageUrl: img4, // Placeholder image URL
      date: 'November 5, 2024',
      place: 'Thailand',
      details: 'Nong Nooch Tropical Garden',
    },
    {
      id: 6,
      imageUrl: img5, // Placeholder image URL
      date: 'November 5, 2024',
      place: 'Bangkok',
      details: 'The ultimate guide to traveling in Bangkok.',
    },
    {
      id: 7,
      imageUrl: img6, // Placeholder image URL
      date: 'November 5, 2024',
      place: 'Escondido, California ',
      details: 'Safari Park in San Diego, USA',
    },
    {
      id: 8,
      imageUrl: img7, // Placeholder image URL
      date: 'November 5, 2024',
      place: 'Tokyo',
      details: 'The ultimate guide to traveling in Tokyo.',
    },
    // {
    //   id: 9,
    //   imageUrl: img8, // Placeholder image URL
    //   date: 'November 5, 2024',
    //   place: 'Tokyo',
    //   details: 'The ultimate guide to traveling in Tokyo.',
    // }
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>
            Our Blog
          </h6>
          <h1>Latest From Our Blog</h1>
        </div>

        <div className="row pb-3">
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6 mb-4 pb-2" key={blog.id}>
              <div className="blog-item">
                <div className="position-relative">
                  <img
                    className="img-fluid w-100"
                    src={blog.imageUrl}
                    style={{ height: '270px' }}
                    alt={blog.details}
                  />
                  <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1 text-white">{blog.date}</h6>
                    <small className="text-white text-uppercase"></small>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="d-flex mb-2">
                    <a className="text-primary text-uppercase text-decoration-none" href="#">
                      {blog.place}
                    </a>
                    <span className="text-primary px-2">|</span>
                    <Link to="/" className="text-primary text-uppercase text-decoration-none">
                      Avantika &amp; Vacations
                    </Link>
                  </div>
                  <a className="h5 m-0 text-decoration-none" href="#">
                    {blog.details}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
