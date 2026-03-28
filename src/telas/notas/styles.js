import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FullWindowOverlay } from "react-native-screens";


const styles=StyleSheet.create(
    {  
        container:{
            flex: 1,
            backgroundColor: '#F5F7F9',
            padding: RFPercentage(2),
        },

        //Headers principais.
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 1
        },

        titulo: {
            fontSize: RFPercentage(3),
            color: '#48ACBB',
            fontWeight: 'bold',
        },
        
        subtitulo: {
            fontSize: RFPercentage(1.8),
            color: '#777',
        },

        visualizador: {
            fontSize: RFPercentage(1.6),
            color: '#777'
        },
        
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