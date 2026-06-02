import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    image: string;
    title: string;
    description: string;
    githubLink: string;
    homepageUrl: string;
}

export default function ProjectCard({
    image,
    title,
    description,
    githubLink,
    homepageUrl
}: ProjectCardProps ){
    return(
        <div 
            className="
                bg-[#292C34] 
                w-full
                h-full
                flex
                flex-col 
                items-center 
                justify-start 
                p-5 sm:p-6
                rounded-2xl
                gap-4
                border
                border-transparent
                hover:border-[#878EA1]
                transition-all
                duration-300
            "
        >
            <Image
                src={image}
                alt={`Imagem do projeto ${title}`}
                width={360}
                height={256}
                className="w-full h-auto rounded-xl object-cover"
            />

            <div className="flex flex-col items-center text-center w-full gap-4 mt-2">
                <h4 className="card-title text-lg sm:text-xl font-bold">
                    {title}
                </h4>

                <p className="card-description text-sm text-[#878EA1]">
                    {description}
                </p>

                <Link href={githubLink}>Repositorio</Link>
                <Link href={homepageUrl}>Ver Projeto</Link>
            </div>
        </div>
    )
}