import React from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useColorTheme } from '../context/ThemeContext';
import createStyles from '../constants/styles';

const screenWidth = Dimensions.get('window').width;

const CustomPieChart = () => {
  const { themeColor, fontFamily } = useColorTheme();
  const styles = createStyles(themeColor, fontFamily);
  const data = [
    {
      name: 'Haircut',
      population: 40,
      color: '#4F46E5',
      legendFontColor: themeColor?.text,
      legendFontSize: 14,
      legendFontFamily: fontFamily,
    },
    {
      name: 'Facial',
      population: 25,
      color: '#22C55E',
      legendFontColor: themeColor?.text,
      legendFontSize: 14,
      legendFontFamily: fontFamily,
    },
    {
      name: 'Massage',
      population: 20,
      color: '#F59E0B',
      legendFontColor: themeColor?.text,
      legendFontSize: 14,
      legendFontFamily: fontFamily,
    },
    {
      name: 'Others',
      population: 15,
      color: '#EF4444',
      legendFontColor: themeColor?.text,
      legendFontSize: 14,
      legendFontFamily: fontFamily,
    },
  ];

  return (
    <View style={style.container}>
      <Text style={styles.header}>Services Distribution</Text>
      <PieChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        absolute // shows numbers instead of percentage
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
 
});

export default CustomPieChart;
