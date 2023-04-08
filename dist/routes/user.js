"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
//obtener todos los usuarios
router.get("/", user_1.getUsers);
//obtener un usuario dado un id
router.get("/:id", user_1.getUser);
//crear un usuario
router.post("/", user_1.createUser);
//actualizar un usuario
router.put("/:id", user_1.updateUser);
//borrar un usuario dado su id
router.delete("/:id", user_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map