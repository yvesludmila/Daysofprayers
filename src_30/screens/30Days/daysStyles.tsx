import { StyleSheet, Dimensions } from "react-native";
import { black, gray, grayOld, greenOld, white } from "../../components/color";
import { fontSizeLarge, fontSizeMedium, fontSizeSmall } from "../../components/fontSize";

const { height, width } = Dimensions.get('window')
const daysStyles = StyleSheet.create({
    header: {
        backgroundColor: greenOld,
        paddingVertical: "3%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: "2%"
    },
    rowHeader: {
        flexDirection: "row",
        gap: 2,
        alignItems: 'center'
    },
    headerTitle: {
        textAlign: "left",
        fontSize: fontSizeLarge,
        fontWeight: "600",
        color: white
    },
    textInput: {
        backgroundColor: white,
        width: width * 0.22,
        borderRadius: 5,
        paddingHorizontal: 5,
        color: black,
        fontSize: fontSizeMedium,
        paddingVertical: "1%"
    },
    touchableOpacity: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.01,
        margin: "2%",
        alignSelf: "center",
        backgroundColor: white,
        borderRadius: 10,
        elevation: 1
    },
    viewDate: {
        position: "absolute",
        top: "1%",
        right:"1%",
        backgroundColor: gray,
        paddingHorizontal: 5,
        borderRadius: 4,
        opacity: 0.5
    },
    textDate: {
        fontSize: width * 0.02,
        color: black
    },
    id: {
        color: white,
        fontSize: fontSizeSmall,
        fontWeight: "600",
        textAlign: "center"
    },
    viewGreen: {
        backgroundColor: greenOld,
        height: height * 0.1,
        paddingHorizontal: "3%",
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,  
    },
    viewWhite: {
        backgroundColor: white,
        height: height * 0.1,
        width: "85%",
        justifyContent: "center",
        paddingHorizontal: "2%",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,  
    },
    title: {
        textAlign: "left",
        fontSize: fontSizeSmall,
        fontWeight: "600",
        color: black
    },
    paragraph: {
        fontSize: fontSizeMedium,
        textAlign: "justify",
        color: black,
        fontWeight: "400",
        paddingHorizontal: 5
    },
    scrollView: {
        paddingHorizontal: "1%",
        marginBottom: 0
    },
    touchablePray: {
        backgroundColor: greenOld,
        marginVertical: 10,
        padding: "2%",
        width: "20%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
        marginLeft: "2%"
    },
    viewRond: {
        marginTop: 10,
        backgroundColor: grayOld,
        padding: "2%",
        borderRadius: 10,
        marginBottom: "2%",
        // borderWidth: 0.2,
        // borderColor: greenYoung,
        elevation: 0.5
    },
    coran: {
        marginTop: "2%",
        fontSize: fontSizeMedium,
        color: greenOld,
        textAlign: "justify"
    },
    verse: {
        fontSize: fontSizeMedium,
        color: "red",
        alignSelf: "center"
    }
})

export default daysStyles;