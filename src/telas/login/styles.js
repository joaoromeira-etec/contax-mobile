import { StyleSheet } from "react-native";
import { FullWindowOverlay } from "react-native-screens";
//StyleSheet: API do React Native para definir estilos de forma otimizada
//import {RFPercentage} from "react-native-responsive-fontsize";
//RFPercentage: Biblioteca react-native-responsive-fontsize usada para definir tamanhos de fonte de forma responsiva, baseada na porcentagem do tamanho da tela
const styles=StyleSheet.create(
    {  
        container:{
            backgroundColor:'#fff',
            padding:8,
            flex:1, 
            //Ocupa todo o espaço disponível na tela 
            alignItems:'center',
            borderRadius:20
            //Deixa as bordas arredondadas.
            },

        titulo:{
            fontSize:30,
            color: '#48ACBB',
            fontWeight:'bold',
            marginTop:10,
            marginBottom:10,
            padding:8,
            width:'100%',
            height:80,
            textAlign:'center',
            textAlignVertical:'center',
            //somente no Android
            borderRadius:20},
        
        txt:{
            fontSize: 20
            //Define um tamanho de fonte responsivo(2.2% da altura da tela)
            },

        button:{
            padding: 10,
            backgroundColor:'#0091A5',
        },

        buttontxt:{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            marginHorizontal: '25%',
        },
        }
    );
export default styles;