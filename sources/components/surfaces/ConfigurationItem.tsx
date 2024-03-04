import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { LocationIcon } from "../icons/LocationIcon";
import { GoFoward } from "../icons/GoFoward";
import { shadows } from "../../styles/shadow";
import { SECTION_ONE_TITLE, SECTION_THREE_TITLE, SECTION_TWO_TITLE } from "../../constants/configurationItems";
import { PersonIcon } from "../icons/PersonIcon";
import { HeartIconOutlined } from "../icons/HeartIconOutlined";
import { WalletIcon } from "../icons/WalletIcon";

const styles = StyleSheet.create({
    container: {
        paddingVertical:8,
        backgroundColor: colors.white_card,
        paddingHorizontal:16,
        borderRadius:15,
        marginBottom:8,
        ...shadows.principalShadow
    },
    titleStyles: {
        color:colors.seconday_text,
        fontSize:16,
        fontWeight:"600"
    },
    informationContainerAndButton: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    directionContainer: {
        flex:1,
        paddingHorizontal:4
    },
    iconContainer:{
        
    },
    semiTransparentCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#00000020",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    firstLineDirection: {
        color:colors.principal,
        fontSize:18,
        fontWeight:"500"
    },
    secondLineDirection: {
        marginTop:2,
        fontSize:14,
        fontWeight: "200",
        color:colors.seconday_text,
    }, 
    buttonContainer: {
        
    }

})

type props = {
    title:string,
    subtitle:string,
    onPress:()=>void
}


const IconSelector = ({title}:{title:string})=> {

    switch (title) {
        case SECTION_ONE_TITLE:
            return (
                <PersonIcon color={colors.white_card}  />
            )

        case SECTION_TWO_TITLE:
            return (
                <LocationIcon color={colors.white_card} />
            )
    
        default:
            return <WalletIcon color={colors.white_card}/>
    }

}

export const ConfigurationItem = ({title, subtitle, onPress}:props) => {
    return (
        <Pressable
            onPress={onPress}
        >
            {
                ({pressed})=>(
                    <View style={{
                        ...styles.container,
                        backgroundColor: pressed ? colors.formBorder  : colors.white_card
                    }}>
           
                        <View style={styles.informationContainerAndButton}>
                            <View style={styles.iconContainer}>
                                <View style={styles.semiTransparentCircle}>
                                    <IconSelector title={title} />
                                </View>
                            </View>
                            <View style={styles.directionContainer}>
                                    <Text style={styles.firstLineDirection}>
                                        {title}
                                    </Text>
                                    <Text style={styles.secondLineDirection}>
                                        {subtitle}
                                    </Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <GoFoward size={30} color={colors.seconday_text}/>
                            </View>
                        </View>
                    </View>
                )
            }
            
        </Pressable>
    )
}
