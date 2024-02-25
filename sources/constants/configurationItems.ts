import React from "react"
import { PersonIcon } from "../components/icons/PersonIcon"

const SECTION_ONE_TITLE = "Configuracion Personal"
const SECTION_ONE_SUBTITLE = "Configura nombre, appellido sexo y fecha de nacimiento"

const SECTION_TWO_TITLE = "Direccion de envio"
const SECTION_TWO_SUBTITLE = "Configura donde quieres que llegue tu pedido"

const SECTION_THREE_TITLE = "Configuracion de pago"
const SECTION_THREE_SUBTITLE = "Agrega medios de pago o recarga P'taxies"

type configurationItem = {
    title:string,
    subtitle: string,
}

export const configurationItems:configurationItem[] = [
    {
        title:SECTION_ONE_TITLE,
        subtitle:SECTION_ONE_SUBTITLE,
    },
    {
        title:SECTION_TWO_TITLE,
        subtitle:SECTION_TWO_SUBTITLE,
    },
    {
        title:SECTION_THREE_TITLE,
        subtitle:SECTION_ONE_SUBTITLE,
    }
]