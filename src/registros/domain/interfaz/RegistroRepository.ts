import { Registration } from "../entidad/Registro";

export interface RegistrationRepository {
    createRegistry(
        id_client: number,
    ): Promise<Registration | null>;
}