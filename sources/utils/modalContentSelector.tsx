import React, { useState } from "react";
import { PersonalConfigurationForm } from "../components/forms/PersonalConfigurationForm";
import { ModalFormNames } from "../constants/userConfigurationConstants";

import { Text } from "react-native";
import { DeliveryTabView } from "../components/navigation/DeliveryTabView";
import { PayMethodTabView } from "../components/navigation/PayMethodTabView";

export const modalSwitch: Record<ModalFormNames,JSX.Element> = {
    PERSONAL_CONFIGURATION: <PersonalConfigurationForm />,
    DELIVERY_CONFIGURATION: <DeliveryTabView />,
    PAYMENT_CONFIGURATION: <PayMethodTabView />
}
