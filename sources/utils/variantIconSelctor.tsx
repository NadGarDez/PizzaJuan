import React from "react";
import { PizzaIcon } from "../components/icons/PizzaIcon";
import { DefaultVariantIcon } from "../components/icons/DefaultVariantIcon";
import { Drinks } from "../components/icons/Drinks";
import { AditionalIcon } from "../components/icons/AditionalIcon";
import { SnackIcon } from "../components/icons/SnackIcon";
import { categorires } from "../types/api/productTypes";

export const variantIconSwitch: Record<categorires,JSX.Element> = {
    Pizza: <PizzaIcon />,
    default: <DefaultVariantIcon />,
    Bebidas: <Drinks />,
    Acompañantes: <DefaultVariantIcon />,
    Snacks: <SnackIcon />
}