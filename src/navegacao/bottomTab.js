import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../telas/dashboard';
import Gestao from '../telas/gestao';
import Notas from '../telas/notas';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Notas" component={Notas} />
      <Tab.Screen name="Gestao" component={Gestao} />
    </Tab.Navigator>
  );
}