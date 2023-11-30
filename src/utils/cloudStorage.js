import {storage} from "../config/storage.js"
import moment from "moment/moment.js";
async function uploadFile(file,tabla) {
    const now = moment().format('YYYYMMDD_HHmmss');
    var bucket
    if(tabla == "productos"){
      bucket = storage.bucket('img-productos');
    }else if( tabla == "personas"){
      bucket = storage.bucket('la-herencia-users-img');
    }
    const fileName = `${now}_${file.originalname}`;
    const fileUpload = bucket.file(fileName);
    const stream = fileUpload.createWriteStream({
        resumable: false,
        public: true,
        metadata: {
            contentType: file.mimetype,
        },
    });
  
    return new Promise((resolve, reject) => {
        stream.on('error', reject);
        stream.on('finish', () => {
            const sanitizedFilename = fileUpload.name.replace(/\s/g, '');
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${sanitizedFilename}`;
            resolve(publicUrl);
        });
        stream.end(file.buffer);
    });
  }
  async function replaceImage(file, nombreImagenAnterior,tabla) {
    var bucket
    if(tabla == "productos"){
      bucket = storage.bucket('img-productos');
    }else if( tabla == "personas"){
      bucket = storage.bucket('la-herencia-users-img');
    }
    // Verificamos si el nombre de la imagen anterior existe en el Cloud Storage
    const blob = await bucket.file(nombreImagenAnterior).get();
    // Si el nombre de la imagen anterior existe en el Cloud Storage, la borramos
    console.log(nombreImagenAnterior);
    if (blob && nombreImagenAnterior != "perfil.png") {
      await bucket.file(nombreImagenAnterior).delete();
    }
  
    // Subimos la nueva imagen
    const nuevaImagenUrl = await uploadFile(file,tabla);
  
    // Obtenemos el nombre del archivo de la nueva imagen
    const nombreImagenNueva = nuevaImagenUrl
  
    return nombreImagenNueva;
  }

  export {uploadFile,replaceImage}