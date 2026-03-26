import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import {
  useNavigation,
  NavigationContainer,
} from '@react-navigation/native';


export default function Login(){

    const navigation = useNavigation();

    return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Login</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyTabs')}>
                    <Text style={styles.buttontxt}>Entrar como</Text>
                </TouchableOpacity>,
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyTabs')}>
                    <Text style={styles.buttontxt}>Entrar no sistema</Text>
                </TouchableOpacity>
            </View>


    )
}