const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();

const mysqlConnection = require('../database');


// METODO PARA OBTENER TODOS LOS EMPLEADOS.
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows,fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log(err);
        }
    })
});

// METODO PARA OBTENER UN EMPLEADO.
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id],(err, rows, fields) =>{
        if(!err){
            res.json(rows[0]);
        } else{
            console.log(err);
        }
    })
});


// METODO PARA AGREGAR UN NUEVO EMPLEADO.
router.post('/', (req, res) => {
    const {id, name, salary } = req.body;
    const query = `
        CALL employeeeAddOrEdit(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Empleado guardado exitosamente!.'});
        } else{
            console.log(err);
        }
    });
})


// METODO PARA ACTUALIZAR UN EMPLEADO.
router.put('/:id', (req, res) => {
    const { name, salary } = req.body;
    const { id } = req.params;
    const query = `
        CALL employeeeAddOrEdit(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Empleado actualizado exitosamente!.'});
        } else {
            console.log(err);
        }
    });
});


//  METODO PARA BORRAR UN EMPLEADO.
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Empleado borrado exitosamente!.'});
        } else {
            console.log(err);
        }
    });
});

module.exports = router;