const form = document.getElementById('form');

form.addEventListener('submit', async event => {
    event.preventDefault();
  

    //const data = new FormData(form);

    const nombre = document.getElementById('username').value
    const apelldo = document.getElementById('apellido').value
    const fecha = document.getElementById('fecha').value

    const data = {nombre, apelldo, fecha} //se crea el objeto para recopilar los datos del formulario 

  
    try {
      const response = await fetch(//realiza la solicitud con método POST 
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        },
      );
  
      const responseData = await response.json();
  
      console.log('submit succes', responseData);//muestra la respuesta del servidor
    } catch (err) {
      console.log(err.message); //maneja los posibles errores
    }

});
