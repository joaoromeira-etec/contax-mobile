import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Dashboard from '../telas/dashboard';
import Gestao from '../telas/gestao';
import Notas from '../telas/notas';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#0cbddd', // Ciano da CONTAX
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { 
          height: 65, 
          paddingBottom: 10,
          paddingTop: 5,
          backgroundColor: '#FFF',
          borderTopWidth: 1,
          borderTopColor: '#EEE'
        },
        // Esta é a função que define o ícone baseado no nome da rota
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'home';
          } else if (route.name === 'Notas') {
            iconName = 'description';
          } /*else if (route.name === 'gestao') {
            iconName = 'settings';
          }*/

          // Retorna o componente de ícone do Google
          return <MaterialIcons name={iconName} size={26} color={color} />;
        },
      })}
      >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Notas" component={Notas} />
      {/* <Tab.Screen name="Gestao" component={Gestao} /> */}
    </Tab.Navigator>
  );
}  