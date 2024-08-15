
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { JobCard } from '../components/index';

const BookmarkJobScreen = ({ navigation }) => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const fetchBookmarks = async () => {
            const storedBookmarks = await AsyncStorage.getItem('bookmarks');
            setBookmarks(storedBookmarks ? JSON.parse(storedBookmarks) : []);
        };
        fetchBookmarks();
    }, []);



    return (
        <View style={{ flex: 1, padding: 10 }}>
            <FlatList
                data={bookmarks}
                renderItem={({ item }) => <JobCard item={item} navigation={navigation} />}
                keyExtractor={(item) => item.id + item.type}
                onEndReached={() => setPage(1)}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
};

export default BookmarkJobScreen;
