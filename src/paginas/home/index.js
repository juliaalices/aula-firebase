import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import firebase from '../../firebaseConnection';
import { StyleSheet, Text, View, TouchableOpacity,Button} from 'react-native';




export default function Home(){
const [nome, setNome] = useState('');
const [nota1, setNota1] = useState();
const [nota2, setNota2] = useState();
const [nota3, setNota3] = useState();

useEffect(() =>{

    async function buscarNome(){

        await firebase.database().ref('Alunos/1/').on('value',(snapshot)=> {
            const data = snapshot.val();
            setNome(data.nome)
            setNota1(data.nota1)
            setNota2(data.nota2)
            setNota3(data.nota3)
        });

    }
    buscarNome();
},[])



return(

    <View style = {{alignItems:'center'}}>

      <Text>Nome do aluno: {nome} </Text>
      <Text>Primeira nota: {nota1} </Text>
      <Text>Segunda nota: {nota2} </Text>
      <Text>Terceira nota: {nota3} </Text>
            
    </View>


);


}

const styles = StyleSheet.create({

    botao:{
        backgroundColor:'green',
        width:'80%',
        alignItems:"center",
        marginTop:10
    }

}
)