"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node', 'root', undefined, {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false /* Esto es para ver todo el codigo en la consola*/
}); //parámetro el nombre de la DB, usuario, contraseña, configuracion
exports.default = db;
//# sourceMappingURL=connection.js.map