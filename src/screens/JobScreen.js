import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { JobCard } from '../components/index';

export default function JobScreen({ navigation }) {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchJobs();
    }, [page]);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
            const data = await response.json();
            //console.log("data=", data.results);
            setJobs(prevJobs => [...prevJobs, ...data.results]);
        } catch (err) {
            setError('Failed to load jobs');
        } finally {
            setLoading(false);
        }
    };
    return (
        <View style={{ flex: 1, padding: 10 }}>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            {!loading && !error && (
                <FlatList
                    data={jobs}
                    renderItem={JobCard}
                    keyExtractor={(item) => item.id + item.type}
                    onEndReached={() => setPage(page + 1)}
                    onEndReachedThreshold={0.5}
                />
            )}
        </View>
    );

}