# React-Admin Dashboard

  Aplicación web desarrollada con Javascript mediante los frameworks React JS, react-admin y Material UI, y json-server para simular una API REST.

## Instalación

  Para comenzar, asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu computadora.

  1. Clona este repositorio en tu máquina local:

    git clone https://github.com/DanoSnow/React-Admin-Dashboard-Exam.git

  2. Instala las dependencias utilizando npm o yarn:

    npm install
    
  O si utilizas yarn

    yarn install

## Configuración

  Antes de ejecutar la aplicación, asegúrate de configurar correctamente la URL base para la API REST falsa. Por defecto, se espera que la API REST falsa se ejecute en http://localhost:3000.
  Si necesitas cambiar esta configuración, puedes hacerlo en el archivo package.json en la línea "server": "json-server --watch db.json --port {puerto}" y en consecuencia debes modificar la url que utilizará el dataProvider 'http://localhost:{puerto}' en el fichero App.jsx para una correcta comunicación entre react-admin y json-server.

## Ejecución

Una vez configurada la aplicación puedes ejecutar localmente la aplicación react-admin mediante el siguiente comando:

    npm run dev
    
  O si utilizas yarn

    yarn dev

Y una vez configurada la API REST falsa puedes ejecutar localmente json-server en otra terminal mediante el siguiente comando:

    npm run server
    
  O si utilizas yarn

    yarn server

## Funcionalidades

  La aplicación react-admin se encarga de realizar las solicitudes o peticiones a las endpoints de la API REST falsa y renderizar los componentes con las respuestas de las solicitudes.

## Tecnologías Utilizadas

  - [React JS](https://reactjs.org/)
  - [react-admin](https://marmelab.com/react-admin/)
  - [Material-UI](https://material-ui.com/)
  - [json-server](https://github.com/typicode/json-server)
  - [chart.js](https://www.chartjs.org/)
  - [react-chartjs-2](https://react-chartjs-2.js.org/)
  - [ra-data-simple-rest](https://www.npmjs.com/package/ra-data-simple-rest)

## Contribuciones

  Si encuentras algún error o tienes sugerencias de mejoras, no dudes en [crear un Issue](https://github.com/DanoSnow/React-Admin-Dashboard-Exam/issues) o [enviar un Pull Request](https://github.com/DanoSnow/React-Admin-Dashboard-Exam/pulls).