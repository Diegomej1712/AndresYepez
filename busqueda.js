function realizarBusqueda() {
    // Obtener el término de búsqueda desde el campo de entrada
    var terminoBusqueda = document.getElementById('searchInput').value.toLowerCase();
    
    // Obtener la lista de archivos
    var archivos = document.getElementById('archivoList').getElementsByTagName('li');
    var imagenes = document.getElementById('archivoList').getElementsByTagName('img');

    // Iterar sobre los elementos de la lista y mostrar/ocultar según la búsqueda
    for (var i = 0; i < archivos.length; i++) 
     {
        var archivo = archivos[i];
        var imagen = imagenes[i];
        var enlace = archivo.getElementsByTagName('a')[0];
        var textoEnlace = enlace.innerText.toLowerCase();
        var divImagen = archivo.querySelector('.iconBiblioteca'); // Modificado para buscar directamente en el archivo

        // Mostrar u ocultar el elemento según el término de búsqueda
        if (textoEnlace.includes(terminoBusqueda)) 
        {
            archivo.style.display = 'flex';
            imagen.style.display = 'flex';
            // Si hay una imagen, mostrarla
            if (divImagen) 
            {
                divImagen.style.display = 'flex';
            }
        } 
        else 
        {
            archivo.style.display = 'none';
            imagen.style.display = 'none';
            // Si hay una imagen, ocultarla
            if (divImagen) 
            {
                divImagen.style.display = 'none';
            }
        }
    }
}