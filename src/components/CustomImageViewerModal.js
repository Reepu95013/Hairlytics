import React, { useRef, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
  PanResponder,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

export default function CustomImageViewerModal({
  visible,
  imageUri,
  onClose = () => {},
  backgroundColor = 'rgba(0,0,0,0.95)'
}) {
  const animOpacity = useRef(new Animated.Value(0)).current;
  const animScale = useRef(new Animated.Value(0.95)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const offsetX = useRef(new Animated.Value(0)).current;
  const offsetY = useRef(new Animated.Value(0)).current;

  const lastOffset = useRef({ x: 0, y: 0 });
  const lastScale = useRef(1);

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(animOpacity, {
          toValue: 1,
          duration: 220,
          useNativeDriver: true,
        }),
        Animated.spring(animScale, {
          toValue: 1,
          friction: 8,
          tension: 80,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(animOpacity, {
          toValue: 0,
          duration: 180,
          useNativeDriver: true,
        }),
        Animated.timing(animScale, {
          toValue: 0.95,
          duration: 160,
          useNativeDriver: true,
        }),
      ]).start(() => {
        resetTransforms();
      });
    }
  }, [visible]);

  function resetTransforms() {
    lastOffset.current = { x: 0, y: 0 };
    lastScale.current = 1;
    Animated.parallel([
      Animated.timing(scale, { toValue: 1, duration: 120, useNativeDriver: true }),
      Animated.timing(offsetX, { toValue: 0, duration: 120, useNativeDriver: true }),
      Animated.timing(offsetY, { toValue: 0, duration: 120, useNativeDriver: true }),
    ]).start();
  }

  const lastTap = useRef(0);
  
  function handleDoubleTap() {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      const toValue = lastScale.current > 1.1 ? 1 : 2.5;
      lastScale.current = toValue;
      Animated.spring(scale, { toValue, useNativeDriver: true }).start(() => {
        if (toValue === 1) {
          Animated.spring(offsetX, { toValue: 0, useNativeDriver: true }).start();
          Animated.spring(offsetY, { toValue: 0, useNativeDriver: true }).start();
          lastOffset.current = { x: 0, y: 0 };
        }
      });
    }
    lastTap.current = now;
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_evt, gestureState) => {
        return Math.abs(gestureState.dx) > 2 || Math.abs(gestureState.dy) > 2;
      },
      onPanResponderGrant: () => {
        offsetX.setOffset(lastOffset.current.x);
        offsetX.setValue(0);
        offsetY.setOffset(lastOffset.current.y);
        offsetY.setValue(0);
      },
      onPanResponderMove: (_evt, gs) => {
        if (lastScale.current > 1.05) {
          offsetX.setValue(gs.dx);
          offsetY.setValue(gs.dy);
        } else {
          animOpacity.setValue(1 - Math.min(Math.abs(gs.dy) / (SCREEN_H * 0.8), 0.6));
          animScale.setValue(1 - Math.min(Math.abs(gs.dy) / (SCREEN_H * 6), 0.12));
          offsetY.setValue(gs.dy);
        }
      },
      onPanResponderRelease: (_evt, gs) => {
        if (lastScale.current <= 1.05 && Math.abs(gs.dy) > 140 && Math.abs(gs.vy) > 0.2) {
          Animated.parallel([
            Animated.timing(animOpacity, { toValue: 0, duration: 160, useNativeDriver: true }),
            Animated.timing(animScale, { toValue: 0.94, duration: 160, useNativeDriver: true }),
            Animated.timing(offsetY, { toValue: gs.dy > 0 ? SCREEN_H : -SCREEN_H, duration: 220, useNativeDriver: true }),
          ]).start(() => {
            animOpacity.setValue(0);
            animScale.setValue(0.95);
            resetTransforms();
            onClose();
          });
          return;
        }

        if (lastScale.current > 1.05) {
          offsetX.flattenOffset();
          offsetY.flattenOffset();
          lastOffset.current = { x: lastOffset.current.x + gs.dx, y: lastOffset.current.y + gs.dy };
        } else {
          Animated.parallel([
            Animated.timing(animOpacity, { toValue: 1, duration: 150, useNativeDriver: true }),
            Animated.spring(animScale, { toValue: 1, friction: 8, tension: 80, useNativeDriver: true }),
            Animated.spring(offsetY, { toValue: 0, useNativeDriver: true }),
          ]).start(() => {
            offsetY.setValue(0);
            offsetY.setOffset(0);
          });
        }
      },
    })
  ).current;

  useEffect(() => {
    const id = scale.addListener(({ value }) => (lastScale.current = value));
    return () => scale.removeListener(id);
  }, [scale]);

  const animatedImageStyle = {
    transform: [
      { translateX: offsetX },
      { translateY: offsetY },
      { scale: scale },
    ],
  };

  const backdropStyle = {
    backgroundColor,
    opacity: animOpacity,
    transform: [{ scale: animScale }],
  };

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <View style={styles.root} pointerEvents={visible ? 'auto' : 'none'}>
        <Animated.View style={[styles.backdrop, backdropStyle]} />

        <Animated.View style={[styles.container, { opacity: animOpacity, transform: [{ scale: animScale }] }]}>
          <View style={styles.header} pointerEvents="box-none">
            <Pressable onPress={onClose} style={styles.closeButton} android_ripple={{ color: 'rgba(255,255,255,0.08)' }}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>

          <View style={styles.flexCenter}>
            <TouchableWithoutFeedback onPress={handleDoubleTap}>
              <Animated.View
                {...panResponder.panHandlers}
                style={[styles.imageWrapper, animatedImageStyle]}
              >
                <Image
                  source={{ uri: imageUri }}
                  resizeMode="contain"
                  style={styles.image}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.95)',
  },
  container: {
    flex: 1,
  },
  header: {
    height: 56,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 20,
  },
  closeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    maxWidth: SCREEN_W,
    maxHeight: SCREEN_H * 0.86,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_W,
    height: SCREEN_H * 0.86,
  },
});
