export class Estados{
    static estadoCabData;
    static estadoItemData;
    static statusDatosData;

    static async estadoCabGetAll() {
        try {
            if (!Estados.estadoCabData) {
                const response = await fetch("http://localhost:5001/estadoCab");
                Estados.estadoCabData = await response.json();
            }
            return Estados.estadoCabData;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    static async estadoItemGetAll() {
        try {
            if (!Estados.estadoItemData) {
                const response = await fetch("http://localhost:5001/estadoItem");
                Estados.estadoItemData = await response.json();
            }
            return Estados.estadoItemData;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    static async statusDatosGetAll() {
        try {
            if (!Estados.statusDatosData) {
                const response = await fetch("http://localhost:5001/statusDatos");
                Estados.statusDatosData = await response.json();
            }
            return Estados.statusDatosData;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

}
