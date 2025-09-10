import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image); // "image" must match multer field name

    axios.post('http://localhost:3000/api/AddProduct', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((res) => {
        console.log('Product added successfully', res);
        toast.success(res.data);
        navigate('/admin/list-product');
        // Reset form
        setName('');
        setPrice('');
        setDescription('');
        setImage(null);
      })
      .catch(error => {
        console.error('There was an error adding the product!', error);
        toast.error('Failed to add product');
      });
  };

  return (
    <div style={{
      maxWidth: 500,
      margin: '2rem 0 0 2rem',
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 16px rgba(44,62,80,0.08)',
      padding: '2rem'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#2563eb',
        marginBottom: '1.5rem'
      }}>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.2rem' }}>
          <label style={{ display: 'block', marginBottom: '.5rem', color: '#333' }}>Product Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '.6rem', borderRadius: 6, border: '1px solid #e3eafc' }}
          />
        </div>

        <div style={{ marginBottom: '1.2rem' }}>
          <label style={{ display: 'block', marginBottom: '.5rem', color: '#333' }}>Price</label>
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
            style={{ width: '100%', padding: '.6rem', borderRadius: 6, border: '1px solid #e3eafc' }}
          />
        </div>

        <div style={{ marginBottom: '1.2rem' }}>
          <label style={{ display: 'block', marginBottom: '.5rem', color: '#333' }}>Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            rows={4}
            style={{ width: '100%', padding: '.6rem', borderRadius: 6, border: '1px solid #e3eafc' }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '.5rem', color: '#333' }}>Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
            style={{ display: 'block' }}
          />
        </div>

        <button type="submit" style={{
          width: '100%',
          padding: '.8rem',
          background: '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          fontWeight: 'bold',
          fontSize: '1.1rem',
          cursor: 'pointer'
        }}>
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
