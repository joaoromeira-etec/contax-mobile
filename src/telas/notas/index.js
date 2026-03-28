import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

export default function Notas(){

    return(
     <ScrollView style={styles.container}>

            <View style={styles.header}>
                <View>
                    <Text style={styles.titulo}>CONTAX</Text>
                    <Text style={styles.subtitulo}>ME & MEI · Notas Fiscais</Text>
                </View>
            </View>

     </ScrollView>
    )

}