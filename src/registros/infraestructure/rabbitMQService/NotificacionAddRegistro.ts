import amqplib from "amqplib";
import { Registration } from "../../domain/entidad/Registro";
import INotificationNewRegistry from "../../domain/servicios/INotificationNewRegistro";

export class NotificationNewRegistry implements INotificationNewRegistry {
    private url: any;
    private exch: any;
  
    constructor() {
      this.url = process.env.AMQP_URL_EC2;
      this.exch = process.env.EXCHANGE_EC2;
    }
  
    async sendNotification(registration: Registration): Promise<boolean> {
      const conn = await amqplib.connect(this.url);
      const ch = await conn.createChannel();
      const status = await ch.publish(this.exch, "12345", Buffer.from("Venta completada con exito"));
      console.log(status);
      return status;
    }
  }