const product = require('../models/product');


exports.AddProduct = async (req, res) => {
    const { name, description, price } = req.body;

    try {
        if (!req.file) {
            return res.status(400).send("Image file is required");
        }

        // Create new product
        const newProduct = new product({
            image: req.file.filename, // save the filename or full path if needed
            name,
            description,
            price
        });

        await newProduct.save();

        return res.status(201).send("Product added successfully");
    } catch (err) {
        console.error('Error creating product:', err);
        return res.status(500).send(`Server error: ${err.message}`);
    }
};

exports.DeleteProduct = async (req, res) => {
    const id = req.params.id.trim(); // remove newline or spaces

    try {
        const deletedProduct = await product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
    } catch (err) {
        console.error('Error deleting product:', err);
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
}
exports.UpdateProduct = async (req, res) => {
    const id = req.params.id.trim(); // remove newline or spaces
    console.log('Updating product with ID:', id);
    
    const { image, name, description, price } = req.body;
console.log('Update data:', { image, name, description, price });
    try {
        const updatedProduct = await product.findByIdAndUpdate(id, {
            image,
            name,
            description,
            price
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (err) {
        console.error('Error updating product:', err);
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
}
exports.GetAllProducts = async (req, res) => {
    try {
        const products = await product.find();
        return res.status(200).json({ message: 'Products retrieved successfully', products });
    } catch (err) {
        console.error('Error retrieving products:', err);
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
}
exports.GetProductById = async (req, res) => {
    const id = req.params.id.trim(); 

    try {
        const productData = await product.findById(id);
        if (!productData) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json({ message: 'Product retrieved successfully', product: productData });
    } catch (err) {
        console.error('Error retrieving product:', err);
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
}
