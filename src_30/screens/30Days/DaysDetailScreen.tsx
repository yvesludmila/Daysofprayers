import { View, Text, ScrollView, TouchableOpacity, LayoutAnimation, Platform, UIManager, FlatList } from 'react-native'
import React, { useState } from 'react'
import indexStyle from '../indexStyle';
import { data } from '../../assets/data';
import daysStyles from './daysStyles';
import { useRoute } from '@react-navigation/native';
import { white } from '../../components/color';
import { iconMedium } from '../../components/iconSize';
import EntypoIcon from "react-native-vector-icons/Entypo"

if(Platform.OS === 'android'){
  if(UIManager.setLayoutAnimationEnabledExperimental){
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

type ParamsRoute = {
    id: number;
    title: string;
    date: string; 
    content: string;
    coran: string;
    verse: string;
    pray: string;
}
const DaysDetailScreen = ({navigation}: any) => {
    const route: any = useRoute();
    const paramsRoute = route.params as ParamsRoute;
    const { id, title, date, content, coran, verse, pray} = paramsRoute;

    const [ open, setOpen ] = useState(false)
    const onPress = () => {
        LayoutAnimation.easeInEaseOut();
        setOpen(!open)
    }

  return (
    <View style={indexStyle.container}>
      <View style={daysStyles.header}>
        <TouchableOpacity style={daysStyles.rowHeader} onPress={() => navigation.goBack()}>
          <EntypoIcon name="chevron-left" color={white} size={iconMedium} />
          <Text style={daysStyles.headerTitle}>{title}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={daysStyles.scrollView}>
       {content.split('\n').map((line, lineIndex) => (
            <Text  key={lineIndex} style={daysStyles.paragraph}>{line}</Text>
        ))}
        {/* <TouchableOpacity onPress={() => onPress()} style={daysStyles.touchablePray}>
            <Text style={daysStyles.id}>Vavaka</Text>
        </TouchableOpacity> */}
        {/* { open &&  */}
        <View style={daysStyles.viewRond}>
          <Text style={daysStyles.paragraph}>MIVAVAHA ISIKA</Text>
            {pray.split('\n').map((line, lineIndex) => (
                <Text  key={lineIndex} style={daysStyles.paragraph}>{line}</Text>
            ))}
            <Text style={daysStyles.coran}>{coran}</Text>
            <Text style={daysStyles.verse}>{verse}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default DaysDetailScreen;

