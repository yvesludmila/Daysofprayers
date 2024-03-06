import { StyleSheet, Dimensions } from "react-native";
import { black, gray, greenOld, greenWhite, greenYoung, white } from "../../components/color";
import { fontSizeLarge, fontSizeMedium, fontSizeSmall } from "../../components/fontSize";

const { width, height } = Dimensions.get('window');

const homeStyles = StyleSheet.create({
    header: {
        backgroundColor: gray,
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
    },
    image:{
        width: "100%",
        height: height * 0.3,
        borderRadius: 6
        // borderTopLeftRadius: 15,
        // borderTopRightRadius: 15
    },
    viewRond: {
        backgroundColor: greenOld,
        opacity: 0.8,
        width: "100%",
        padding: width * 0.01,
        borderRadius: 10,
        marginTop: 10
    },
    textTitle: {
        fontSize: fontSizeLarge,
        color: white,
        fontWeight: "bold",
        alignSelf: "flex-start",
        textAlign: "auto"
    },
    paragraphWhite: {
        color: white,
        fontSize: fontSizeMedium
    },
    scrollView: {
        alignContent: 'center',
        backgroundColor: gray,
    },
    touchableOpacity: {
        flexDirection: "row",
        width: "97%",
        height: height * 0.1,
        marginTop: "2%",
        borderWidth: 1,
        backgroundColor: white,
        borderColor: greenOld,
        justifyContent: "flex-start",
        borderRadius: 10,
        gap: width * 0.02,
        paddingHorizontal: '3%',
        alignSelf: "center",
        alignItems: "center",
    },
    textContent: {
        color: black,
        fontSize: fontSizeMedium,
        marginRight: "10%",
        fontWeight: "bold",
        textAlign: "left",
    },
    link: {
        fontSize: fontSizeMedium,
        color: "blue",
        alignSelf: 'center',
        marginTop: "2%",
        marginBottom: "4%"
    }
})

export default homeStyles;