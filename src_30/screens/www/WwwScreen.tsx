import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import indexStyle from '../indexStyle'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { greenOld } from '../../components/color'
import { iconMedium } from '../../components/iconSize'
import { tenyMialohaStyles } from '../TenyMialoha/tenyMialohaStyles'
import daysStyles from '../30Days/daysStyles'
import homeStyles from '../Home/homeStyle'

const WwwScreen = ({ navigation}: any) => {
  return (
    <View style={indexStyle.container}>
      <TouchableOpacity style={tenyMialohaStyles.touchableIcon} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color={greenOld} size={iconMedium} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={tenyMialohaStyles.scrollView}>
        <Text style={tenyMialohaStyles.titleGreen}>www.pray30days.org</Text>
        <Text style={tenyMialohaStyles.paragraph}>
          " Ary izao no angatahiko, dia ny mbola
          hitomboan’ny fitiavanareo bebe
          kokoa amin’ny fahalalana tsara sy
          ny fahafantarana rehetra, 10mba
          hamantaranareo izay zavatra tsara
          indrindra, mba ho madio am-po ary
          tsy hanan-tsiny ho amin’ny andron’i
          Kristy ianareo, 11sady feno ny vokatry ny
          fahamarinana, izay avy amin’ny alalan’i
          Jesosy Kristy, ho voninahitra sy fiderana
          an’Andriamanitra. "
        </Text>
        <Text style={daysStyles.verse}>Filipiana 1:9-11</Text>
      </ScrollView>
    </View>
  )
}

export default WwwScreen;