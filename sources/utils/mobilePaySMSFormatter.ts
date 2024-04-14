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
        case "0115" : {
            return {
                sms: `Pagar ${receivingBank} ${receivingCI} ${receivingPhone} ${amount}`,
                phoneNumber: '278'
            };
        }
        case "0128" : {
            return {
                sms: `Pagar ${receivingBank} ${receivingPhone} ${receivingCI} ${amount}`,
                phoneNumber: '3266'
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
        case "0157" : {
            return {
                sms: `DELSURP2C ${receivingBank} ${receivingPhone} ${receivingCI} ${amount}`,
                phoneNumber: '2383'
            };
        }
        case "0175" : {
            return {
                sms: `Pago ${receivingBank} ${receivingPhone} ${CIPre}${receivingCI} ${amount}`,
                phoneNumber: '2383'
            };
        }
        case "0168" : {
            return {
                sms: `Pagoya ${receivingPhone} ${CIPre} ${receivingCI}${receivingBank} ${amount} [pin]`,
                phoneNumber: '27327'
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