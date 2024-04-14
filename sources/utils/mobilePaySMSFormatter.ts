interface returningType {
    sms: string,
    phoneNumber:string
}

export const mobilePaySMSFormatter = (issuingBank:string, receivingBank:string, CIPre:string = 'V' ,receivingCI: string, receivingPhone:string, amount:string):returningType => {
    
    switch(issuingBank) {
        case "0102" : {
            return {
                sms:`Pagar ${receivingBank} ${receivingCI} ${receivingPhone} ${amount}`,
                phoneNumber: '2661'
            };
        }
        case "0114" : {
            return {
                sms: `mipago ${CIPre}${receivingCI} ${receivingBank} ${amount} ${receivingPhone}`,
                phoneNumber: '22741'
            };
        }
        case "0134" : {
            return {
                sms: `${receivingBank} ${receivingPhone} ${CIPre} ${receivingCI} ${amount}`,
                phoneNumber: '2846'
            };
        }
        case "0151" : {
            return {
                sms: `PAT ${receivingBank} ${receivingPhone} ${amount} ${CIPre}${receivingCI}`,
                phoneNumber: "88232"
            };
        }
        case "0163" : {
            return {
                sms: `Pagar ${receivingBank} ${receivingCI} ${receivingPhone} ${amount} [codigo de clave coordenada]`,
                phoneNumber: '2383'
            };
        }
        case "0175" : {
            return {
                sms: `Pago ${receivingBank} ${receivingPhone} ${CIPre}${receivingCI} ${amount}`,
                phoneNumber: '2383'
            };
        }
        default: {
            return {
                sms:`Pagar ${receivingBank} ${receivingCI} ${receivingPhone} ${amount}`,
                phoneNumber: '2661'
            };
        }
    }
}