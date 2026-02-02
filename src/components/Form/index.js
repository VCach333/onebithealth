import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    Vibration,
    Keyboard,
    Pressable,
    FlatList
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
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        let weightFormat = weight.replace(',', '.')
        let heightFormat = height.replace(',', '.')
        let totalImc = (weightFormat / (heightFormat * heightFormat)).toFixed(2);
        let estado

        if(totalImc < 20) {
            estado = 'Baixo'
        
        } else if(totalImc < 23) {
            estado = 'Média'
        
        } else {
            estado = 'Alto'
        }

        setImcList((arr) => [...arr, {
            id: new Date().getTime(),
            imc: totalImc,
            height: heightFormat,
            weight: weightFormat,
            estado: estado
        }]);
        setImc(totalImc);
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
        } else {
            verificationImc()
            setImc(null);
            setTextButton('Calcular');
            setMessageImc('preencha o peso e a altura');
        }
    }

    return (

        <View style={styles.formContext}>
            {imc == null ?
                <Pressable style={styles.form} onPress={Keyboard.dismiss}>

                    <View style={styles.labelAndError}>
                        <Text style={styles.formLabel}>Altura</Text>
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        keyboardType='numeric'
                        placeholder='ex.: 1.75'
                    />

                    <View style={styles.labelAndError}>
                        <Text style={styles.formLabel}>Peso</Text>
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder='ex.: 65'
                        keyboardType='numeric'
                    />

                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        title={textButton}
                        onPress={() => { validationImc() }}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.exibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} />

                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        title={textButton}
                        onPress={() => { validationImc() }}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }

            <FlatList
                style={styles.listImcs}
                showsVerticalScrollIndicator={false}
                data={imcList.reverse()}
                renderItem={({ item }) => {

                    return (
                        <View style={styles.listContent}>

                            <View style={styles.listContentLeft}>
                                <View>
                                    <Text  style={styles.listContentLeftText}>{item.weight}</Text>
                                </View>
                                <View>
                                    <Text style={styles.listContentLeftText}>{item.height}</Text>
                                </View>
                            </View>

                            <View style={styles.listContentCenter}>
                                <Text style={styles.listContentCenterText}>{item.imc}</Text>
                            </View>

                            <View style={styles.listContentRight}>
                                <View>
                                    <Text style={styles.listContentRightText}>{item.estado}</Text>
                                </View>
                            </View>

                        </View>
                    );
                }}
                keyExtractor={(item) => { item.id }}
            >

            </FlatList>

        </View>
    );
}