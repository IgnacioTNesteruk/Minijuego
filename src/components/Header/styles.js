import { StyleSheet } from "react-native";
import  colors  from "../../constants/colors";

const styles = StyleSheet.create({
    header:{
        backgroundColor: colors.primary,
        height: 90,
        paddingTop: 35,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: colors.white,
        fontSize: 30,
    }
});

export default styles;