import React from "react"
import { Dimensions, Image, StyleSheet, Text, View, ScrollView } from "react-native"
import { colors } from "../../styles/colors"
import { shadows } from "../../styles/shadow"
import { useAppSelector } from "../../redux/hooks"
import { sessionObjectSelector } from "../../redux/SessionReducer"
import { EditableProperty } from "./EditableProperty"





const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "transparent",
            flex:1
        },
        imageAndNameContainer: {
            width: "100%",
            height:Dimensions.get("screen").width,
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems:"center"
        },
        imageContainer: {
            width:200,
            height:200,
            borderRadius:100,
            backgroundColor:colors.white_card,
            overflow: "hidden",
            borderStyle: "solid",
            borderColor: colors.white_card,
            borderWidth:3,
        },
        imageStyles: {
            width: "100%",
            height: "100%"
        },
        textContainer: {
            marginTop:16
        },
        nameStyles: {
            fontSize:25,
            fontWeight: "500",
            color:colors.background_white,
        },
        informationContainer: {
            height: (Dimensions.get("window").height - Dimensions.get("screen").width) + 30,
            width:"100%",
            borderRadius:20,
            backgroundColor:colors.white_card,
            position: "relative",
            top:-30,
            paddingHorizontal:16,
            paddingVertical:16
        },

    }
)

export const UserInformationContainer = ()=> {
    const {givenName, familyName, email, picture = "https://cdn-icons-png.flaticon.com/512/5556/5556468.png"} = useAppSelector(sessionObjectSelector)
    return (
        <View style={styles.container}>
            <View style={styles.imageAndNameContainer}>
                <View style={{...shadows.principalShadow}}>
                    <View style={styles.imageContainer}>
                        <Image 
                            style={styles.imageStyles}
                            source={{
                                uri: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1457"
                            }}
                        />
                    </View>
                </View>
                
                <View style={styles.textContainer}>
                        <Text style={styles.nameStyles}>
                            {givenName} {familyName}
                        </Text>
                </View>
            </View>
            <View style={styles.informationContainer}>
                <ScrollView style={{flex:1}}>
                    <EditableProperty 
                        value={email as string}
                        keyName="Email"
                    />
                    <EditableProperty 
                        value="No asignada"
                        keyName="Direccion"
                    />
                    <EditableProperty 
                        value="Otre"
                        keyName="Sexo"
                    />
                    <EditableProperty 
                        value="20/11/97"
                        keyName="Fecha de nacimiento"
                    />
                </ScrollView>
            </View>
        </View>
    )
}