const express = require("express");
const fs = require("fs");
const estates = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

//Middleware
app.use(express.urlencoded({ extended: false }));

app.get('/api/estates', (req, res) => {
  return res.json(estates);
});

app.get('/api/estates/:id', (req, res) => {
  const id = Number(req.params.id);
  const estate = estates.find((estate) => estate.id === id);
  return res.json(estate);
});

app.get('/api/estates/type/:type', (req, res) => {
  const type = req.params.type;
  const estate = estates.filter((estate) => estate.Property_type === type);
  return res.json(estate);
});

app.get('/api/estates/bedrooms/:count', (req, res) => {
  const bedrooms = Number(req.params.count);
  const filteredestates = estates.filter((estate) => estate.Bedrooms >= bedrooms);
  return res.json(filteredestates);
});


app.post('/api/estates', (req, res) => {
  const body = req.body;
  estates.push({ ...body, id: estates.length + 1 });
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(estates), (err, data) => {
    return res.json({ status: "success", id: estates.length});
  });
});

app.put('/api/estates', (req, res) => {
  //Todo
  return res.json({ status: "pending" });
});

app.patch('/api/estates/:id', (req, res) => {
  //Todo
  return res.json({ status: "pending" });
});

app.delete('/api/estates/:id', (req, res) => {
  //Todo
  return res.json({ status: "pending" });
});

app.listen(PORT, () => console.log(`Server started at port:${PORT}`));