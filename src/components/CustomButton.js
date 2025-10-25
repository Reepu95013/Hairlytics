import React, { memo } from "react";
import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useColorTheme } from "../context/ThemeContext";
import createStyles from "../constants/styles";

const CustomButton = ({
    label,
    onPress,
    disabled = false,
    loading = false,
    validationRules = [], // array of validation functions
    value = "", // value to validate
    style,
    textStyle,
}) => {
    const { themeColor, fontFamily } = useColorTheme();
    const commonStyles = createStyles(themeColor, fontFamily);
    // Run validation rules
    const isValid = validationRules.every((rule) => rule(value));
    const isDisabled = disabled || !isValid || loading;

    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: themeColor.primary, opacity: isDisabled ? 0.5 : 1 },
                pressed && !isDisabled ? styles.pressed : null,
                style,
            ]}
            onPress={onPress}
            disabled={isDisabled}
        >
            {loading ? (
                <ActivityIndicator color="#fff" />
            ) : (
                <Text style={[commonStyles.largeText, {color:themeColor?.primaryText},textStyle]}>{label}</Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 16,
    },
    
    
    pressed: {
        opacity: 0.7,
    },
    
});



export default memo(CustomButton);
