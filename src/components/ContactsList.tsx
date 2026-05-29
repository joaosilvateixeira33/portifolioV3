"use client"

import { EnvelopeSimpleIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import ContactCard from "./ContactCard"

export default function ContactsList(){

    const contacts = [
        {
            icon: <LinkedinLogoIcon size={25}/>,
            title: "Linkedin",
            link: "https://www.linkedin.com/in/jo%C3%A3o-silva-fullstack/"
        },
        {
            icon: <InstagramLogoIcon size={25}/>,
            title: "Instagram",
            link: "https://instagram.com/joaosilva.dev"
        },
        {
            icon: <GithubLogoIcon size={25}/>,
            title: "GitHub",
            link: "https://github.com/joaosilvateixeira33"
        },
        {
            icon: <EnvelopeSimpleIcon size={25}/>,
            title: "E-mail",
            link: "mailto:joaoteixeirasilva33@gmail.com"
        },
    ]

    return(
        <div className="flex flex-col gap-4 md:gap-5 w-full max-w-md mx-auto">
            {
                contacts.map(
                    (contact, index) =>(
                        <ContactCard 
                            key={index} 
                            icon={contact.icon} 
                            title={contact.title}
                            link={contact.link} // <-- Passando a propriedade nova aqui
                        />
                    )
                )
            }
        </div>
    )
}