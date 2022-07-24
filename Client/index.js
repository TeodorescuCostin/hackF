const express = require("express");
const app = express();

const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');

const { create } = require('ipfs-http-client');
const ipfs = create({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());


app.post('/api/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  const fileName = file.name;
  const filePath = './files' + fileName

  file.mv(filePath,  async (err) =>{
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    const fileHash = await addFile(fileName, filePath);
    fs.unlink(filePath, (err) => {
        if(err)console.log(err);
    })

    console.log(fileName, fileHash);
  });
});


const addFile = async (fileName, filePath) => {
  const file = fs.readFileSync(filePath);
  const fileAdded = await ipfs.add(file);
  const fileHash = JSON.stringify(fileAdded.path);

  console.log(fileHash)

  return fileHash;
}

app.use(express.static(path.join(__dirname, "./frontend/dist")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/dist/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Running on port ${port}`));

module.exports = app;
