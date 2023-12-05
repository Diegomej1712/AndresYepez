document.addEventListener("DOMContentLoaded", function() 
{
    const formResponsive = document.querySelector('.formResponsive');
    const buttonResponsive = document.querySelector('.buttonResponsive');

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

    // Llamar a la función al cargar la página
    handleWindowSize();

    // Agregar un listener para manejar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleWindowSize);
});
