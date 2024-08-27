import React, { useState, useEffect } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { database } from '../../Config'; // Adjust the import based on your config file
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function ViewBlog() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const querySnapshot = await getDocs(collection(database, 'blogs'));
            const blogData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setBlogs(blogData);
        } catch (error) {
            console.error("Error fetching blogs: ", error);
        }
    };

    const Edit = (id) => {
        navigate(`/admin/editBlog/${id}`);
    };

    const Delete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                await deleteDoc(doc(database, 'blogs', id));
                setBlogs(blogs.filter(blog => blog.id !== id));
            } catch (error) {
                console.error("Error deleting blog: ", error);
            }
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="form-container">
                        <h2 className="text-center alert-success">View Blog Details</h2>
                        <hr />
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Sno.</th>
                                        <th>Image</th>
                                        <th>Place</th>
                                        <th>Details</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogs.map((blog, index) => (
                                        <tr key={blog.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                {blog.imageUrl ? (
                                                    <img 
                                                        src={blog.imageUrl} 
                                                        alt={blog.place} 
                                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                                                    />
                                                ) : (
                                                    'No Image'
                                                )}
                                            </td>
                                            <td>{blog.place}</td>
                                            <td>{blog.details}</td>
                                            <td>
                                                <FaRegEdit 
                                                    style={{ color: 'blue', cursor: 'pointer' }} 
                                                    onClick={() => Edit(blog.id)} 
                                                /> &nbsp; &nbsp;
                                                <MdDeleteForever 
                                                    style={{ color: 'red', cursor: 'pointer' }} 
                                                    onClick={() => Delete(blog.id)} 
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
