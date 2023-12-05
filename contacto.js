document.addEventListener("DOMContentLoaded", function() 
{
    const contactoResponsive = document.querySelector('.contacto');

    // Función para manejar cambios en el tamaño de la ventana
    function handleWindowSize() 
    {
        // Obtener el ancho de la ventana
        const windowWidth = window.innerWidth;

        if (windowWidth <= 768) 
        {
            contactoResponsive.classList.remove('w-25');
            contactoResponsive.classList.add('w-75');  
        } 
        else 
        {
            contactoResponsive.classList.remove('w-75');
            contactoResponsive.classList.add('w-25');
        } 
    }

    // Llamar a la función al cargar la página
    handleWindowSize();

    // Agregar un listener para manejar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleWindowSize);
});