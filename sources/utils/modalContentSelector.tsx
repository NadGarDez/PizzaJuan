import React from "react";
import { PersonalConfigurationForm } from "../components/forms/PersonalConfigurationForm";
import { DeliveryTabView } from "../components/navigation/DeliveryTabView";
import { PayMethodTabView } from "../components/navigation/PayMethodTabView";
import { ModalFormNames } from "../types/forms/generalFormTypes";
import { TransactionCodeForm } from "../components/forms/TransactionCodeForm";

export const modalSwitch: Record<ModalFormNames,JSX.Element> = {
    PERSONAL_CONFIGURATION: <PersonalConfigurationForm />,
    DELIVERY_CONFIGURATION: <DeliveryTabView />,
    PAYMENT_CONFIGURATION: <PayMethodTabView />,
    TRANSACTION_CODE_FORM: <TransactionCodeForm />
}
