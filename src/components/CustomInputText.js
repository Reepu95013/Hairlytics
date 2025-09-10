import { View, TextInput, Text, StyleSheet } from "react-native";
import React, { memo, useState } from 'react'
import { useColorTheme } from "../context/ThemeContext";
import createStyles from "../constants/styles";

const CustomInputText = ({
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry = false,
    keyboardType = "default",
    validationRules = [],
    errorMessage,
    style,
    required = false,
}) => {
    const { themeColor, fontFamily } = useColorTheme();
    const commonStyles = createStyles(themeColor, fontFamily);
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState("");

    const validate = (text) => {
        for (let rule of validationRules) {
            if (!rule.validate(text)) {
                setError(rule.message);
                return false;
            }
        }
        setError("");
        return true;
    };

    const handleChange = (text) => {
        onChangeText(text);
        if (touched) {
            validate(text);
        }
    };

    return (
        <View style={styles.container}>
            {label && <Text style={[commonStyles.text, { marginBottom: 8 }]}>
                {label}{required && <Text style={{ color: themeColor.error }}>*</Text>}
            </Text>}
            <TextInput
                value={value}
                onChangeText={handleChange}
                placeholderTextColor={themeColor.secondaryText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                style={[styles.input, commonStyles.text, { backgroundColor: themeColor.secondaryBackground, borderColor: themeColor.border }, error ? styles.errorInput : null, style]}
                onBlur={() => {
                    setTouched(true);
                    validate(value);
                }}
            />
            {error ? <Text style={[commonStyles.text , {color:themeColor.error}]}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },

    input: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
    },
    errorInput: {
        borderColor: "red",
    },
    errorText: {
        marginTop: 4,
        color: "red",
        fontSize: 13,
    },
});

export default memo(CustomInputText);