import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image,
  Pressable,
  Alert,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Layout from '../../../components/Layout';
import { useTranslation } from 'react-i18next';
import { useLoader } from '../../../context/LoaderContext';
import CustomSearchBar from '../../../components/CustomSearchBar';
import CustomCategoryCardList from '../../../components/CustomCategoryCardList';
import createStyles from '../../../constants/styles';
import CustomItemCardList from '../../../components/CustomItemCardList';
import CustomAutoSlider from '../../../components/CustomAutoSlider';
import CustomOfferCardList from '../../../components/CustomOfferCardList';
import { useSelector } from 'react-redux';
const HomeScreen = ({ navigation }) => {
  const { setLoaderVisible } = useLoader();
  const { t } = useTranslation();
  const { themeColor, fontFamily } = useSelector(state => state.theme);
  const styles = createStyles(themeColor, fontFamily);
  const { user } = useSelector(state => state.auth);
  console.log("user", user);
  return (
    <Layout>
      <View style={{ gap: 12 }}>
        <CustomSearchBar />
        <Text style={styles.header}>{t('all_categories')}</Text>
        <CustomCategoryCardList />
        <CustomAutoSlider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={styles.header}>{t('nearby_salons')}</Text>
          <Pressable onPress={() => Alert.alert('see all')}>
            <Text
              style={{
                color: themeColor.primary,
                textDecorationLine: 'underline',
                fontWeight: '400',
                fontSize: 16,
              }}
            >
              {t('see_all')}
            </Text>
          </Pressable>
        </View>
        <CustomItemCardList />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={styles.header}>{t('best_salons')}</Text>
          <Pressable onPress={() => Alert.alert('see all')}>
            <Text
              style={{
                color: themeColor.primary,
                textDecorationLine: 'underline',
                fontWeight: '400',
                fontSize: 16,
              }}
            >
              {t('see_all')}
            </Text>
          </Pressable>
        </View>
        <CustomItemCardList />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={styles.header}>{t('best_offer')}</Text>
          <Pressable onPress={() => Alert.alert('see all')}>
            <Text
              style={{
                color: themeColor.primary,
                textDecorationLine: 'underline',
                fontWeight: '400',
                fontSize: 16,
              }}
            >
              {t('see_all')}
            </Text>
          </Pressable>
        </View>
        <CustomOfferCardList />
      </View>
    </Layout>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
  },
});
