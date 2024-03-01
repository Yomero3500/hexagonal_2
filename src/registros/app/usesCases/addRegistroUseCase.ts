import { Registration } from "../../domain/entidad/Registro";
import { RegistrationRepository } from "../../domain/interfaz/RegistroRepository";
import { NotificationRegistryUSeCase } from "../servicios/NotificationNewRegistro";
import { MessageServiceSocket } from "../../infraestructure/serviceMessage/MessageServiceSocket";

export class CreateRegistryUseCase {
    constructor( readonly registrationRepository: RegistrationRepository, readonly sendNotification: NotificationRegistryUSeCase, 
        readonly messageServiceSocket: MessageServiceSocket) {}

    async run(
        id_cliente: number,
    ): Promise<Registration | null> {
        try {
            const registry: any = await this.registrationRepository.createRegistry(
                id_cliente
            );
            if(registry) {
                this.sendNotification.run(registry);
                this.messageServiceSocket.sendMessage(registry);
            }
            return registry;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}