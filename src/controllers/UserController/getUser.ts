import { User } from "../../models/User";

export async function getUserController(req: any, res: any){
    try {
        const { name } = req.params;
        console.log(name);
  
        // Überprüfen, ob der Parameter "namePrefix" im Abfragestring vorhanden ist
        if (!name) {
            return res.status(400).send('Name prefix is required');
        }
  
        // Suchanfrage in der Datenbank mit einem regulären Ausdruck
        const users = await User.find({ name: { $regex: '^' + name, $options: 'i' } });
  
        // Senden der Benutzerdaten als Antwort
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
}
