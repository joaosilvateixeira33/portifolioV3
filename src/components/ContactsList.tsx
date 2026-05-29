"use client"

import { EnvelopeSimpleIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import ContactCard from "./ContactCard"

export default function ContactsList(){

    const contacts = [
        {
            icon: <LinkedinLogoIcon size={25}/>,
            title: "Linkedin"
        },
        {
            icon: <InstagramLogoIcon size={25}/>,
            title: "Instagram"
        },
        {
            icon: <GithubLogoIcon size={25}/>,
            title: "GitHub"
        },
        {
            icon: <EnvelopeSimpleIcon size={25}/>,
            title: "E-mail"
        },
    ]

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl mx-auto">
            {
                contacts.map(
                    (contact, index) =>(
                        <ContactCard 
                            key={index} 
                            icon={contact.icon} 
                            title={contact.title}
                        />
                    )
                )
            }
        </div>
    )
}