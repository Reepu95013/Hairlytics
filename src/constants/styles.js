import { StyleSheet } from 'react-native';

export default function createStyles(theme, fontFamily) {
    return StyleSheet.create({
        header: {
            color: theme.primaryText,
            fontSize: 18,
            fontWeight: "600",
            fontFamily: fontFamily
        },
        largeText: {
            fontWeight: "600",
            fontSize: 14,
            color: theme.primaryText,
            fontFamily: fontFamily
        },
        text: {
            fontWeight: "400",
            fontSize: 13,
            color: theme.secondaryText,
            fontFamily: fontFamily
        }
    });
}
