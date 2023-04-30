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
}