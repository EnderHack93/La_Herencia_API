import { Storage } from "@google-cloud/storage";

const storage = new Storage({
    keyFilename: "cloud-storage.json",
    
});

export {storage};