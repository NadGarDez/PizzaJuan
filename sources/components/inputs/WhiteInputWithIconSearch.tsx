import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { SearchIcon } from "../icons/SearchIcon";
import { PLACEHOLDER_TEXT_FOR_SEARCH_PRODUCT_INPUT } from "../../constants/strings";
import { WhiteButton } from "../buttons/WhiteButton";
import { ReloadIcon } from "../icons/ReloadIcon";
import { useAppDispatch } from "../../redux/hooks";

const styles = StyleSheet.create(
    {
        container: {
            display:"flex",
            flexDirection:"row",
            backgroundColor:colors.white_card,
            flexGrow: 1,
            paddingVertical:6,
            paddingHorizontal:6,
            borderRadius:8,
            ...shadows.lightShadow
        
        },
        iconContainer: {
            marginRight:8
        },
        inputContainer: {
            flex:1,
            justifyContent:"center"
        },
        textInputStyles: {
            width:"100%",
            height:25,
            padding:0
        },
        buttonContainer: {
            marginLeft:8
        },
        generalContainer: {
            display: 'flex',
            flexDirection: 'row'
        }
    }
);

export const WhiteInputWithSearchIcon = ():JSX.Element=> {

    const dispatch = useAppDispatch();
    
    const [searchText, setSearchText] = useState<string>('');
    
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const DEBOUNCE_DELAY = 500; 

    const handleSearch = (text: string) => {
        dispatch({
            type: 'REQUEST_PRODUCTS',
            payload: { q: text }
        });
    };
    
    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (searchText.trim() === "") {
            handleSearch("");
            return;
        }

        timerRef.current = setTimeout(() => {
            handleSearch(searchText);
        }, DEBOUNCE_DELAY);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [searchText]);

    const reload = ()=> {
        setSearchText(""); 
        
        dispatch({
            type: 'REQUEST_PRODUCTS',
            payload: { q: undefined, category: undefined }
        });
    }

    return (
        <View style={styles.generalContainer}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <SearchIcon 
                        color={colors.seconday_text + "60"}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.textInputStyles}
                        placeholder={PLACEHOLDER_TEXT_FOR_SEARCH_PRODUCT_INPUT}
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <WhiteButton onPress={reload} deepShadow={false}>
                    <ReloadIcon 
                        color={colors.seconday_text + '60'}
                    />
                </WhiteButton>
            </View>
        </View>
    )
}