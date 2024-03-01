import { query } from "../../../db/db";
import { Registration } from "../../domain/entidad/Registro";
import { RegistrationRepository } from "../../domain/interfaz/RegistroRepository";

export class MySqlRegistryRepository implements RegistrationRepository {
    async createRegistry(id_client: number ): Promise<Registration | null> {
    const sql = "INSERT INTO registrations (id_client) VALUES (?)";
    const params: any = id_client;
    try {
        console.log(params);
        const result: any = await query(sql, params);
        console.log(result);
        return new Registration(id_client);
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}