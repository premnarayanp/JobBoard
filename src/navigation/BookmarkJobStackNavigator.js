import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { JobDetailScreen, BookmarkJobScreen } from '../screens/index';
const Stack = createNativeStackNavigator();

export default function BookmarkJobStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BookmarkJobScreen" component={BookmarkJobScreen} />
            <Stack.Screen name="JobDetailScreen" component={JobDetailScreen} />
        </Stack.Navigator>
    );
}