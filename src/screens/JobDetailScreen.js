import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function JobDetailScreen({ route, navigation }) {
    const { job } = route.params;
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        checkIfBookmarked();
    }, []);

    // Function to check if the job is already bookmarked
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

    // Function to toggle the bookmark status
    const toggleBookmark = async () => {
        try {
            let bookmarks = await AsyncStorage.getItem('bookmarks');
            bookmarks = bookmarks ? JSON.parse(bookmarks) : [];

            if (isBookmarked) {
                // Remove the bookmark if it exists
                bookmarks = bookmarks.filter(bookmarkedJob => bookmarkedJob.id !== job.id);
                Alert.alert('Bookmark removed!');
            } else {
                // Add the bookmark if it doesn't exist
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
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 18 }}>Title: {job.title}</Text>
            <Text>Place: {job.primary_details ? job.primary_details.Place : "Not mentioned"}</Text>
            <Text>Salary: {job.primary_details ? job.primary_details.Salary : "Not mentioned"}</Text>
            <Text>Phone Number: {job.whatsapp_no}</Text>
            <Button
                title={isBookmarked ? "Remove Bookmark" : "Bookmark Job"}
                onPress={toggleBookmark}
            />
        </View>
    );
}
