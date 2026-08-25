import { PermissionsAndroid, Platform } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

//  taking image with camera and gallery, and allow permission method

const requestCameraPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  );
  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

export const requestImagePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES, // ✅ For Android 13+
        {
          title: 'Image Permission',
          message: 'This app needs access to your images.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true; // iOS auto permission through picker
};

export const pickImageFromGallery = async () => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    quality: 1,
  });

  if (result.didCancel) {
    console.log('User cancelled image picker');
  } else if (result.errorCode) {
    console.log('Error: ', result.errorMessage);
  } else {
    console.log('Selected image:', result.assets[0].uri);
    return result.assets[0].uri;
  }
};

export const captureImageFromCamera = async () => {
  const hasPermission = await requestCameraPermission();
  if (!hasPermission) {
    console.log('Camera permission denied');
    return;
  }

  const result = await launchCamera({
    mediaType: 'photo',
    saveToPhotos: true,
    cameraType: 'back',
  });

  if (result.didCancel) {
    console.log('User cancelled camera');
  } else if (result.errorCode) {
    console.log('Error: ', result.errorMessage);
  } else {
    console.log('Captured image:', result.assets[0].uri);
    return result.assets[0].uri;
  }
};

//  taking image with camera and gallery, and allow permission method
