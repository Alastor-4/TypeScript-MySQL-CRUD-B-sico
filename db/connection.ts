import { Sequelize } from 'sequelize';


const db = new Sequelize('node', 'root', undefined, {
    host: 'localhost', //donde esta el host, si fuese remoto, se pusiese el http
    dialect: 'mysql',
    // logging: false /* Esto es para ver todo el codigo en la consola*/
});//parámetro el nombre de la DB, usuario, contraseña, configuracion

export default db;