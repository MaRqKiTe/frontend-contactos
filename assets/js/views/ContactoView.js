export default class ContactoView {

    static renderizarTabla(contactos) {

        const tabla =
            document.getElementById(
                'tablaContactos'
            );

        tabla.innerHTML = '';

        contactos.forEach(contacto => {

            tabla.innerHTML += `

                <tr class="fila-hover">

                    <td>
                        ${contacto.id_contacto}
                    </td>

                    <td>
                        <strong>
                            ${contacto.nombre}
                        </strong>
                    </td>

                    <td>
                        ${contacto.apellido}
                    </td>

                    <td>

                        <span
                            class="badge bg-dark"

                            title="
${contacto.descripcion}
                            ">

                            ${contacto.nombre_categoria}

                        </span>

                    </td>

                    <td>
                        ${contacto.tipo_dato}
                    </td>

                    <td>
                        ${contacto.valor}
                    </td>

                    <td>

                        <!-- EDITAR -->

                        <button

                            class="btn btn-warning btn-sm btnEditar"

                            data-id="${contacto.id_contacto}"

                            data-nombre="${contacto.nombre}"

                            data-apellido="${contacto.apellido}"

                            data-categoria="${contacto.id_categoria}"

                            data-bs-toggle="modal"

                            data-bs-target="#modalEditar">

                            <i class="bi bi-pencil-square"></i>

                        </button>

                        <!-- ELIMINAR -->

                        <button

                            class="btn btn-danger btn-sm btnEliminar"

                            data-id="${contacto.id_contacto}">

                            <i class="bi bi-trash"></i>

                        </button>

                    </td>

                </tr>

            `;
        });

    }

}