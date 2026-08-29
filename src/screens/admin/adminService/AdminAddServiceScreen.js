import {
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  Alert,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import SecondLayout from '../../../components/SecondLayout';
import { useDispatch, useSelector } from 'react-redux';
import createStyles from '../../../constants/styles';
import CustomInputText from '../../../components/CustomInputText';
import CustomButton from '../../../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  captureImageFromCamera,
  pickImageFromGallery,
} from '../../../utils/helper';
import CustomImageViewerModal from '../../../components/CustomImageViewerModal';

const AdminAddServiceScreen = () => {
  const { themeColor, fontFamily } = useSelector(state => state.theme);
  const styles = createStyles(themeColor, fontFamily);
  const [descriptionList, setDescriptionList] = useState([]);
  const [description, setDescription] = useState('');
  const [selectToggle, setSelectToggle] = useState(false);
  const [imageViewerModal, setImageViewerModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const [imageList, setImageList] = useState([]);

  const addDescription = () => {
    setDescriptionList([...descriptionList, description]);
    setDescription('');
  };

  const onTakeImage = () => {
    Alert.alert('Choose an action', 'What do you want to do?', [
      {
        text: 'Take Images From Camera',
        onPress: () => takeImageFromCamera(),
        style: 'destructive',
      },
      {
        text: 'Choose From Gallery',
        onPress: () => takeImageFromGallery(),
        style: 'destructive',
      },
    ]);
  };

  const takeImageFromCamera = async () => {
    const response = await captureImageFromCamera();
    setImageList([...imageList, response]);
  };
  const takeImageFromGallery = async () => {
    const response = await pickImageFromGallery();
    setImageList([...imageList, response]);
  };

  const removeImage = indexToRemove => {
    setImageList(prevList =>
      prevList.filter((_, index) => index !== indexToRemove),
    );
  };

  const viewImage = image => {
    setSelectedImage(image);
    setImageViewerModal(true);
  };

  return (
    <SecondLayout screenName={'Add Service'}>
      <View>
        <Text style={styles.largeText}>Salon Name</Text>
        <Text style={styles.largeText}>Salon Address</Text>
        <CustomInputText label={'Service Name'} />
        <CustomInputText label={'Price'} />
        <CustomInputText label={'Discount %'} />
        <CustomInputText label={'Coupon Code'} />
        <CustomInputText label={'Coupon Dicount %'} />
        <CustomInputText label={'Coupon Expaire Date'} />
        <CustomInputText label={'Coupon Status'} />
        <View style={{ gap: 10 }}>
          <Text style={styles.text}>Description</Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: themeColor.border,
              height: 150,
              borderRadius: 12,
              backgroundColor: themeColor.secondaryBackground,
              padding: 10,
            }}
          >
            <FlatList
              data={descriptionList}
              keyExtractor={(item, index) => index.toString()}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="handled"
              style={{ height: 120 }}
              showsVerticalScrollIndicator={true}
              renderItem={({ item, index }) => (
                <Text style={styles.text}>
                  {index + 1}. {item}
                </Text>
              )}
              scrollEnabled={true}
            />
          </View>
          <CustomInputText
            placeholder={'Write Description'}
            onChangeText={text => setDescription(text)}
            value={description}
            numberOfLines={4}
            multiline={true}
            maxLength={40}
            style={{ height: 100 }}
            textAlignVertical={'top'}
          />
          <CustomButton
            label={'Add'}
            onPress={addDescription}
            style={{ alignSelf: 'center', width: '50%' }}
          />
        </View>

        <Pressable
          onPress={() => setSelectToggle(!selectToggle)}
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}
        >
          <Text style={[styles.text, { fontSize: 16 }]}>Status</Text>
          <Icon
            name={selectToggle ? 'toggle-on' : 'toggle-off'}
            size={42}
            color={selectToggle ? themeColor.primary : themeColor.icon}
          />
        </Pressable>

        <View style={{ gap: 10 }}>
          <Text style={styles.text}>Image</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20 }}>
            <Pressable
              onPress={onTakeImage}
              style={{
                width: 100,
                height: 100,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: themeColor.border,
                backgroundColor: themeColor.secondaryBackground,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon
                name={'add'}
                size={42}
                color={selectToggle ? themeColor.primary : themeColor.icon}
              />
            </Pressable>
            {imageList.map((item, index) => (
              <View style={{ flexDirection: 'row' }}>
                <Pressable key={index} onPress={() => viewImage(item)}>
                  <Image
                    source={{ uri: item }}
                    style={{
                      width: 100,
                      height: 100,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: themeColor.border,
                    }}
                  />
                </Pressable>
                <Pressable
                  onPress={() => removeImage(index)}
                  hitSlop={24}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: themeColor.border,
                    position: 'absolute',
                    right: -8,
                    top: -10,
                    backgroundColor: themeColor.secondaryBackground,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name={'close'} size={20} color={themeColor.icon} />
                </Pressable>
              </View>
            ))}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CustomButton style={{ width: '48%' }} label={'Reset'} />
          <CustomButton style={{ width: '48%' }} label={'Submit'} />
        </View>
      </View>

      <CustomImageViewerModal
        visible={imageViewerModal}
        onClose={() => setImageViewerModal(false)}
        imageUri={selectedImage}
      />
    </SecondLayout>
  );
};

export default AdminAddServiceScreen;
