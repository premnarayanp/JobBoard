import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { JobDetailScreen, JobScreen } from '../screens/index';

const Stack = createNativeStackNavigator();

export default function JobStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="JobScreen" component={JobScreen} />
            <Stack.Screen name="JobDetailScreen" component={JobDetailScreen} />
        </Stack.Navigator>
    );
}
