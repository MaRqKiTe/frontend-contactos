import ApiService from '../api/ApiService.js';
import ContactoView from '../views/ContactoView.js';

export default class ContactoController {

    static async cargarContactos() {

        document.getElementById(
            'loader'
        ).style.display = 'flex';

        const response =
            await ApiService.obtenerContactos();

        ContactoView.renderizarTabla(
            response.data
        );

        this.eventosEliminar();

        this.eventosEditar();

        document.getElementById(
            'loader'
        ).style.display = 'none';
    }
    static async guardarContacto() {

        const data = {

            nombre: document.getElementById('nombre').value,

            apellido: document.getElementById('apellido').value,

            fecha_nacimiento:
                document.getElementById('fecha_nacimiento').value,

            id_categoria: parseInt(
                 document.getElementById('id_categoria').value),

            telefono:
                document.getElementById('telefono').value,

            correo:
                document.getElementById('correo').value

        };

        await ApiService.agregarContacto(data);

        Swal.fire({

            toast: true,

            position: 'top-end',

            icon: 'success',

            title: 'Registro agregado',

            showConfirmButton: false,

            timer: 2000

        });

        location.reload();
    }

    static eventosEliminar() {

        const botones =
            document.querySelectorAll('.btnEliminar');

        botones.forEach(btn => {

            btn.addEventListener('click', async () => {

                const id = btn.dataset.id;

                const result = await Swal.fire({

                    title: '¿Eliminar registro?',
                    text: 'Esta acción no se puede deshacer',
                    icon: 'warning',

                    showCancelButton: true,

                    confirmButtonText: 'Sí, eliminar',

                    cancelButtonText: 'Cancelar'

                });

                if (result.isConfirmed) {

                    await ApiService.eliminarContacto(id);

                    Swal.fire({
                        icon: 'success',
                        title: 'Registro eliminado',
                        timer: 1500,
                        showConfirmButton: false
                    });

                    location.reload();
                }

            });

        });

    }

    static eventosEditar() {

        const botones =
            document.querySelectorAll('.btnEditar');

        botones.forEach(btn => {

            btn.addEventListener('click', () => {

                document.getElementById(
                    'edit_id_contacto'
                ).value = btn.dataset.id;

                document.getElementById(
                    'edit_nombre'
                ).value = btn.dataset.nombre;

                document.getElementById(
                    'edit_apellido'
                ).value = btn.dataset.apellido;

                document.getElementById(
                    'edit_categoria'
                ).value = btn.dataset.categoria;

            });

        });

    }

    static async actualizarContacto() {

        const data = {

            id_contacto:
                document.getElementById(
                    'edit_id_contacto'
                ).value,

            nombre:
                document.getElementById(
                    'edit_nombre'
                ).value,

            apellido:
                document.getElementById(
                    'edit_apellido'
                ).value,

            fecha_nacimiento:
                document.getElementById(
                    'edit_fecha'
                ).value,

            id_categoria: parseInt(
                document.getElementById(
                    'edit_categoria'
                ).value

),

        };

        await ApiService.actualizarContacto(data);

        Swal.fire({

            toast: true,

            position: 'top-end',

            icon: 'success',

            title: 'Registro actualizado',

            showConfirmButton: false,

            timer: 2000

        });

        bootstrap.Modal
            .getInstance(
                document.getElementById('modalEditar')
            )
            .hide();

        this.cargarContactos();
    }
    
    static async cargarCategorias() {

    const response =
        await ApiService.obtenerCategorias();

    const selectAgregar =
        document.getElementById(
            'id_categoria'
        );

    const selectEditar =
        document.getElementById(
            'edit_categoria'
        );

    selectAgregar.innerHTML = '';
    selectEditar.innerHTML = '';

    response.data.forEach(categoria => {

        const option = `

            <option
                value="${categoria.id_categoria}">

                ${categoria.nombre_categoria}

            </option>

        `;

        selectAgregar.innerHTML += option;

        selectEditar.innerHTML += option;

    });

}

}