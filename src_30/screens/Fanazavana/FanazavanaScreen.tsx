import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import indexStyle from '../indexStyle'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { greenOld } from '../../components/color'
import { iconMedium } from '../../components/iconSize'
import { tenyMialohaStyles } from '../TenyMialoha/tenyMialohaStyles'
import daysStyles from '../30Days/daysStyles'
import homeStyles from '../Home/homeStyle'

const FanazavanaScreen = ({ navigation}: any) => {
  return (
    <View style={indexStyle.container}>
      <TouchableOpacity style={tenyMialohaStyles.touchableIcon} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color={greenOld} size={iconMedium} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={tenyMialohaStyles.scrollView}>
        <Text style={tenyMialohaStyles.titleGreen}>FANAZAVANA FANAMPINY NA TENY AVY AMINAO:</Text>
        <Text style={tenyMialohaStyles.paragraph}>
          Fifaliana ho anay manokana ny handre ny akon’ny
          30 andro taminao!
          Ambarao aminay ny momba izany ao amin’ny:
        </Text>
          <Text style={homeStyles.link}>info@pray30days.org</Text>
        <Text style={tenyMialohaStyles.paragraph}>
          Tohana hoamin’ny 30 Andro Manerantany mba hahatonga
          ny tari-bavaka hiely hatrany hatrany!</Text>
          <Text style={homeStyles.link}>https://www.pray30days.org/donate/</Text>
          <Text style={tenyMialohaStyles.paragraph}>
          Mba hanampy anao amin’ny fivavakao sy hampahafantatra
          anao misimisy kokoa, aza misalasala ny mikaroka
          ireo tari-bavaka ato amin’ny:</Text>
          <Text style={homeStyles.link}>www.worldprayerguides.org</Text>
      </ScrollView>
    </View>
  )
}

export default FanazavanaScreen;