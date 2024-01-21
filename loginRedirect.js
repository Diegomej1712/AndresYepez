function loginRedirect() 
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