import React from "react"
import { Dimensions, Image, StyleSheet, Text, View, ScrollView, Platform } from "react-native"
import { colors } from "../../styles/colors"
import { useAppSelector } from "../../redux/hooks"
import { sessionObjectSelector } from "../../redux/SessionReducer"
import { shadows } from "../../styles/shadow"
import { ConfigurationList } from "../lists/ConfigurationList"





const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "transparent",
            flex:1,
            paddingHorizontal:16,
            paddingBottom:18
        },
        imageAndNameContainer: {
            width: "100%",
            height:Dimensions.get("window").height * 0.4,
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems:"center"
        },
        avatarContainer: {
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
        },
        nameStyles: {
            fontSize:25,
            fontWeight: "500",
            color:colors.principal,
        },
        informationContainer: {
            width:"100%",
            borderRadius:20,
            backgroundColor:colors.white_card,
            position: "relative",
            paddingHorizontal:16,
            paddingVertical:16,
            marginTop:16,
            maxHeight:Dimensions.get("window").height * 0.4,
            ...shadows.principalShadow
        },
        imageContainer: {
            paddingVertical:16,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop:Platform.select({
                ios:100,
                android:40
            })
        },
        row: {
            display: "flex",
            flexDirection:"row",
            height:40,
        },
        row2: {
            display: "flex",
            flexDirection:"row",
            height:50,
        },
        column: {
            display: "flex",
            flexDirection: "row",
            flexGrow:1,
            alignItems: "center",
        },
        columnRight: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            flexGrow:1,
            alignItems: "center",
        },
        subtotalTextStyles: {
            fontSize:16,
            fontWeight: "300",
            marginTop:8,
            color:colors.seconday_text,
        },

        listContainer: {
            marginTop:16
        }

    }
)

export const UserInformationContainer = ()=> {
    const {firstName, lastName, email, ci, birthDate, picture = "https://cdn-icons-png.flaticon.com/512/5556/5556468.png"} = useAppSelector(sessionObjectSelector)
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>

                <View style={{...shadows.principalShadow}}>
                    <View style={styles.avatarContainer}>
                        <Image 
                            style={styles.imageStyles}
                            source={{
                                uri: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1457"
                            }}
                        />
                    </View>
                </View>

            </View>
            
                
                
            <View style={styles.informationContainer}>
                <View style={styles.textContainer}>
                        <Text style={styles.nameStyles}>
                            {
                                (firstName === null || lastName === null) ? 'No configurado' : `${firstName} ${lastName}`
                            }
                        </Text>
                </View> 
                <View style={styles.row}>
                    <View style={styles.column}>
                            <Text style={styles.subtotalTextStyles}>
                                Correo
                            </Text>
                    </View>
                    <View style={styles.columnRight}>
                            <Text style={styles.subtotalTextStyles}>
                                {email}
                            </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                            <Text style={styles.subtotalTextStyles}>
                                Fecha de nacimiento
                            </Text>
                    </View>
                    <View style={styles.columnRight}>
                            <Text style={styles.subtotalTextStyles}>
                                {
                                    birthDate ?? 'No configurado'
                                }
                            </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                            <Text style={styles.subtotalTextStyles}>
                                CI
                            </Text>
                    </View>
                    <View style={styles.columnRight}>
                            <Text style={styles.subtotalTextStyles}>
                               {
                                ci ?? 'No configurado'
                               }
                            </Text>
                    </View>
                </View>
            </View>
            <View style={styles.listContainer}>
                <ConfigurationList />
            </View> 
                
        </View>
    )
}