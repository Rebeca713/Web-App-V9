import { ref, get,update } from "firebase/database";
import { db } from "./firebase";

export const getDatosUsuario = async (uid) => {
  try {
    const userRef = ref(db, `users/${uid}`);
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      throw new Error("No se encontraron datos del usuario.");
    }

    return snapshot.val();
  } catch (error) {
    console.error("Error al obtener datos del usuario:", error.message);
    return null;
  }
};

export const updateUserDiamantes = async (uid, nuevosDiamantes) => {
  try {
    const userRef = ref(db, `users/${uid}`);
    await update(userRef, { diamantes: nuevosDiamantes });
  } catch (error) {
    console.error("Error al actualizar diamantes:", error.message);
  }
};
export const updateUserNombre = async (uid, nuevoNombre) => {
  try {
    const userRef = ref(db, `users/${uid}`);
    await update(userRef, { nombre: nuevoNombre});
  } catch (error) {
    console.error("Error al actualizar el nombre", error.message);
  }
};
