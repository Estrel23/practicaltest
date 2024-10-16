import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define route parameters for the HouseholdInfo screen
type HouseholdInfoParams = {
    province: string;
    district: string;
    localLevelGovernment: string;
    ward: string;
    censusUnit: string;
    censusUnitType: string;
    workloadNo: string;
    locality: string;
    section: string;
    lot: string;
    recordNo: string;
    pdNo: string;
    householdNo: string;
};

// Define navigation prop type
type NavigationProps = StackNavigationProp<{
    HouseholdInfo: HouseholdInfoParams;
}>;

const IndicativeInfo = () => {
    const navigation = useNavigation<NavigationProps>(); // Use navigation with types

    // State hooks for each input field
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [localLevelGovernment, setLocalLevelGovernment] = useState("");
    const [ward, setWard] = useState("");
    const [censusUnit, setCensusUnit] = useState("");
    const [censusUnitType, setCensusUnitType] = useState("");
    const [workloadNo, setWorkloadNo] = useState("");
    const [locality, setLocality] = useState("");
    const [section, setSection] = useState("");
    const [lot, setLot] = useState("");
    const [recordNo, setRecordNo] = useState("");
    const [pdNo, setPDNo] = useState("");
    const [householdNo, setHouseholdNo] = useState("");

    // Navigate to the HouseholdInfo page with collected data
    const handleNext = () => {
      // code to handle the browse action
      (navigation as any).navigate("householdInfor");
    };
  

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('@/assets/images/OIP.jpeg')}
                style={styles.image}
            />

            <Text style={styles.header}>BE PART OF PAPUA NEW GUINEA CITIZEN</Text>
            <Text style={styles.subheader}>
                Fill out this indicative information to get started.
            </Text>

            <Picker
                selectedValue={province}
                onValueChange={(itemValue) => setProvince(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Select Province" value="" />
                <Picker.Item label="Southern Highlands Province" value="southern_highlands" />
                <Picker.Item label="Western Highlands Province" value="western_highlands" />
                <Picker.Item label="Eastern Highlands Province" value="eastern_highlands" />
                <Picker.Item label="Enga Province" value="enga" />
                <Picker.Item label="Simbu Province" value="simbu" />
                <Picker.Item label="Hela Province" value="hela" />
                <Picker.Item label="Jiwaka Province" value="jiwaka" />
                <Picker.Item label="Central Province" value="central" />
                <Picker.Item label="Gulf Province" value="gulf" />
                <Picker.Item label="Milne Bay Province" value="milne_bay" />
                <Picker.Item label="Oro Province" value="oro" />
                <Picker.Item label="Western Province" value="western" />
                <Picker.Item label="National Capital District Province" value="national_capital_district" />
                <Picker.Item label="East Sepik Province" value="east_sepik" />
                <Picker.Item label="Madang Province" value="madang" />
                <Picker.Item label="Morobe Province" value="morobe" />
                <Picker.Item label="West Sepik Province" value="west_sepik" />
                <Picker.Item label="Autonomous Region Of Bougainville" value="bougainville" />
                <Picker.Item label="East New Britain Province" value="east_new_britain" />
                <Picker.Item label="West New Britain Province" value="west_new_britain" />
                <Picker.Item label="Manus Province" value="manus" />
                <Picker.Item label="New Ireland Province" value="new_ireland" />
            </Picker>

            <TextInput
                style={styles.input}
                placeholder="District"
                value={district}
                onChangeText={setDistrict}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Local Level Government"
                value={localLevelGovernment}
                onChangeText={setLocalLevelGovernment}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Ward"
                value={ward}
                onChangeText={setWard}
                keyboardType="numeric"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Census Unit"
                value={censusUnit}
                onChangeText={setCensusUnit}
                keyboardType="numeric"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Census Unit Type"
                value={censusUnitType}
                onChangeText={setCensusUnitType}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Workload No"
                value={workloadNo}
                onChangeText={setWorkloadNo}
                keyboardType="numeric"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Locality"
                value={locality}
                onChangeText={setLocality}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Section"
                value={section}
                onChangeText={setSection}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Lot"
                value={lot}
                onChangeText={setLot}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Record No"
                value={recordNo}
                onChangeText={setRecordNo}
                keyboardType="numeric"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="PD No"
                value={pdNo}
                onChangeText={setPDNo}
                keyboardType="numeric"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Household No"
                value={householdNo}
                onChangeText={setHouseholdNo}
                keyboardType="numeric"
                placeholderTextColor="#888"
            />

            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: "#87CEEB",
        justifyContent: "center",
    },
    image: {
        width: 300,
        height: 210,
        alignSelf: "center",
        marginBottom: 5,
        marginTop: -10,
        borderRadius: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#00008B",
        textAlign: "center",
        marginBottom: 30,
    },
    subheader: {
        fontSize: 19,
        color: "#333",
        textAlign: "center",
        marginBottom: 25,
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    picker: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: "#fff",
        marginBottom: 20,
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

export default IndicativeInfo;
