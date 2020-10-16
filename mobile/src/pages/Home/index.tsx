import React, { useEffect, useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { View, ImageBackground, Image, Text, StyleSheet, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

interface IBGEUFResponse {
  sigla: string;
}



const Home = () => {

   const [ufs, setUfs] = useState<string[]>([]);

   const navigation = useNavigation();

   // Desafio: Fazer a conexão com o IBGE para buscar as UFs e cities
   // usando o (react-native-picker-select) como select para mobile.
   useEffect(() => {
      api.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
         const ufInitials = response.data.map(uf => uf.sigla);
         setUfs(ufInitials);         
      })
   }, []);


   
   function handleNavigateToPoints() {
      navigation.navigate('Points');
   }

   return (
      <ImageBackground
         source={require('../../assets/home-background.png')}            
         style={styles.container}
         imageStyle={{ width: 274, height: 368 }}
      >
         <View style={styles.main}>
            <Image source={require('../../assets/logo.png')} />
            <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
            <Text style={styles.description}>Ajdudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
         </View>

         <View style={styles.footer}>
            
            <TextInput 
               style={styles.input} 
               placeholder="Digite a UF"
            />

            <TextInput 
               style={styles.input} 
               placeholder="Digite a cidade"
            />         
            
            {/*
               <RNPickerSelect 
                  placeholder={{ label: 'Selecione a UF...', value: null  }}                              
                  items={
                     [ {label: 'SC', value: 'SC'} ]
                  }
                  onValueChange={(value) => {console.log(value)}}
                  useNativeAndroidPickerStyle={false}
                  style={{ 
                     inputAndroid: {
                        height: 60,
                        backgroundColor: '#FFF',
                        borderRadius: 10,
                        marginBottom: 8,
                        paddingHorizontal: 24,
                        fontSize: 16,
                     },
                     iconContainer: {
                        top: 20,
                        right: 20
                     }
                  }}
                  Icon={() => {
                     return <Ionicons name="md-arrow-down" size={24} color="#322153" />;
                  }}
               />
            */}
            

            <RectButton style={styles.button} onPress={handleNavigateToPoints}>
               <View style={styles.buttonIcon}>
                  <Text>
                     <Icon name="arrow-right" color="#FFF" size={24} />
                  </Text>
               </View>
               <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
         </View>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f0f0f5'
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,    
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }  
});

export default Home;