import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";


const styles = StyleSheet.create(
    {
        buttonContainer : {
            display:"flex",
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor: colors.white_card,
            borderRadius:12,
            borderStyle: "solid",
            borderColor: colors.seconday_text+"50",
            borderWidth: 1,
            overflow:"hidden"
        },
        leftButton: {
            height:40,
            width:40,
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center",
            padding:6,
            borderTopLeftRadius:12,
            borderBottomLeftRadius:12
        },
        centerNumber:{
            height:40,
            width:40,
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center",
            padding:6,
        },
        rightButton: {
            height:40,
            width:40,
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center",
            padding:6,
            borderTopRightRadius:12,
            borderBottomRightRadius:12
        },
        textStyles: {
            fontSize:14,
            fontWeight: "400",
            color:colors.black_thin,
        }
    }
)

type props = {
    onChange: (value:number)=>void,
    initialValue:number
}

export const PlusLessButton = (props:props):JSX.Element=>{
    const { onChange, initialValue}=props;

    const [counter, setCounter] = useState<number>(
        initialValue
    )
    
    const addCounter = ()=>setCounter(counter + 1)
    const restCounter = ()=>{
        if (counter > 0) setCounter(counter - 1)
    }

    useEffect(
        ()=>{
            onChange(counter)
        },
        [counter, onChange]
    )


    return (
        <View style={styles.buttonContainer}>
            <Pressable
                onPress={restCounter}
            >
                {
                    ({pressed})=>(
                        <View style={{...styles.leftButton, backgroundColor: pressed ? colors.seconday_text + "30" : colors.white_card}}>
                            <Text style={styles.textStyles}>
                                -
                            </Text>
                        </View>
                    )
                }
            </Pressable>
            
            <View style={styles.centerNumber}>
                <Text style={styles.textStyles}>
                    {counter}
                </Text>
            </View>
            <Pressable
                onPress={addCounter}
            >
                {
                    ({pressed})=>(
                        <View style={{...styles.rightButton, backgroundColor: pressed ? colors.seconday_text + "30" : colors.white_card}}>
                            <Text style={styles.textStyles}>
                                +
                            </Text>
                        </View>
                    )
                }
            </Pressable>
        </View>
    )
}
