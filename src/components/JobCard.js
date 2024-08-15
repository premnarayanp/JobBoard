import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

export default JobCard = ({ item, navigation }) => (
    <TouchableOpacity
        onPress={() => navigation.navigate('JobDetailScreen', { job: item })}
        style={styles.jobCard}>

        {item.title && (
            <View style={styles.cardShadow}>
                <Text style={styles.cardTitle}>Title: {item.title}</Text>
                <Text style={styles.cardText}>Place: {item.primary_details ? item.primary_details.Place : "Not mentioned"}</Text>
                <Text style={styles.cardText}>Salary: {item.primary_details ? item.primary_details.Salary : "Not mentioned"}</Text>
                <Text style={styles.cardText}>Phone Number: {item.whatsapp_no}</Text>
            </View>
        )}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    jobCard: {
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    cardShadow: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
        borderBottomWidth: 2,
        borderBottomColor: '#4CAF50', // Green color for the bottom margin
        paddingBottom: 4,
    },
    cardText: {
        fontSize: 16,
        marginBottom: 8,
        color: '#555',
        borderBottomWidth: 2,
        borderBottomColor: '#4CAF50', // Green color for the bottom margin
        paddingBottom: 4,
    },
});
