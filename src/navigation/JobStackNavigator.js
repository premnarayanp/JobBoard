import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { JobDetailScreen, JobScreen } from '../screens/index';

const Stack = createNativeStackNavigator();

export default function JobStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Job" component={JobScreen} />
            <Stack.Screen name="JobDetail" component={JobDetailScreen} />
        </Stack.Navigator>
    );
}
