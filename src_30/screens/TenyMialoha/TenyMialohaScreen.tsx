import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import indexStyle from '../indexStyle'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { greenOld, greenYoung } from '../../components/color'
import { iconMedium } from '../../components/iconSize'
import { tenyMialohaStyles } from './tenyMialohaStyles'

const TenyMialohaScreen = ({ navigation}: any) => {
  return (
    <View style={indexStyle.container}>
      <TouchableOpacity style={tenyMialohaStyles.touchableIcon} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color={greenOld} size={iconMedium} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={tenyMialohaStyles.scrollView}>
        <Text style={tenyMialohaStyles.titleGreen}>Tongasoa eto amin’ny andiany 2024 amin’ny 30 ANDROM-BAVAKA HIVAVAHANA ho an’ny SILAMO MANERAN-TANY</Text>
        <Text style={tenyMialohaStyles.paragraph}>
          Tsy misy afaka mandà fa miova haingana izao tontolo izao. 
          Ny teknolojia vaovao amin’ny fifandraisana, ny fitaterana ary ny siansa dia tsy mitsahatra manova ny fomba fifandraisan’ny olombelona, ny toerana ahafahany miaina sy miasa, ary ny fomba ianarany sy ny fampifanarahana. 
          Ny zaza teraka tao anatin’ny folo taona farany dia tsy nahalala ny fiainana tsy misy solosaina sy finday. 
          Ho an’ny maro dia azo raisina ny safidy hianatra sy hiasa « à distance ». Ny fitsangatsanganana any amin’ny firenena lavitra dia raisina ho azo antoka, miaraka amin’ny fahafahana miresaka amin’ny olona rehetra, na aiza na aiza eto ambonin’ny tany, amin’ny fotoana rehetra.
          Mbola tsy nisy toy izany ny olombelona nivezivezy sy nifandray.
        </Text>
        <Text style={tenyMialohaStyles.paragraph}>
          Raha nanomboka 30 taona mahery lasa izay io torolalana momba ny vavaka io,
          dia nitarika ny mpamaky hivavaka ho an’ny Silamo izay tany an-tanindrazany
          ny ankamaroany. Amin’izao fotoana izao anefa, ny vondrom-piarahamonina
          Silamo mitombo avy amin’ny foko rehetra, dia hita na aiza na aiza ivelan’ny
          toerana niaviany nentim-paharazana toy ny mpifindra monina, mpitsoa-
          ponenana, mpiasa mpifindra monina ary mpianatra - avy amin’ny firenena
          rehetra mankany amin’ny firenena rehetra. - any amin’ny toerana nahaterahany
          manan-tantara, ao amin’ny vondrom-piarahamonina mpifindra monina,
          amin’ny dia mampidi-doza mankany amin’ny toerana vaovao, ary amin’ny
          vazan-tany rehetra. Mijanona ao amin’ny toerana nahaterahany ara-kolontsaina
          ny Silamo,ary rehefa miova ny manodidina azy ireo dia mifindra any amin’ny
          tanàna vaovao na kaontinanta vaovao, amin’ny alalan’ny safidy na amin’ny
          filàna - ny dingan’ny fianarana miaina ny fiovana dia manahirana sy sarotra. Ny
          Kristiana dia tokony ho isan’ ireo mandray sy manohana ny hafa - na dia anaty
          kolontsaina izay maha-vahiny azy aza, manaraka ny didin’i Kristy hoe: “Tiava ny
          namanao tahaka ny tenanao” (Lioka 10:27).
        </Text>
        <Text style={tenyMialohaStyles.paragraph}>   
          Ity toro-lalana am-bavaka ity dia hanampy anao hivavaka ho an’ny Silamo
          eto, any ary na aiza na aiza, ary hanentana anao hivavaka indrindra ho an’ireo
          vondrom-piarahamonina Silamo akaiky anao, hijoroanao ho fahazavana sy
          fitahiana ho azy ireo, ho voninahitr’Andriamanitra.
        </Text>
        <Text style={tenyMialohaStyles.titleGreen}>
          Amin’ity taona ity, ny 30 Andron’ny Vavaka ho an’ny Tontolo Silamo
          dia mijery ireo vondrom-piarahamonina Silamo eto, any ary na aiza na aiza
        </Text>
      </ScrollView>
    </View>
  )
}

export default TenyMialohaScreen