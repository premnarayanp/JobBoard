import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
export default JobCard = ({ item }) => (
    <TouchableOpacity
        onPress={() => navigation.navigate('JobDetailScreen', { job: item })}
        style={styles.jobCard}>

        {
            item.title &&
            <View style={styles.cardShadow}>
                <Text style={{ fontSize: 18 }}>Title:- {item.title}</Text>
                <Text>Place:- {item.primary_details ? item.primary_details.Place : "Not mentioned"}</Text>
                <Text>Salary:- {item.primary_details ? item.primary_details.Salary : "Not mentioned"}</Text>
                <Text>Phone Number:- {item.whatsapp_no}</Text>
            </View>
        }
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    jobCard: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },

    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }

});
