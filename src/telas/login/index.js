import { View, Text, TouchableOpacity } from 'react-native';

import {
  useNavigation,
  NavigationContainer,
} from '@react-navigation/native';


export default function Login(){

    const navigation = useNavigation();

    return(
        <View>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                <Text>Acessar Sistema</Text>
            </TouchableOpacity>
        </View>
    )

}