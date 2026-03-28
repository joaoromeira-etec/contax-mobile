import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

export default function Dashboard(){

    return(
     <ScrollView style={styles.container}>

        {/* HEADER DO TITULO */}
        <View style={styles.header}>
            <View>
                <Text style={styles.titulo}>CONTAX</Text>
                <Text style={styles.subtitulo}>ME & MEI · Notas Fiscais</Text>
            </View>

            <Text style={styles.visualizador}>Visualizador</Text>
         </View>


         {/* Card -- Visão Geral */}
         <View style={styles.card}>
            <Text style={styles.cardTitulo}>
                Visão Geral — Janeiro de 2026
            </Text>

            <View style={styles.divisor}/>

            <Text style={styles.cardTexto}>
                Nenhuma nota fiscal no período.
            </Text>
         </View>

        <View style={styles.card}>
            <Text style={styles.cardTitulo}>Filtro</Text>
            <View style={styles.divisor}/>
            <Text style={styles.label}>Mês</Text>

            <View style={styles.select}>
                <Text style={styles.selectTxt}>
                  Janeiro de 2026
                </Text>
            </View>
        </View>

     </ScrollView>
    )

}