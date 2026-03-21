import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
                <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                    <Text style={styles.txt}>Acessar Sistema</Text>
                </TouchableOpacity>
            </View>


    )
}