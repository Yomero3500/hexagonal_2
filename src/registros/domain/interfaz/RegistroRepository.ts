import { Registration } from "../entidad/Registro";

export interface RegistrationRepository {
    createRegistry(
        id_cliente: number,
    ): Promise<Registration | null>;
}