import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import indexStyle from '../indexStyle'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { greenOld } from '../../components/color'
import { iconMedium } from '../../components/iconSize'
import { tenyMialohaStyles } from '../TenyMialoha/tenyMialohaStyles'
import daysStyles from '../30Days/daysStyles'
import homeStyles from '../Home/homeStyle'

const FombaFivavakaScreen = ({ navigation}: any) => {
  const data1 = ["• Algérie","• Afghanistan","• Azerbaïdjan","• Bosnie","• Cambodge","• Djbouti","• Egypte","• Éthiopie","• L’Europe","• Ghana","• Grèce","• Guinée","• Inde","• Indonésie"]
  const data2 = ["• L’Iran","• Jordan","• Kosovo","• Mauritanie","• Nigeria","• Norvège","• Pakistan","• Qatar","• Somalie","• Arabie","• Saoudite","• Tadjikistan","• Turkey","• Yémen"]
  return (
    <View style={indexStyle.container}>
      <TouchableOpacity style={tenyMialohaStyles.touchableIcon} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color={greenOld} size={iconMedium} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={tenyMialohaStyles.scrollView}>
        <Text style={tenyMialohaStyles.titleGreen}>Ahoana no tokony ho FIVAVAKA? </Text>
        <Text style={tenyMialohaStyles.paragraph}>
          • Mino isika fa Jesoa no Mpamonjy izao tontolo izao,
          mampihavana ny olona rehetra amin’Andriamanitra.
          <Text style={daysStyles.verse}>Jaona 14:6; Asan’ny Apostoly 4:12; 2Korintiana 5:18-19.</Text>
        </Text>
        <Text style={tenyMialohaStyles.paragraph}>
          • Ny olombelona tsirairay dia natao araka ny
          endrik’Andriamanitra, ary noho izany dia manana
          lanjany sy fahamendrehana tsy hay tombanana.
          <Text style={daysStyles.verse}>Genesisy 1:26-28.</Text>
        </Text>
        <Text style={tenyMialohaStyles.paragraph}>
          • Andriamanitra dia tia Silamo ary tsy tiany hisy ho
          very. 
        </Text>
        <Text style={daysStyles.verse}>1Timoty 2:4; 2Petera 3:9; Jaona 3:16</Text>
        <Text style={tenyMialohaStyles.paragraph}>
          • Amin’ny maha-mpanara-dia an’i Kristy antsika, dia
          mandray ny fampirisihan’i Jesoa mafy isika mba ho
          tia an’Andriamanitra sy ho tia ny mpiara-belona
          amintsika. Mpifanolo-bodirindrina amintsika ny
          Silamo, ary fomba iray hitiavantsika azy ireo ny vavaka
          fitahiana ho azy ireo sy ny fianakaviany ary ny fiaraha-
          monina. 
          <Text style={daysStyles.verse}>Matio 22:37-39</Text>
        </Text>
        <Text style={tenyMialohaStyles.paragraph}>
          • Mandidy antsika i Jesoa mba ho tia ny olona rehetra –
          eny fa na dia ireo izay mandratra antsika
          aza – ary koa hivavaka ho azy ireo. 
          <Text style={daysStyles.verse}>Matio 5:44</Text>
        </Text>
        <Text style={tenyMialohaStyles.paragraph}>
          • Ny fanelanelanana ataontsika ho an’ny Silamo dia
          mila atosiky ny fitiavana. Modely ho antsika i Jesoa,
          Izay tia antsika fony mbola mpanota isika, dia maty
          hamonjy antsika.
          <Text style={daysStyles.verse}>Romana 5:8</Text>
        </Text>
        <Text style={tenyMialohaStyles.paragraph}>
          • Rehefa mandray ny fitiavan’Andriamanitra antsika
          isika, dia omeny antsika ny fitiavany ny hafa rehetra
          ary ahafahantsika manatanteraka ilay didy lehibe dia
          ny ho tia an’Andriamanitra sy ho tia ny namantsika.
          Tsy antsoina hitsara, hatahotra, hankahala, na
          hifandray amin’ny Silamo amin’ny fomba rehetra
          mifanohitra amin’ny Fanjakan’Andriamanitra isika.
          Tsy maintsy mitia fotsiny isika, miaina araka izay
          nandidian’i Kristy antsika, mivavaka, ary matoky
          an’Andriamanitra amin’ny alalan’ny Fanahiny
          Masina mba hitondra ny olona ho eo Aminy ao amin’i
          Kristy. <Text style={daysStyles.verse}>Galatiana 5:22-23; Jaona 6:44; 12:32; 16:8;1Korintiana 13</Text>
        </Text>
        <Text style={tenyMialohaStyles.titleGreen}>MITONDRA ANTSIKA AIZA NY VAVAKA ATAONTSIKA?</Text>
        <View style={tenyMialohaStyles.viewGrid2}>
          <View>
            {data1.map((item, index) => {
              return(
                <Text key={index} style={tenyMialohaStyles.paragraph}>{item}</Text>
              )
            })}
          </View>
          <View>
            {data2.map((item, index) => {
              return(
                <Text key={index} style={tenyMialohaStyles.paragraph}>{item}</Text>
              )
            })}
          </View>
        </View>
        <Text style={tenyMialohaStyles.hafatra}>Enga anie ny vavaka ataonareo hotarihin’ny fitiavan’i Kristy,
sy ny fitaoman’ny Fanahy Masina, amin’ny fandraisanareo anjara
amin’ny 30 Androm-bavaka ho an’ny Tontolo Silamo amin’ity taona ity.</Text>
      </ScrollView>
    </View>
  )
}

export default FombaFivavakaScreen