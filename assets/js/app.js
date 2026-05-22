import ContactoController from './controllers/ContactoController.js';

window.addEventListener('DOMContentLoaded', () => {

    ContactoController.cargarContactos();
    // ContactoController.cargarCategorias();

    document
        .getElementById('btnGuardar')
        .addEventListener('click', () => {

            ContactoController.guardarContacto();

        });

    document
        .getElementById('btnActualizar')
        .addEventListener('click', () => {

            ContactoController.actualizarContacto();

        });

    document
        .getElementById('buscador')
        .addEventListener('keyup', (e) => {

            const texto =
                e.target.value.toLowerCase();

            const filas =
                document.querySelectorAll('tbody tr');

            filas.forEach(fila => {

                fila.style.display =
                    fila.textContent
                        .toLowerCase()
                        .includes(texto)

                        ? ''

                        : 'none';

            });

        });
});