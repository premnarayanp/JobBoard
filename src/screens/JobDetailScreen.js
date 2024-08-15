import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function JobDetailScreen({ route, navigation }) {
    const { job } = route.params;
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        checkIfBookmarked();
    }, []);

    const checkIfBookmarked = async () => {
        try {
            let bookmarks = await AsyncStorage.getItem('bookmarks');
            bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
            const jobIsBookmarked = bookmarks.some(bookmarkedJob => bookmarkedJob.id === job.id);
            setIsBookmarked(jobIsBookmarked);
        } catch (err) {
            console.error(err);
        }
    };

    const toggleBookmark = async () => {
        try {
            let bookmarks = await AsyncStorage.getItem('bookmarks');
            bookmarks = bookmarks ? JSON.parse(bookmarks) : [];

            if (isBookmarked) {
                bookmarks = bookmarks.filter(bookmarkedJob => bookmarkedJob.id !== job.id);
                Alert.alert('Bookmark removed!');
            } else {
                bookmarks.push(job);
                Alert.alert('Job bookmarked!');
            }

            await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            setIsBookmarked(!isBookmarked);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Title: {job.title}</Text>
            <Text style={styles.text}>Place: {job.primary_details ? job.primary_details.Place : "Not mentioned"}</Text>
            <Text style={styles.text}>Salary: {job.primary_details ? job.primary_details.Salary : "Not mentioned"}</Text>
            <Text style={styles.text}>Phone Number: {job.whatsapp_no}</Text>
            <Button
                title={isBookmarked ? "Remove Bookmark" : "Bookmark Job"}
                onPress={toggleBookmark}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
        borderBottomWidth: 2,
        borderBottomColor: '#4CAF50', // Green color for the bottom margin
        paddingBottom: 4,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: '#555',
        borderBottomWidth: 2,
        borderBottomColor: '#4CAF50', // Green color for the bottom margin
        paddingBottom: 4,
    },
});
