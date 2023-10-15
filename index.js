const express = require("express");
const fs = require("fs");
const properties = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

//Middleware
app.use(express.urlencoded({ extended: false }));

app.get('/api/properties', (req, res) => {
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


app.post('/api/properties', (req, res) => {
  const body = req.body;
  properties.push({ ...body, id: properties.length + 1 });
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(properties), (err, data) => {
    return res.json({ status: "success", id: properties.length + 1 });
  });
});

app.patch('/api/properties/:id', (req, res) => {
  //Todo
  return res.json({ status: "pending" });
});

app.delete('/api/properties/:id', (req, res) => {
  //Todo
  return res.json({ status: "pending" });
});

app.listen(PORT, () => console.log(`Server started at port:${PORT}`));