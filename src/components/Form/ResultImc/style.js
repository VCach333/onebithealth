import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    resultImc: {
        flex: 1,
        marginTop: 20,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
    },
    numberImc: {
        fontSize: 48,
        color: '#ff0043',
        fontWeight: 'bold',
    },
    information: {
        fontSize: 18,
        color: '#ff0043',
        fontWeight: 'bold',
    },
    shareButtonBox: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10
    },
    shareButton: {
        borderRadius: 50,
        backgroundColor: '#1877f2',
        padding: 5
    },
    shareButtonText: {
        color: '#fff',
        fontWeight: 500,
        letterSpacing: 1,
        paddingHorizontal: 15
    }
});

export default styles;