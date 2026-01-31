import React from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';
import styles from './style'

export default function ResultImc(props) {

    const onShare = async () => {

        const result = await Share.share({
            message: 'Eiii, meu IMC hoje bateu ' + props.resultImc
        });
    }

    return (
        <View style={styles.resultImc}>

            <View style={styles.shareButtonBox}>
                {
                    props.resultImc != null ?
                    <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                        <Text style={styles.shareButtonText}>Partilhar</Text>
                    </TouchableOpacity>
                    :
                    <View />
                }
            </View>

            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}