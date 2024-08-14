
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookmarkJobStackNavigator from './BookmarkJobStackNavigator';
import JobStackNavigator from './JobStackNavigator';

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Job" component={JobStackNavigator} />
            <Tab.Screen name="Bookmark" component={BookmarkJobStackNavigator} />
        </Tab.Navigator>
    );
}