import ProjectsList from "./ProjectsList";

export default function Projects(){
    return(
        <section 
            className="
                bg-[#17181d]
                text-white
                pt-20 
                pb-8
                px-6
            "
        >
            <div className="max-w-7xl mx-auto mb-20 flex flex-col items-center">
                
                <div className="text-center space-y-2 mb-20">
                    <p className="my-p">
                        Meu trabalho
                    </p>

                    <h3 className="my-h3">
                        Veja os projetos em destaque
                    </h3>
                </div>

                <ProjectsList/>
            </div>
        </section>
    )
}