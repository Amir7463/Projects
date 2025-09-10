import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function ListProduct() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
 

  function getAllProducts() {
 axios.get('http://localhost:3000/api/GetAllProducts') // ✅ fixed route
      .then(res => {
        console.log('Products fetched successfully:', res.data);
        setProducts(res?.data?.products);
        console.log('Products fetched successfully:', res);
        
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }

  useEffect(() => {
   getAllProducts()
  }, []);

  function handleDelete(id) {
    axios.delete(`http://localhost:3000/api/DeleteProduct/${id}`)
      .then(res => {
        console.log('Product deleted successfully:', res);
        setProducts(products.filter(prod => prod._id !== id)); // Update state to remove deleted product
        toast.success('Product deleted successfully');
      })
      .catch(err => {
        console.error('Error deleting product:', err);
      });

    }

  function handleEdit(id) {
    const product = products.find(prod => prod._id === id);
    console.log('Editing product:', product);
    toast.success('Editing product');
    setEditProduct(product);
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
    setEditProduct(null);    
  }

  function handleSave(id) {
    let obj = {
      name:editProduct.name,
      price: editProduct.price,
      description: editProduct.description
    };
console.log('Saving edited product:',id);
    console.log('Saving edited product:', obj);
      // Logic to save the edited product
      axios.put(`http://localhost:3000/api/UpdateProduct/${id}`, obj)
        .then(res => {
          console.log('Product updated successfully:', res);
          toast.success('Product updated successfully......');
          setShowModal(false);
           getAllProducts()
        })
        .catch(err => {
          console.error('Error updating product:', err);
        });
    }

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem', color: '#2563eb' }}>Product List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f0f4ff', color: '#333' }}>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Sl.NO</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Images</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Price</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Description</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, index) => (
          //  console.log('Product:', prod)
            
            <tr key={index}>
             {console.log('Product:', prod)}
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{index+1}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                <img
  src={`http://localhost:3000/uploads/${prod.image}`}
  alt={prod.name}
  style={{ width: '150px', height: 'auto' }}
/></td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{prod.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{prod.price}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{prod.description}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                <button className='btn btn-danger' onClick={()=>handleDelete(prod._id)}>Delete</button>
                <button className='btn btn-success ms-2' onClick={()=> handleEdit(prod._id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Model */}
      {showModal && editProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: '2rem', minWidth: 340, boxShadow: '0 2px 24px rgba(44,62,80,0.10)' }}>
            <h3 style={{ marginBottom: '1rem', color: '#2563eb' }}>Edit Product</h3>
            <form onSubmit={e => { e.preventDefault(); handleSave(editProduct._id); }}>
              <div style={{ marginBottom: '1rem' }}>
                <label>Name:</label>
                <input
                  type="text"
                  value={editProduct.name}
                  onChange={e => setEditProduct({ ...editProduct, name: e.target.value })}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #e3eafc' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label>Price:</label>
                <input
                  type="number"
                  value={editProduct.price}
                  onChange={e => setEditProduct({ ...editProduct, price: e.target.value })}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #e3eafc' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label>Description:</label>
                <textarea
                  value={editProduct.description}
                  onChange={e => setEditProduct({ ...editProduct, description: e.target.value })}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #e3eafc' }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default ListProduct;
