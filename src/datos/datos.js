const mysql = require('mysql2/promise');

//función que permite leer los productos
async function leerBD() {
    var json1 = {}; //variable para almacenar cada registro que se lea, en formato json
    
    var arreglo = []; //variable para almacenar todos los datos, en formato arreglo de json
    
    var resultado = [];
    try {
        // Crea una conexión a la base de datos
        const conexion = await mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'almacenrei'
        });

        // Ejecuta una consulta
        resultado = await conexion.execute('SELECT * FROM producto');
        // Cierra la conexión
        await conexion.end();
        // Devuelve los resultados
        //console.log(resultado[0]);
        
        return resultado[0];
      } catch (error) {
        console.error(error);
      }


}
async function insertarBD(producto) {
    json1 = producto; //se almacena el producto recibido en la variable json1
    //console.log(json1); //muestra en consola el json que llego
    
    try {
        // Crea una conexión a la base de datos
        const conexion = await mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'almacenrei'
        });


        // Ejecuta una consulta
        resultado = await conexion.execute('INSERT INTO producto VALUES(null, ?,?,?)', 
        [json1.nombre, json1.descripcion, json1.precio]);
        // Cierra la conexión
        await conexion.end();

        return "producto insertado";
      } catch (error) {
        console.error(error);
      }

}


module.exports = { leerBD, insertarBD };