import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import indexStyle from '../indexStyle'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { greenOld } from '../../components/color'
import { iconMedium } from '../../components/iconSize'
import { tenyMialohaStyles } from '../TenyMialoha/tenyMialohaStyles'
import daysStyles from '../30Days/daysStyles'

const EtoScreen = ({ navigation}: any) => {
  return (
    <View style={indexStyle.container}>
      <TouchableOpacity style={tenyMialohaStyles.touchableIcon} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color={greenOld} size={iconMedium} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={tenyMialohaStyles.scrollView}>
        <Text style={tenyMialohaStyles.titleGreen}>ETO, ANY ARY NA AIZA NA AIZA!</Text>
        <Text style={tenyMialohaStyles.paragraph}>
          “Koa mananatra voalohany indrindra aho mba hatao izay fangatahana, fivavahana, fifonana, fisaorana, ho an’ny olona rehetra,
          ho an’ny mpanjaka mbamin’izay rehetra manana fahefana, mba hiainantsika miadana sy mandry fahizay amin’ny toe-panahy
          araka an’Andriamanitra sy ny fahamaotinana rehetra. Izany no tsara ka ankasitrahana eo imason’Andriamanitra,
          Mpamonjy antsika, Izay tia ny olona rehetra hovonjena ka ho tonga amin’ny fahalalana ny marina. Fa iray no Andriamanitra,
          ary iray no Mpanalalana amin’Andriamanitra sy ny olona, dia Kristy Jesosy, Izay olona, sady nanolotra ny tenany ho avotra
          hisolo ny olona rehetra, dia zavatra ho fitory amin’izao androny izao. Mba hanao izany no nanendrena ahy ho mpitory
          sy Apostoly (milaza ny marina aho, fa tsy mandainga), ho mpampianatra ny jentilisa amin’ny finoana sy ny fahamarinana. .”
          <Text style={daysStyles.verse}>1 Timoty 2:1-7</Text>
        </Text>
        <Text style={tenyMialohaStyles.titleGreen}>AHOANA NO ATAO MBA HAHARETANA AMIN’NY FIVAVAHANA?</Text>
        <Text style={tenyMialohaStyles.paragraph}>• Ento am-bavaka ny mpino silamo manodidina anao.</Text>
        <Text style={tenyMialohaStyles.paragraph}>• Mifandraisa amin’ireo Kristiana anivon’ny tontolo silamo
          ka fantaro izay tokony ho entinao am-bavaka.</Text>
        <Text style={tenyMialohaStyles.paragraph}>• Tsarovy am-bavala mandavantaona indrindra anaty
          fiaraha-mivavaka ny hivavaka ho an’ny silamo, entano koa
          ny hafa hanana anjara amin’ny 30 ANDROM-BAVAKA.</Text>

          <Text style={tenyMialohaStyles.titleGreen}>INONA NO TOKONY HO ENTINA AM-BAVAKA ?</Text>
          <Text style={tenyMialohaStyles.paragraph}>• Mivavaha ho an’ireo Mpitondra any amin’ny tany ahitana silamo
          maro an’isa mba hanjakan’ny fandriam-pahalemana sy ny
          fahafahana amin’ny tany feheziny</Text>
          <Text style={tenyMialohaStyles.paragraph}>• Ento am-bavaka ireo vondrona, foko, fikambanana silamo amin’ny
          faritra maro mba haharay ny Filazantsara ka hamaly ny antson’i Kristy.</Text>
          <Text style={tenyMialohaStyles.paragraph}>• Ento am-bavaka ny isam-batan’olona, ny ankohonana mba
          haharay ny fahasoavan’Kristy ka hahalala ny marina sy ho voavonjy</Text>
          <Text style={tenyMialohaStyles.hafatra}>Misaotra anao nivavaka ho an’ny Tontolo SILAMO namin’ity 2024 ITY</Text>
          <Text style={tenyMialohaStyles.paragraph}>“Manantena izahay fa hanjary hazoto hivavaka mandavan-taona ho an’ny firenena silamo ianao.”</Text>
      </ScrollView>
    </View>
  )
}

export default EtoScreen