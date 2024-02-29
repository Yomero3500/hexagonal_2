import { Registration } from "../entidad/Registro";

export interface RegistrationRepository {
    createRegistry(
        id_cliente: number,
        content: string
    ): Promise<Registration | null>;
}