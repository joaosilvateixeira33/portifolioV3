"use client"

import ServicesList from "./ServicesList"

export default function Services(){
    return(
        <section 
            className="
                bg-[#0D0E11]
                text-white
                pt-12 md:pt-20 
                pb-8 md:pb-12
                px-4 sm:px-6
            "
        >
            <div className="max-w-7xl mx-auto mb-12 md:mb-20 flex flex-col items-center w-full">       
                
                <div className="text-center space-y-2 mb-10 md:mb-20 w-full px-2">
                    <p className="my-p">Meus serviços</p>
                    <h3 className="my-h3">Como posso ajudar o seu negócio.</h3>
                </div>
                
                <div className="w-full">
                    <ServicesList/>
                </div>
            </div>
        </section>
    )
}