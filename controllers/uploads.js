const { response } = require("express");
const path = require('path')

const cargarArchivo = (req, res = response) => {

  
    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).json({ok:false,
        msg:'No files were uploaded.'});
      return;
    }

    if (!req.files.archivo) {
        res.status(400).json({ok:false,
          msg:'No files were uploaded.'});
        return;
      }
      


      const {archivo} = req.files;
  
  
    const uploadPath = path.join(__dirname,'../uploads/',archivo.name);
  
    archivo.mv(uploadPath, (err) => {
      if (err) {
        return res.status(500).json({err});
      }
  
      res.json({msg:'File uploaded to ' + uploadPath});
    });
    /*
    console.log(req.files);

    res.json ({
        msg: 'Hola Archivo'
    })
    */


}

/*
app.post('/upload', function(req, res) {
    let sampleFile;
    let uploadPath;
  
    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).send('No files were uploaded.');
      return;
    }
  
    console.log('req.files >>>', req.files); // eslint-disable-line
  
    sampleFile = req.files.sampleFile;
  
    uploadPath = __dirname + '/uploads/' + sampleFile.name;
  
    sampleFile.mv(uploadPath, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.send('File uploaded to ' + uploadPath);
    });
  });
*/

module.exports = {
    cargarArchivo
}