import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'; 

const HouseholdInfor = () => {
    const navigation = useNavigation(); 

    const defaultNumberSentence = "A. How many people (including visitors) slept here on the night of Sunday 16th June 2024?";
    const defaultNamesSentence = "B. What are the names of each person (including visitors) who slept here?";

    const [textInput, setTextInput] = useState("");
    const [namesInput, setNamesInput] = useState("");

    const handleDashboard = () => {
        (navigation as any).navigate("dashboard");
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Image
                    source={require('@/assets/images/OIP.jpeg')}
                    style={styles.Image}
                />

                <Text style={styles.header}>A. HOUSEHOLD INFORMATION</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.sentence}>{defaultNumberSentence}</Text>
                    <TextInput
                        style={styles.numberInput}
                        value={textInput}
                        onChangeText={setNamesInput}
                        placeholder="Enter number"
                        keyboardType="numeric" // Only numeric input
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.sentence}>{defaultNamesSentence}</Text>
                    <TextInput
                        style={[styles.input, styles.multilineInput]}
                        value={namesInput}
                        onChangeText={setNamesInput}
                        placeholderTextColor="#888"
                        multiline={true}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleDashboard}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
            </View>           
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#87CEEB",
        justifyContent: "center",
    },
    Image: {
        width: 300,
        height: 230,
        alignSelf:"center",
        marginBottom: 20,
        marginTop:-10,
        borderRadius: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#00008B",
        textAlign: "center",
        marginBottom: 30,
    },
    inputContainer: {
      
        alignItems: 'center',
        marginBottom: 100,
    },
    sentence: {
        flex: 1,
        fontSize: 16,
        color: "#000",
        marginRight: 10,
    },
    numberInput: {
        height: 50,
        width: 150,
        marginBottom:-100,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: -11,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        textAlign: "center", // Center the text in the input
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    multilineInput: {
        height: 50, // increased height to fit longer text
        width:150,
        marginBottom:-20,
        textAlignVertical: 'center', // ensures text starts at the top
    },
    button: {
        backgroundColor: "#FFDF00",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
    },
});

export default HouseholdInfor;
