"use client"

import { CaretDoubleDownIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function Hero(){

    return(
        <section 
            className='
                min-h-screen 
                bg-[url("/assets/intro.png")]
                bg-cover
                bg-center
                bg-no-repeat
                text-white
                gap-8 md:gap-10
                flex
                flex-col
                justify-center
                items-center
                relative
                px-6
                py-12
            '
        >
            <Image 
                src="/assets/foto.png" 
                alt="profile" 
                width={100} 
                height={100} 
                className="rounded-full object-cover" 
            />
            
            <div className="space-y-3 flex flex-col items-center w-full">
                <p className="font-[family-name:var(--font-inconsolata)] text-center text-sm md:text-base">
                    Hello World! Meu nome é <span className="text-red-500">João Marcos</span> Silva e sou
                </p>
                
                <h1 className="font-[family-name:var(--font-asap)] text-4xl md:text-[56px] font-bold text-center leading-tight">
                    Desenvolvedor Fullstack
                </h1>
                
                <p className="font-[family-name:var(--font-maven)] text-[14px] text-center w-full max-w-[700px] text-[#878EA1]">
                    Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
                </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-4">
                <div className="flex flex-col items-center gap-1">
                    <Image src="/assets/GitHub.svg" alt="GitHub icon" width={30} height={30}/>
                    <p className="text-xs md:text-sm">Github</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Image src="/assets/HTML.svg" alt="HTML icon" width={30} height={30}/>
                    <p className="text-xs md:text-sm">HTML</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Image src="/assets/CSS.svg" alt="CSS icon" width={30} height={30}/>
                    <p className="text-xs md:text-sm">CSS</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Image src="/assets/JavaScript.svg" alt="JavaScript icon" width={30} height={30}/>
                    <p className="text-xs md:text-sm">Javascript</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Image src="/assets/React.svg" alt="React icon" width={30} height={30}/>
                    <p className="text-xs md:text-sm">React</p>
                </div>
            </div>

            <div className="mt-8 md:mt-0">
                <CaretDoubleDownIcon size={32} />
            </div>
        </section>
    )
}