import { Storage } from "@google-cloud/storage";
import {storage} from "../config/storage.js"
import moment from "moment/moment.js";
async function uploadFile(file) {
    const now = moment().format('YYYYMMDD_HHmmss');
    const bucket = storage.bucket('img-productos');
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
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
            resolve(publicUrl);
        });
        stream.end(file.buffer);
    });
  }
  async function replaceImage(file, nombreImagenAnterior) {
    const bucket = storage.bucket('img-productos');
    // Verificamos si el nombre de la imagen anterior existe en el Cloud Storage
    const blob = await bucket.file(nombreImagenAnterior).get();
    // Si el nombre de la imagen anterior existe en el Cloud Storage, la borramos
    if (blob) {
      await bucket.file(nombreImagenAnterior).delete();
    }
  
    // Subimos la nueva imagen
    const nuevaImagenUrl = await uploadFile(file);
  
    // Obtenemos el nombre del archivo de la nueva imagen
    const nombreImagenNueva = nuevaImagenUrl
  
    return nombreImagenNueva;
  }

  export {uploadFile,replaceImage}