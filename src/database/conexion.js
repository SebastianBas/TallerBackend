import  Sequelize from "sequelize";

const db = new Sequelize("MascotaTaller", "mascotataller", "mascotataller",{
    dialect: "mysql",
    host: "localhost"
});

export {db}
