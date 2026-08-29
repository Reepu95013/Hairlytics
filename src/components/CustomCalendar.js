import React, { memo, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useSelector } from "react-redux";


const CustomCalendar = () => {
    const { themeColor, fontFamily } = useSelector(state => state.theme);
    const [currentDate, setCurrentDate] = useState(new Date());
    const today = new Date();

    // Allowed date range
    const maxAllowedDate = new Date(today);
    maxAllowedDate.setMonth(today.getMonth() + 1); // 1 month ahead

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(month, year);
    const startDay = getFirstDayOfMonth(month, year);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const isDateDisabled = (day) => {
        const thisDate = new Date(year, month, day);
        return thisDate < yesterday || thisDate > maxAllowedDate;
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={goToPreviousMonth}>
                    <Text style={[styles.navBtn, { color: themeColor.primary }]}>◀</Text>
                </TouchableOpacity>
                <Text style={[styles.headerText, { color: themeColor.primary, fontFamily: fontFamily }]}>
                    {months[month]} {year}
                </Text>
                <TouchableOpacity onPress={goToNextMonth}>
                    <Text style={[styles.navBtn, { color: themeColor.primary }]}>▶</Text>
                </TouchableOpacity>
            </View>

            {/* Weekdays */}
            <View style={styles.weekDays}>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
                    <Text key={idx} style={[styles.weekDay, { fontFamily: fontFamily, color: themeColor.primary }]}>{day}</Text>
                ))}
            </View>

            {/* Days */}
            <View style={styles.daysContainer}>
                {/* Empty spaces */}
                {Array.from({ length: startDay }).map((_, idx) => (
                    <View key={`empty-${idx}`} style={styles.dayCell} />
                ))}

                {/* Actual days */}
                {Array.from({ length: daysInMonth }).map((_, idx) => {
                    const day = idx + 1;
                    const disabled = isDateDisabled(day);

                    return (
                        <TouchableOpacity onPress={() => console.log(day)}
                            key={day}
                            style={[
                                styles.dayCell,
                                disabled && styles.disabledCell
                            ]}
                            disabled={disabled}
                        >
                            <Text style={{ color: disabled ? "#aaa" : "#000", fontFamily: fontFamily }}>{day}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    header: {
        flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10
    },
    headerText: { fontSize: 18, fontWeight: "600" },
    navBtn: { fontSize: 20, padding: 5 },
    weekDays: { flexDirection: "row", justifyContent: "space-around", marginBottom: 5 },
    weekDay: { width: 40, textAlign: "center", fontWeight: "600" },
    daysContainer: { flexDirection: "row", flexWrap: "wrap" },
    dayCell: {
        width: 40, height: 40, justifyContent: "center", alignItems: "center",
        margin: 2, borderRadius: 8, backgroundColor: "#f1f1f1"
    },
    disabledCell: {
        backgroundColor: "#eee"
    }
});

export default memo(CustomCalendar);
