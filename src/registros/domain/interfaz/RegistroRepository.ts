import { Registration } from "../entidad/Registro";

export interface RegistrationRepository {
    createRegistry(
        id_venta: string,
    ): Promise<Registration | null>;
}