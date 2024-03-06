import { StyleSheet, Dimensions } from "react-native";
import { black, greenOld, greenYoung, white } from "../../components/color";
import { fontSizeLarge, fontSizeMedium } from "../../components/fontSize";

const { width } = Dimensions.get('window')

export const tenyMialohaStyles = StyleSheet.create({
    touchableIcon: {
        marginVertical: "2%",
        marginLeft: "2%",
        borderRadius: 50,
        backgroundColor: white,
        width: width * 0.1,
        height: width * 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    viewGrid2: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titleGreen: {
        marginTop: "2%",
        color: greenOld,
        fontSize: fontSizeMedium,
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center"
    },
    scrollView: {
        paddingHorizontal: "3%"
    },
    paragraph: {
        fontSize: fontSizeMedium,
        textAlign: "justify",
        color: black
    },
    hafatra: {
        color: "purple",
        fontSize: fontSizeMedium,
        marginVertical: 10,
        fontWeight: "500",
        textAlign: "justify"
    },
})