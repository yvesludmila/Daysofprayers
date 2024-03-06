import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, ImageBackground, Image, Pressable } from 'react-native'
import React from 'react'
import indexStyle from '../indexStyle'
import { useNavigation } from '@react-navigation/native'
import homeStyles from './homeStyle'
import { greenOld } from '../../components/color'
import AntIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'
import OcticonsIcon from 'react-native-vector-icons/Octicons'
import { iconMedium } from '../../components/iconSize'

const HomeScreen = () => {
  const navigations: any = useNavigation();

  return (
    <SafeAreaView style={indexStyle.container}>
      <StatusBar barStyle="default" />
      <View style={homeStyles.header}> 
          <Image source={require("../../assets/fontMuslim.png")} resizeMode="contain" style={homeStyles.image}/>
      </View>
      <ScrollView style={homeStyles.scrollView} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={homeStyles.touchableOpacity} onPress={() => navigations.navigate("TenyMialoha")}>
          <FontAwesomeIcons name="first-order" color={greenOld} size={iconMedium} />
          <Text style={homeStyles.textContent}>Teny mialoha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.touchableOpacity} onPress={() => navigations.navigate("TontoloSilamo")}>
          <EntypoIcon name="documents" color={greenOld} size={iconMedium} />
          <Text style={homeStyles.textContent}>Manodidina ny 30 androm-bavaka ho an'ny tontolo Silamo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.touchableOpacity} onPress={() => navigations.navigate("FombaFivavaka")}>
          <OcticonsIcon name="question" color={greenOld} size={iconMedium} />
          <Text style={homeStyles.textContent}>Ahoana no tokony ho fivavaka ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.touchableOpacity} onPress={() => navigations.navigate("30Days")}>
          <EntypoIcon name="calendar" color={greenOld} size={iconMedium} />
          <Text style={homeStyles.textContent}>Ny 30 androm-bavaka</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.touchableOpacity} onPress={() => navigations.navigate("Eto")}>
          <AntIcon name="pushpino" color={greenOld} size={iconMedium} />
          <Text style={homeStyles.textContent}>Eto, any ary na aiza na aiza !</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.touchableOpacity} onPress={() => navigations.navigate("Fanazavana")}>
          <AntIcon name="infocirlceo" color={greenOld} size={iconMedium} />
          <Text style={homeStyles.textContent}>Fanazavana fanampiny na teny avy aminao :</Text>
        </TouchableOpacity>
        <Pressable onPress={() => navigations.navigate("www")}>
          <Text style={homeStyles.link}>www.pray30days.org</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen