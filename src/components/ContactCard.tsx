import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { ReactNode } from "react";

type ContactCardProps = {
    icon: ReactNode;
    title: string;
    link: string; // <-- Adicionamos a propriedade link aqui
}

export default function ContactCard({ icon, title, link }: ContactCardProps) {
    return(
        <a 
            href={link}
            target="_blank" // Abre o link em uma nova aba
            rel="noopener noreferrer" // Boa prática de segurança para links externos
            className="
                flex 
                items-center
                justify-between 
                bg-[#292C34]
                w-full
                p-4 sm:p-5
                rounded-lg
                border
                border-transparent
                hover:border-[#3996DB]
                transition-all
                duration-300
                cursor-pointer
                group
            "
        >
           <div 
                className="
                    flex
                    items-center
                    gap-3
                "
           >
                <div className="text-[#3996DB]">{icon}</div>
                <h4 className="text-sm sm:text-base font-medium text-[#C0C4CE] group-hover:text-white transition-colors duration-300">
                    { title }
                </h4>
           </div>
           
           <div className="text-[#3996DB] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
               <ArrowUpRightIcon size={24} weight="bold"/>
           </div>
        </a>
    )
}