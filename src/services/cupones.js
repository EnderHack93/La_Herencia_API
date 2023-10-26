import { cupon } from "../models/cupon.js"
import crypto from "crypto";

export const servGetAllCupons = async () => {
    const response = await cupon.findAll({
        where:{
            estado:true
        }
    });
    return response
}

export const servGetCuponCodigo = async (codigo) => {
    const response = await cupon.findOne({
        where:{
            codigo:codigo
        }
    });
    return response
}

export const servCreateCupon = async (cuponReq)=>{
    const codigo = generateAlphaNumericWithDashes()
    const response = await cupon.create({
        id_cupon: crypto.randomUUID(),
        codigo,
        porcentajeDescuento: cuponReq.porcentajeDescuento,
        usosMaximos: cuponReq.usosMaximos,
        usosDisponibles: cuponReq.usosMaximos,
    })
    return response
}

export const servChangeStateCupon = async (idCupon) => {
    const cuponR = await cupon.findByPk(idCupon);
    if(cuponR == null){
        return {mensaje:"cupon no encontrado"}
    }else{
        cuponR.estado = !cuponR.estado;
        await cuponR.save();
        return cuponR
    }
}
function generateAlphaNumericWithDashes() {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (let i = 0; i < 9; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result.slice(0, 3) + "-" + result.slice(3, 6) + "-" + result.slice(6);
  }
