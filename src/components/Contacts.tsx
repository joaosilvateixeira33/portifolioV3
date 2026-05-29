import ContactsList from "./ContactsList";

export default function Contacts(){
    return(
        <section 
            className='
                min-h-screen 
                bg-[url("/contacts.png")]
                bg-cover
                bg-center
                bg-no-repeat
                text-white
                flex
                flex-col
                justify-center
                items-center
                relative
                px-4 sm:px-6
                py-12 md:py-20
            '
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center w-full">
                            
                <div className="text-center space-y-3 mb-10 md:mb-20 w-full px-2">
                    <p className="my-p text-[#BB72E9]">
                        Contato
                    </p>
            
                    <h3 className="my-h3 text-3xl md:text-4xl">
                        Gostou do meu trabalho? 
                    </h3>
                    
                    <p className="card-title text-[#C0C4CE] text-sm md:text-base mt-2">
                        Entre em contato ou acompanhe as minhas redes sociais!
                    </p>
                </div>
                
                {/* Envolvendo a lista em um w-full para garantir adaptação no grid interno */}
                <div className="w-full">
                    <ContactsList/>     
                </div>
            </div>
        </section>
    )
}