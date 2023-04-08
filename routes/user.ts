import { Router } from "express";
import {
    getUser, getUsers, updateUser, createUser, deleteUser,
} from "../controllers/user";

const router = Router();

//obtener todos los usuarios
router.get("/", getUsers);
//obtener un usuario dado un id
router.get("/:id", getUser);
//crear un usuario
router.post("/", createUser);
//actualizar un usuario
router.put("/:id", updateUser);
//borrar un usuario dado su id
router.delete("/:id", deleteUser);

export default router;
