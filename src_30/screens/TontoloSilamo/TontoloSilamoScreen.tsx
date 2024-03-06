import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import indexStyle from '../indexStyle'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { greenOld, greenYoung } from '../../components/color'
import { iconMedium } from '../../components/iconSize'
import { tenyMialohaStyles } from '../TenyMialoha/tenyMialohaStyles'
import daysStyles from '../30Days/daysStyles'

const TontoloSilamoScreen = ({ navigation}: any) => {
  return (
    <View style={indexStyle.container}>
      <TouchableOpacity style={tenyMialohaStyles.touchableIcon} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color={greenOld} size={iconMedium} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={tenyMialohaStyles.scrollView}>
        <Text style={tenyMialohaStyles.titleGreen}>Manodidina NY 30 ANDROM-BAVAKA ho an’ny TONTOLO SILAMO.</Text>
        <Text style={tenyMialohaStyles.paragraph}>
          Tamin’ny Aprily 1992, dia nisy antokona Kristiana avy amin’ny fikambanana misionera maneran-tany nivory teo
          akaikin’ny Ranomasina Mena any Moyen-Orient. Vao nifarana ny Ramadany. Niara-nivavaka ireo lehilahy sy
          vehivavy ireo, nahatsapa fa Andriamanitra dia nitarika azy ireo handinika bebe kokoa ny Fitiavany ny tontolo
          Silamo. Ireo izay nandray anjara tamin’ny fivoriana dia manao ny fanambarana ho hafatra mazava, miantso azy
          ireo handray ny tontolo Silamo amin’ny fahasamihafàny rehetra, mijery ny Silamo tahaka ny fijerin’Andriamanitra
          - amin’ny maha zavaboariny malalany. Nanolo-tena hankatò io teny io izy ireo, nanomboka tamin’ny fotoam-
          bavaka sy fifadian-kanina nandritra ny 30 androm-bavaka ho an’ny tontolo Silamo.
          Nanomboka teo, isaky ny nitrangan’ny Ramadany, dia nisy toro-lalana momba ny vavaka natao hanampiana ny
          Kristiana hivavaka ho an’ny Silamo mandritra ny 30 andro fifadian-kanina. Ny toro-lalana dia mifantoka amin’ny
          fitahiana ny Silamo sy ny fanampiana ny Kristiana hanana fahatakarana bebe kokoa sy fitiavana ny Silamo
          manerana izao tontolo izao. Ny kristiana avy amin’ny firenena maro dia mandray anjara amin’ny famokarana,
          mizara ny filan’ny vondrom-piarahamonina Silamo eo an-toerana sy ny tantara mba hanentanana ny vavaka.
          Ireo mpaninjara any amin’ny firenena maro dia mandika sy mizara ilay toro-lalana amin’ny fiteny 40 mahery,
          mamorona hetsika fivavahana maneran-tany tsy mitovy amin’ny an’ny hafa izay amanetsiny maro no mandray
          anjara amin’ny vavaka isan-taona.
          Raha mampiasa an’io toro-lalana momba ny vavaka io ianao, dia fantatrao fa miara-miasa amintsika amin’ny alalan’ny
          vavaka Andriamanitra, ary mety hahita ny vokatry ny fifampizarana mahatoky natao tanatin’ny 30 taona mahery ianao.
          Ny fandraisanao anjara, ny vavaka ary ny fikatsahanao ny teny nozaraina 30 taona lasa izay dia nanova izao tontolo izao
          mandrakizay.
          « Ary izao no angatahiko, dia ny mbola hitomboan’ny fitiavanareo bebe kokoa amin’ny fahalalana tsara sy ny fahafantarana rehetra,
          mba hamantaranareo izay zavatra tsara indrindra, mba ho madio am-po sy tsy hanan-tsiny ho amin’ny andron’i Kristy ianareo, sady feno
          ny vokatry ny fahamarinana, izay avy amin’ny alalan’i Jesosa Kristy, ho voninahitra sy fiderana an’Andriamanitra. »
          <Text style={daysStyles.verse}>Filipiana 1:9-11</Text>
        </Text>
      </ScrollView>
    </View>
  )
}

export default TontoloSilamoScreen