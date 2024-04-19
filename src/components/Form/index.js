import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ResultImc from '../ResultImc/'

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('preencha o peso e a altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2));
    }

    function validationImc() {
        if(weight != null && height != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc('Seu IMC é igual:');
            setTextButton('Calcular Novemente');
            return;
        }

        setImc(null);
        setTextButton('Calcular');
        setMessageImc('preencha o peso e a altura');
    }

    return(
        <View>
            <View>
                <Text>Altura (m)</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    keyboardType='numeric'
                    placeholder='ex.: 1.75'
                    />
                
                <Text>Peso (kg)</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='ex.: 65'
                    keyboardType='numeric'
                />

                <Button 
                    title={textButton}
                    onPress={() => {validationImc()}}
                />
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}