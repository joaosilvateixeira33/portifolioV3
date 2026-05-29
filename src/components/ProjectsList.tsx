import ProjectCard from "./ProjectCard";

export default function ProjectsList(){

    const projects = [
        { 
            image:"/tbn-project-01.png", 
            title:"Travelgram",
            description:"Rede social onde as pessoas mostram os registros de suas viagens pelo mundo"  
        },
        { 
            image:"/tbn-project-02.png", 
            title:"Tech News",
            description:"Homepage de um portal de notícias sobre a área de tecnologia"  
        },
        { 
            image:"/tbn-project-03.png", 
            title:"Página de receita",
            description:"Página com o passo a passo de uma receita para cupcakes"  
        },
        { 
            image:"/tbn-project-04.png", 
            title:"Zinguem",
            description:"Landing Page completa e responsiva de um aplicativo de Karaokê"  
        },
        { 
            image:"/tbn-project-05.png", 
            title:"Refund",
            description:"Um sistema para pedido e acompanhamento de reembolso"  
        },
        { 
            image:"/tbn-project-06.png", 
            title:"Página de turismo",
            description:"Página com as principais informações para quem quer viajar para Busan"  
        },
    ]

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
           {
                projects.map(
                (project, index) => (
                    <ProjectCard 
                        key={index} 
                        image={project.image} 
                        title={project.title} 
                        description={project.description}
                    />
                )   
             )
           }
        </div>
    )
}