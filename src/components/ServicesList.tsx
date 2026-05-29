import { DevicesIcon, HardDriveIcon, InfinityIcon } from "@phosphor-icons/react"
import ServicesCard from "./ServicesCard"

export default function ServicesList(){

    const services = [
        {
            icon: <DevicesIcon size={32}  color="#BB72E9"/>,
            title: "Websites e Aplicativos",
            description: "Desenvolvimento de interfaces"
        },
        {
            icon: <HardDriveIcon size={32}  color="#EABD5F"/>,
            title: "API e banco de dados",
            description: "Criação de serviços do sistema"
        },
        {
            icon: <InfinityIcon size={32}  color="#82BC4F"/>,
            title: "DevOps", // Corrigi o título aqui, parecia estar duplicado no código original
            description: "Gestão e infraestrutura da aplicação"
        },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {
                services.map(
                    (service, index) => (
                        <ServicesCard 
                            key={index} 
                            icon={service.icon} 
                            title={service.title} 
                            description={service.description}
                        />
                    )
                )
            }
        </div>
    )
}