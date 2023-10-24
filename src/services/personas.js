import { persona } from "../models/persona.js";
import bcrypt from "bcrypt";

export const servVerPersonas = async () => {
  const response = await persona.findAll({
    where: {
      estado: true,
    },
  });

  return response;
};
export const servVerPersona = async (id) => {
  const response = await persona.findByPk(id);
  return response;
};
export const servCreatePersona = async (personaReq) => {
  const idPersona = await genId(
    personaReq.nombres,
    personaReq.apellidos,
    personaReq.ci
  );
  const passHash = await bcrypt.hash(personaReq.password,10); 
  const newPersona = await persona
    .create({
      id_persona: idPersona,
      nombres: personaReq.nombres,
      apellidos: personaReq.apellidos,
      ci: personaReq.ci,
      telefono: personaReq.telefono,
      correo: personaReq.correo,
      password: passHash,
    })
    .catch((error) => {
        if(error.name == "SequelizeUniqueConstraintError"){
            const msg = error.errors[0].message;
            return {"UniquePropViolated":msg}
        }
      return error;
    });
    return newPersona;
};
export const servUpdatePersona = async (id,personaReq) => {
    const person = await persona.findByPk(id);
    if(!person) return {message:"Persona no encontrada"}

    person.nombres = personaReq.nombres;
    person.apellidos = personaReq.apellidos;
    person.ci = personaReq.ci;
    person.correo = personaReq.correo;
    person.password = personaReq.password;
    person.telefono = personaReq.telefono;

    person.save();
    return person;
}
export const servDeactivatePersona = async (id) => {
    const person = await persona.findByPk(id);
    if(!person) return {message:"Persona no encontrada"}
    person.estado = person.estado ? false : true;
    await person.save();
    return person;
}

const genId = async (nombres, apellidos, ci) => {
  var id_persona =
    nombres[0] +
    apellidos[0] +
    ci[0] +
    ci[ci.length - 1] +
    Math.floor(10000 + Math.random() * 90000);

    return id_persona
};