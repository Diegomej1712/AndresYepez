document.addEventListener("DOMContentLoaded", function() {
    const hamburguesa = document.querySelector('.bi');

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
    }

    // Llamar a la función al cargar la página
    handleWindowSize();

    // Agregar un listener para manejar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleWindowSize);
});
