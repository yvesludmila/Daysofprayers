import { View, Text, ScrollView, TouchableOpacity, LayoutAnimation, Platform, UIManager, FlatList, TextInput } from 'react-native'
import React, { useMemo, useState } from 'react'
import indexStyle from '../indexStyle';
import { data } from '../../assets/data';
import daysStyles from './daysStyles';
import { gray, white } from '../../components/color';
import { iconMedium } from '../../components/iconSize';
import EntypoIcon from 'react-native-vector-icons/Entypo'

if(Platform.OS === 'android'){
  if(UIManager.setLayoutAnimationEnabledExperimental){
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Days30Screen = ({navigation}: any) => {
  const [ searchValue, setSearchValue ] = useState('');

  const filterItems = useMemo(() => {
    if (!data) {
      return [];
    }
    return data.filter(
      (item) =>
        item?.id.toString().includes(searchValue.toLowerCase())
    );
  }, [searchValue, data]);

  const  Item = ({item}: any) => {
    return(
      <TouchableOpacity 
        onPress={() => navigation.navigate('DaysDetail', {
          id: item.id,
          title: item.title,
          date: item.date,
          content: item.content,
          coran: item.coran,
          verse: item.verse,
          pray: item.pray
        })} 
        style={daysStyles.touchableOpacity}
      >
        <View style={daysStyles.viewGreen}>
          <Text style={daysStyles.id}>Andro</Text>
          <Text style={daysStyles.id}>{item.id}</Text>
        </View>
        <View style={daysStyles.viewWhite}>
          <Text style={daysStyles.title}>{item.title}</Text>
        </View>
        <View style={daysStyles.viewDate}>
          <Text style={daysStyles.textDate}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={indexStyle.container}>
      <View style={daysStyles.header}>
        <TouchableOpacity style={daysStyles.rowHeader} onPress={() => navigation.goBack()}>
          <EntypoIcon name="chevron-left" color={white} size={iconMedium} />
          <Text style={daysStyles.headerTitle}>Ny 30 Andrombavaka</Text>
        </TouchableOpacity>
        <View>
          <TextInput
            placeholder='Andro'
            placeholderTextColor={gray}
            value={searchValue}
            onChangeText={(text: string) => setSearchValue(text)}
            style={daysStyles.textInput}
            keyboardType='numeric'
          />
        </View>
      </View>
      {
      filterItems.length != 0 ? <FlatList
        data={filterItems}
        renderItem={Item}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical
        keyExtractor={(i: { id: any }) => i.id}
      />: 
      <Text style={daysStyles.title}>Tsy misy andro hita</Text>}
    </View>
  )
}

export default Days30Screen;
