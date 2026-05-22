export default class ApiService {

    static API_URL = "https://marqkite.com/api-contactos/index.php";

    static async obtenerContactos() {

        const response = await fetch(
            `${this.API_URL}?accion=contactos-completos`
        );

        return await response.json();
    }

    static async agregarContacto(data) {

        const response = await fetch(
            `${this.API_URL}?accion=agregar-contacto-completo`,
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(data)
            }
        );

        return await response.json();
    }

    static async eliminarContacto(id_contacto) {

        const response = await fetch(
            `${this.API_URL}?accion=eliminar-contacto`,
            {
                method: 'DELETE',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    id_contacto
                })
            }
        );

        return await response.json();
    }
    static async actualizarContacto(data) {

    const response = await fetch(

        `${this.API_URL}?accion=actualizar-contacto`,

        {
            method: 'PUT',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        }
    );

    return await response.json();
}

static async obtenerCategorias() {

    const response = await fetch(

        `${this.API_URL}?accion=categorias`

    );

    return await response.json();
}

}