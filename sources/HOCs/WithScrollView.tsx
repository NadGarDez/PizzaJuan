import React, { useState } from "react";
import { Dimensions, Alert, ScrollView } from "react-native";

export const withScrollView = (WrappedComponent:()=>JSX.Element):()=>JSX.Element=>{
    return ()=> {
        const [height] = useState<number>(Dimensions.get("window").height)

        if(height < 700){
            return (
                <ScrollView>
                    <WrappedComponent />
                </ScrollView>
            )
        }
        return <WrappedComponent />

    }
}