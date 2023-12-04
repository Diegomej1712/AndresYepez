document.addEventListener("DOMContentLoaded", function() 
{
    const hamburguesa = document.querySelector('.bi');
    const contactoResponsive = document.querySelector('.contacto');

    // Función para manejar cambios en el tamaño de la ventana
    function handleWindowSize() 
    {
        // Obtener el ancho de la ventana
        const windowWidth = window.innerWidth;

        // Verificar si el ancho de la ventana es menor o igual a 1000px
        if (windowWidth <= 1000) 
        {
            // Eliminar la clase d-none si está presente
            hamburguesa.classList.remove('d-none');
        } 
        else 
        {
            // Agregar la clase d-none si el ancho de la ventana es mayor a 1000px
            hamburguesa.classList.add('d-none');
        }

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