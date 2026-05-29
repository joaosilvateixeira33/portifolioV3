import { ReactNode } from 'react';

type ServicesCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function ServicesCard({ icon, title, description }: ServicesCardProps){
    return(
        <div 
            className="
                border 
                border-[#16181D] 
                p-5 sm:p-6 
                w-full 
                h-full 
                rounded-2xl
                flex
                flex-col
                justify-start
                transition-all
                duration-300
                hover:border-[#878EA1]
            "
        >
            <div className="mb-4">
                {icon}
            </div>
            
            <h3 className="card-title text-lg sm:text-xl font-bold mb-2">
                { title }
            </h3>
            
            <p className="card-description text-sm text-[#878EA1]">
                { description }
            </p>
        </div>
    )
}