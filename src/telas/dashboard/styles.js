import { Label } from "@react-navigation/elements";
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

        // Headers principais.
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


        // Cards.
        card: {
            backgroundColor: '#FFF',
            borderRadius: 12,
            borderColor: '#E2E8F0',
            borderWidth: RFPercentage(0.1),
            padding: RFPercentage(2),
            marginTop: RFPercentage(2),
            marginBottom: RFPercentage(2),

            elevation: 3, //Android.
            shadowColor: '#000', //iOS
            shadowOpacity: 0.1,
            shadowRadius: 4
        },

        divisor: {
            height: RFPercentage(0.2),
            width: '100%',
            backgroundColor: '#E2E8F0',
            marginVertical: RFPercentage(1)
        },

        cardTitulo: {
            fontSize: RFPercentage(2.2),
            fontWeight: 'bold',
            marginBottom: RFPercentage(1),
            color: '#333',
        },

        cardTexto: {
            fontSize: RFPercentage(2),
            fontWeight: '500',
            color: '#777',
            marginTop: RFPercentage(1),
            marginBottom: RFPercentage(2),
        },


        // Filtro.
        label: {
            fontSize: RFPercentage(2),
            fontWeight: '500',
            marginBottom: RFPercentage(0.5),
            color: '#555',
        },

        select: {
            borderWidth: RFPercentage(0.17),
            borderColor: '#E2E8F0',
            borderRadius: 8,
            marginBottom: RFPercentage(1.5),
            backgroundColor: '#FFF',
        },

        selectTxt: {
            padding: RFPercentage(1),
            fontWeight: 'medium',
            // padding: 10,
            fontSize: RFPercentage(1.75),
            color: '#777',
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