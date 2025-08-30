import { View, Text, Pressable } from 'react-native'
import React from 'react'
import CustomBottomTabs from '../../../components/CustomBottomTabs'
import Layout from '../../../components/Layout'
import { useColorTheme } from '../../../context/ThemeContext'
import createStyles from '../../../constants/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  const { themeColor, fontFamily } = useColorTheme();
  const styles = createStyles(themeColor, fontFamily);

  return (
    <Layout>
      <View style={{ gap: 10 }}>
        <View style={{ alignItems: 'center', gap: 6 }}>
          <View style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, alignSelf: 'center', borderColor: themeColor.border }}>

          </View>
          <Text style={styles.header}>Reepu Shah</Text>
          <Text style={styles.text}>reepushah95013@gmail.com</Text>
        </View>

        <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <Text style={styles.largeText}>Your profile</Text>
          <Pressable style={{ flexDirection: 'row', gap: 5 }}>
            <Text style={styles.text}>30% Compete</Text>
            <Icon name='chevron-right' size={32} color={themeColor.iconSecondary} />
          </Pressable>

        </View>
        <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <Text style={styles.largeText}>Appearance</Text>
          <Pressable style={{ flexDirection: 'row', gap: 5 }}>
            <Text style={styles.text}>Dark</Text>
            <Icon name='chevron-right' size={32} color={themeColor.iconSecondary} />
          </Pressable>

        </View>
        <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <Text style={styles.largeText}>Language</Text>
          <Pressable style={{ flexDirection: 'row', gap: 5 }}>
            <Text style={styles.text}>English</Text>
            <Icon name='chevron-right' size={32} color={themeColor.iconSecondary} />
          </Pressable>

        </View>

        <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <Text style={styles.largeText}>Your rating</Text>
          <Pressable style={{}}>
            <Icon name='chevron-right' size={32} color={themeColor.iconSecondary} />
          </Pressable>
        </View>

        <View style={{ backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, gap: 10 }}>
          <Text style={[styles.largeText, { borderLeftWidth: 4, borderColor: themeColor.success, paddingLeft: 10 }]}>More</Text>
          <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'space-between' }}>
            <Text style={styles.largeText}>About</Text>
            <Pressable style={{}}>
              <Icon name='chevron-right' size={32} color={themeColor.iconSecondary} />
            </Pressable>
          </View>
          <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'space-between' }}>
            <Text style={styles.largeText}>Send feedback</Text>
            <Pressable style={{}}>
              <Icon name='chevron-right' size={32} color={themeColor.iconSecondary} />
            </Pressable>
          </View>
          <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'space-between' }}>
            <Text style={styles.largeText}>Settings</Text>
            <Pressable style={{}}>
              <Icon name='chevron-right' size={32} color={themeColor.iconSecondary} />
            </Pressable>
          </View>
          <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'space-between' }}>
            <Text style={styles.largeText}>Log out</Text>
            <Pressable style={{}}>
              <Icon name='chevron-right' size={32} color={themeColor.iconSecondary} />
            </Pressable>
          </View>
        </View>

      </View>
    </Layout>
  )
}

export default ProfileScreen