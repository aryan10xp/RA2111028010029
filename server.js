const express = require('express');
const cors = require('cors');
const axios = require('axios'); 

const app = express();
const PORT = process.env.PORT || 5000;
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU0NTY3LCJpYXQiOjE3MTIxNTQyNjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImRlZTQxNGEyLTU1NTktNDZmOC1hYzNkLWIxM2Q1ZWJkZDg5NiIsInN1YiI6ImF2MTAzMEBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiJkZWU0MTRhMi01NTU5LTQ2ZjgtYWMzZC1iMTNkNWViZGQ4OTYiLCJjbGllbnRTZWNyZXQiOiJqbW5RSmZ4SU9ZYlBzbVlhIiwib3duZXJOYW1lIjoiUmFodWwiLCJvd25lckVtYWlsIjoiYXYxMDMwQHNybWlzdC5lZHUuaW4iLCJyb2xsTm8iOiJSQTIxMTEwMjgwMTAwMjkifQ.Lzfynl8BuGMwkiAjIPTqe1plX6RjBktGWT6ff6ydMfM';


app.use(cors());
app.use(express.json());

app.get('/api/products', async (req, res) => {
    try {
        const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
            params: {
                top: 10,
                minPrice: 1,
                maxPrice: 10000
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const products = response.data;

        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'An error occurred while fetching products' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
