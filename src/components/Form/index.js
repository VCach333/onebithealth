import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    Vibration,
    Keyboard,
    Pressable
} from 'react-native';

import ResultImc from './ResultImc'
import styles from './style'


export default function Form(props) {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('preencha o peso e a altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator() {
        let weightFormat = weight.replace(',', '.')
        let heightFormat = height.replace(',', '.')
        return setImc((weightFormat / (heightFormat * heightFormat)).toFixed(2));
    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage('obrigatório');
        }
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc('Seu IMC é igual:');
            setTextButton('Calcular Novamente');
            setErrorMessage(null);
            return;
        }

        verificationImc()
        setImc(null);
        setTextButton('Calcular');
        setMessageImc('preencha o peso e a altura');
    }

    return (
        
        <Pressable style={styles.formContext} onPress={Keyboard.dismiss}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    keyboardType='numeric'
                    placeholder='ex.: 1.75'
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='ex.: 65'
                    keyboardType='numeric'
                />

                {/* <Button 
                    title={textButton}
                    onPress={() => {validationImc()}}
                /> */}
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    title={textButton}
                    onPress={() => { validationImc() }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </Pressable>
    );
}