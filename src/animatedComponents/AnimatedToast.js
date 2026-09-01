import React, { useEffect } from 'react';
import { Text, StyleSheet, Dimensions, View, Image } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { clearError } from '../redux/auth/authSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { hideToast } from '../redux/app/appSlice';

const { width } = Dimensions.get('window');

const AnimatedToast = ({ message, visible, duration = 3000, type }) => {
  const dispatch = useDispatch();
  const translateY = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      translateY.value = withTiming(-150, {
        duration: 200,
        easing: Easing.out(Easing.ease),
      });

      setTimeout(() => {
        translateY.value = withTiming(150, {
          duration: 300,
          easing: Easing.in(Easing.ease),
        });

        dispatch(clearError());
        dispatch(hideToast());
      }, duration);
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={[styles.toastContainer, animatedStyle]}>
      <View
        style={[
          styles.sideBar,
          {
            backgroundColor:
              type == 'SUCCESS'
                ? '#bcf7cc'
                : type == 'ERROR'
                ? '#f7bcbc'
                : type == 'WARNING'
                ? '#f7d6bc'
                : '#bcc9f7',
          },
        ]}
      ></View>
      <View
        style={[
          styles.circle,
          {
            backgroundColor:
              type == 'SUCCESS'
                ? '#bcf7cc'
                : type == 'ERROR'
                ? '#f7bcbc'
                : type == 'WARNING'
                ? '#f7d6bc'
                : '#bcc9f7',
          },
        ]}
      >
        <Icon
          name={
            type == 'SUCCESS'
              ? 'check-circle'
              : type == 'ERROR'
              ? 'error'
              : type == 'WARNING'
              ?  'error'
              :  'error'
          }
          size={26}
          color={
              type == 'SUCCESS'
                ? '#024a15'
                : type == 'ERROR'
                ? '#d10505'
                : type == 'WARNING'
                ? '#e86603'
                : '#0435e6'
          }
        />
      
      </View>
      <Text style={styles.toastText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: -60,

    width: width - 20,

    height: 70,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    elevation: 5,
    shadowColor: '#000000',
    shadowOpacity: 5,
    shadowRadius: { x: 2, y: 2 },
    zIndex: 1000,
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
  },
  toastText: {
    color: '#000',
    textAlign: 'left',
    marginHorizontal: 10,
    width:'80%',
    fontSize: 16,
  },
  sideBar: {
    width: 5,
    height: '100%',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastIcon: {
    width: 16,
    height: 16,
  },
});

export default AnimatedToast;
