const express = require('express');
const { get } = require('express/lib/response');
const app = express();

// CONFIG..
app.set('port', process.env.PORT || 3000);

// Middlewares: Son funciones que se ejecutan antes de procesar algo.
app.use(express.json());

// URLS
app.use(require('./routes/employees'));

// LEVANTAR EL SERVIDOR.
app.listen(app.get('port'), () => {
    console.log('Server on port 3000', app.get('port'));
});
