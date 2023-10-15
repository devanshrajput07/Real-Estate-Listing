const express = require("express");
const properties = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

app.get('/api/properties',(req,res)=> {
    return res.json(properties);
});

app.get('/api/properties/:id', (req, res) => {
    const id = Number(req.params.id);
    const property = properties.find((property) => property.id === id);
    return res.json(property);
});

app.get('/api/properties/type/:type', (req, res) => {
    const type = req.params.type;
    const property = properties.filter((property) => property.Property_type === type);
    return res.json(property);
  });
  
  app.get('/api/properties/bedrooms/:count', (req, res) => {
    const bedrooms = Number(req.params.count);
    const filteredProperties = properties.filter((property) => property.Bedrooms >= bedrooms);
    return res.json(filteredProperties);
  });

app.listen(PORT,()=> console.log(`Server started at port:${PORT}`));