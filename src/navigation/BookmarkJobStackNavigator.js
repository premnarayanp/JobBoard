import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { JobDetailScreen, BookmarkJobScreen } from '../screens/index';
const Stack = createNativeStackNavigator();

export default function BookmarkJobStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Bookmark" component={BookmarkJobScreen} />
            <Stack.Screen name="BookmarkDetail" component={JobDetailScreen} />
        </Stack.Navigator>
    );
}