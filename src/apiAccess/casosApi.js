export class Casos{
    static async getAll() {
        try {
            const response = await fetch("http://localhost:5001/casos");
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    static async updateCab(idCaso, updatedFields){
        //console.log(idCaso);
        try{
            const response = await fetch(`http://localhost:5001/casos/${idCaso}`,
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(updatedFields),
            })
            if (response.ok){
                const updatedCab = await response.json();
                return updatedCab;
            } else {
                const status = response.status;
                const message = response.statusText
                return {errorStatus: status, message: message}
            }

        }catch (error){
            console.log(error);
            return {errorStatus: error.status, message: error.message};
        }
    }

    static async updateItem(idItem, updatedFields){
        //console.log(idCaso);
        try{
            const response = await fetch(`http://localhost:5001/casos/${idItem}`,
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(updatedFields),
            })
            if (response.ok){
                const updatedItem = await response.json();
                return updatedItem;
            } else {
                const status = response.status;
                const message = response.statusText
                return {errorStatus: status, message: message}
            }

        }catch (error){
            console.log(error);
            return {errorStatus: error.status, message: error.message};
        }
    }
}