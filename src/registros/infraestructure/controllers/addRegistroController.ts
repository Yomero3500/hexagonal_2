import { Request, Response } from "express";
import { CreateRegistryUseCase } from "../../app/usesCases/addRegistroUseCase";

export class CreateRegistryController {
    constructor (readonly createRegistryUseCase: CreateRegistryUseCase) {}

    async run(req:Request, res:Response){
        const data = req.body;
        console.log("log en el controller",data);
        
        try {
            const registry = await this.createRegistryUseCase.run(
                data.id_venta,
            );

            if(registry){
                res.status(201).send({
                    status: "success",
                    data:{
                        id_venta: registry?.id_venta,
                        
                    },
                });
            }else{
                res.status(204).send({
                    status: "error",
                    data: "Registro no agregado"
                });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error",
                messages: error
            });
        }
    }
}