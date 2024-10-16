import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'; 

const HouseholdInfor = () => {
    const navigation = useNavigation(); 

    const defaultNumberSentence = "1A. Just to make sure that you have completed listing, are there any other persons such as small childern or infants that you have not listed?";
    const defaultNamesSentence = "1B. Are there any other persons who may not be memebers of your family, such as domestic servants,lodgers, or friends who slept here on 16th June 2024 who have not been listed?";

    const [textInput, setTextInput] = useState("");
    const [textInput2, setTextInput2] = useState("");

    const handleDashboard = () => {
        (navigation as any).navigate("commentpage");
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Image
                    source={require('@/assets/images/OIP.jpeg')}
                    style={styles.Image}
                />

                <View style={styles.inputContainer}>
                    <Text style={styles.sentence}>{defaultNumberSentence}</Text>
                    <TextInput
                        style={styles.numberInput}
                        value={textInput}
                        onChangeText={setTextInput}
                        placeholder="Enter Yes or No"
                       
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.sentence}>{defaultNamesSentence}</Text>
                    <TextInput
                        style={[styles.input, styles.multilineInput]}
                        value={textInput2}
                        onChangeText={setTextInput2}
                        placeholder="Enter Yes or No"
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
        marginBottom: 50,
        marginTop:30,
        borderRadius: 10,
    },

    inputContainer: {
      
        alignItems: 'center',
        marginBottom: 120,
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
        marginBottom:-50,
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