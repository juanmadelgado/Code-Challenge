form.addEventListener('submit', async event => {
    event.preventDefault();
  
    const data = new FormData(form); //se crea el objeto FormData para recopilar los datos del formulario 
  
    console.log(Array.from(data)); //convierte los datos en un array para verlos antes de la solicitud
  
    try {
      const response = await fetch(//realiza la solicitud con método POST 
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'POST',
          body: data,
        },
      );
  
      const responseData = await response.json();
  
      console.log('submit success')
      console.log(responseData); //muestra la respuesta del servidor
    } catch (err) {
      console.log(err.message); //maneja los posibles errores
    }
  });