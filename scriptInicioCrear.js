document.addEventListener("DOMContentLoaded", function() 
{
    const formResponsive = document.querySelector('.formResponsive');
    const buttonResponsive = document.querySelector('.buttonResponsive');
    const loginButton = document.getElementById('loginButton');

    // Función para manejar cambios en el tamaño de la ventana
    function handleWindowSize() 
    {
        // Obtener el ancho de la ventana
        const windowWidth = window.innerWidth;

        if (windowWidth < 768) 
        {    
            formResponsive.classList.remove('w-50');
            formResponsive.classList.add('w-100');

            buttonResponsive.classList.add('flex-column')
        } 
        else 
        {
            formResponsive.classList.remove('w-100');
            formResponsive.classList.add('w-50');

            buttonResponsive.classList.remove('flex-column');
        } 
    }

    loginButton.addEventListener("click", function() {
        login();
    });

    // Llamar a la función al cargar la página
    handleWindowSize();

    // Agregar un listener para manejar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleWindowSize);

    function login() 
    {
        var username = document.getElementById('floatingInput').value;
        var password = document.getElementById('floatingPassword').value;

        // Aquí deberías realizar la verificación del usuario y contraseña.

        if (username === 'AndresYepez' && password === 'Andres123') 
        {
            alert('Inicio de sesión exitoso');
            // Redirigir a principal.html
            window.location.replace('principal.html');
        } 
        else 
        {
            alert('Credenciales incorrectas');
        }
    }
});