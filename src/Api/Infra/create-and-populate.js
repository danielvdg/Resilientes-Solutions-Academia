/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/Api/Infra/database.db');

//==== Academia
const ACADEMIA_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ACADEMIA" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "PLANO" VARCHAR(64),
    "VALOR" FLOAT,
    "QUANTIDADE" INTEGER,
    "PROMOCAO" VARCHAR(255),
    "STATUS_DE_PROMOCAO" BIT
      );`;

const ADD_ACADEMIA_DATA = `
INSERT INTO ACADEMIA (ID, PLANO, VALOR, QUANTIDADE, PROMOCAO, STATUS_DE_PROMOCAO)
VALUES 
    (1, 'básico',69.99, 1, 'padrão', 0),
    (2,'premium',169.99,1,'padrão',0),
    (3,'básico',49.99,3,'familia',1),
    (4,'premium',159.99,5,'familia',1)

`

function criaTabelaAcad() {
    db.run(ACADEMIA_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}

function populaTabelaAcad() {
    db.run(ADD_ACADEMIA_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}


db.serialize( ()=> {
    criaTabelaAcad();
    populaTabelaAcad();   
});