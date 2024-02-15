import { User } from "../../models/User";

export async function getUsersController(req: any, res: any){
    try {
        // Abfrage aller Benutzer aus der Datenbank
        const users = await User.find();
        
        // Senden der Benutzerdaten als Antwort
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
}
