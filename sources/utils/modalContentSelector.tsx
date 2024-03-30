import React from "react";
import { PersonalConfigurationForm } from "../components/forms/PersonalConfigurationForm";
import { DeliveryConfigurationForm } from "../components/forms/DeliveryConfiguraitonForm";
import { PaymentConfigurationForm } from "../components/forms/PaymentConfigurationForm";
import { ModalFormNames } from "../constants/userConfigurationConstants";
import { DeliveryTabView } from "../components/navigation/DeliveryTabView";

export type modalSwitchType = {
    [key in ModalFormNames] : (props:any)=> JSX.Element
}

export const modalSwitch: modalSwitchType = {
    PERSONAL_CONFIGURATION: PersonalConfigurationForm,
    DELIVERY_CONFIGURATION: DeliveryTabView,
    PAYMENT_CONFIGURATION: PaymentConfigurationForm
}
