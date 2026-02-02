import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    formContext: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        width: '100%',
        paddingHorizontal: 15
    },
    formLabel: {
        color: '#000',
        fontSize: 18,
        //paddingLeft: 20
    },
    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: '#fff'
    },
    errorMessage: {
        fontSize: 12,
        color: '#ff00437a',
        fontWeight: 500
    },
    labelAndError: {
        margin: 'auto',
        marginLeft: 20,
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    exibitionResultImc: {
        width: '100%',
        height: '50%'
    },
    listImcs: {
        width: '90%',
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    listContent: {
        marginBottom: 10,
        backgroundColor: '#d4d4d47a',
        width: '100%',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listContentLeft: {
        padding: 15,
        width: 80,
        borderRightWidth: 1,
        borderRightColor: '#f8f8f8',
    },
    listContentLeftText: {
        fontSize: 12,
        fontWeight: 600,
        color: '#ff00437a',
        textAlign: 'center'
    },
    listContentCenter: {
        padding: 25,
    },
    listContentCenterText: {
        fontSize: 18,
        fontWeight: 800,
        color: '#ff0043',
        textAlign: 'center'
    },
    listContentRight: {
        padding: 15,
        width: 80,
        display: 'flex',
        borderLeftWidth: 1,
        borderLeftColor: '#f8f8f8',
    },
    listContentRightText: {
        fontSize: 12,
        fontWeight: 600,
        color: '#1877f2',
        textAlign: 'center'
    }
});

export default styles;