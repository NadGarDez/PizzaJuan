import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { HeartIconFilled } from "../icons/HeartIconFilled";
import { HeartIconOutlined } from "../icons/HeartIconOutlined";


const styles = StyleSheet.create(
    {
        buttonContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: 30,
            height: 30,
            borderRadius: 20,
        }
    }
)

type props = {
    onPress: () => Promise<void>,
    pressed: boolean
}

export const HeartButton = (props: props): JSX.Element => {
    const { onPress, pressed } = props;

    const [pressedState, setPressed] = useState<boolean>(false);

    useEffect(
        () => {
            setPressed(pressed);
        },
        [pressed]
    )


    return (
        <TouchableOpacity
            onPress={async () => {
                await onPress();
            }}
        >
            <View style={styles.buttonContainer}>
                {
                    pressedState ? (
                        <HeartIconFilled color={colors.pink} />
                    ) : (
                        <HeartIconOutlined />
                    )
                }
            </View>
        </TouchableOpacity>
    )
}
