import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  addPerson,
  getPersons,
  updatePerson,
  deletePerson,
  initializeDB,
  Person,
} from "@/database"; // Import initializeDB
import { useNavigation } from "expo-router";

const Dashboard = () => {
  const navigation = useNavigation(); // Get navigation object
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Select Gender");
  const [relation, setRelation] = useState("Relationship");
  const [marital, setMarital] = useState("Marital Status");
  const [citizen, setCitizen] = useState("Citizenship");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [persons, setPersons] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);
  const [editingPersonId, setEditingPersonId] = useState<number | null>(null); // Track if updating a person

  const handleDashboard = () => {
    // code to handle the browse action
    (navigation as any).navigate("furtherInfor");
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const fetchPersons = async () => {
    const allPersons = await getPersons();
    setPersons(allPersons);
  };

  useEffect(() => {
    const setupDatabase = async () => {
      await initializeDB();
      fetchPersons();
    };

    setupDatabase();
  }, []);

  const handleSubmit = async () => {
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      gender === "Select Gender"
      
    ) {
      Alert.alert("Error", "Please fill in all fields correctly.");
      return;
    }

    try {
      if (editingPersonId) {
        // Update existing person
        await updatePerson(
          editingPersonId,
          firstName,
          lastName,
          phone,
          email,
          date.toISOString(),
          gender
        );
        console.log("Person updated successfully");
      } else {
        // Add new person
        const id = await addPerson(
          firstName,
          lastName,
          phone,
          email,
          date.toISOString(),
          gender
        );
        console.log("Person created successfully with ID:", id);
      }
      resetForm();
      fetchPersons(); // Refresh the list
    } catch (error) {
      console.error("Error submitting person:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deletePerson(id);
      console.log("Person deleted successfully");
      fetchPersons(); // Refresh the list after deleting
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };

  const handleUpdateClick = (person: Person) => {
    // Populate the form with the selected person's data
    setFirstName(person.firstName);
    setLastName(person.lastName);
    setPhone(person.phone);
    setEmail(person.email);
    setGender(person.gender);
    setDate(new Date(person.date)); // Assuming dateOfBirth is a string
    setEditingPersonId(person.id); // Set the ID for updating
  };

  const resetForm = () => {
    // Clear the form after submission or update
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setGender("Select Gender");
    setDate(new Date());
    setEditingPersonId(null); // Reset ID for creating new entries
  };

  return (
    
    <ScrollView>
      
      <View style={styles.container}>
      <Image
          source={require('@/assets/images/OIP.jpeg')}
          style={styles.Image}
        />
        <Text style={styles.header}>B. PERSONAL INFORMATION</Text>


        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#888"
        />

        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label={"Select Gender"} value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>

        <Picker
          selectedValue={relation}
          onValueChange={(itemValue) => setRelation(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label={"Relationship"} value="" />
          <Picker.Item label="Head of Household" value="head of household" />
          <Picker.Item label="Husband" value="husband" />
          <Picker.Item label="Wife" value="wife" />
          <Picker.Item label="Own Son" value="own son" />
          <Picker.Item label="Own Daughter" value="own daughter" />
          <Picker.Item label="Son/daughter in-law" value="son/daughter in-law" />
          <Picker.Item label="Adopted/Step child" value="adopted/step child" />
          <Picker.Item label="Father/Mother" value="father/mother" />
          <Picker.Item label="Grandgreat-grand child" value="grandgreat-grand child" />
          <Picker.Item label="Father/Mother in-law" value="father/mother in-law" />
          <Picker.Item label="Brother/Sister in-lw" value="brother/sister in-law" />
          <Picker.Item label="Other Relative" value="other relative" />
          <Picker.Item label="Non-relative" value="non-relative" />
        </Picker>

        <Picker
          selectedValue={marital}
          onValueChange={(itemValue) => setMarital(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label={"Marital Status"} value="" />
          <Picker.Item label="Never Married" value="never married" />
          <Picker.Item label="Married/Living Together" value="married/living together" />
          <Picker.Item label="Separated" value="separated" />
          <Picker.Item label="Divorced" value="divorced" />
          <Picker.Item label="Widowed" value="widowed" />
        </Picker>

        <Picker
          selectedValue={citizen}
          onValueChange={(itemValue) => setCitizen(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label={"Citizenship"} value="" />
          <Picker.Item label="PNG Citizen" value="PNG citizen" />
          <Picker.Item label="Non-PNG Citizen" value="Non-PNG citizen" />
          </Picker>

        <View>
          <Button
            title="Select Date of Birth"
            onPress={() => setShowDatePicker(true)}
          />
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
          <Text style={styles.dateText}>
            Date of Birth: {date.toDateString()}
          </Text>
        </View>

         
  
        <Button
          title={selectedPerson ? "Update" : "Submit"}
          onPress={handleSubmit}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleDashboard()}>
          <Text style={styles.buttonText2}>NEXT</Text>
        </TouchableOpacity>

        {/* Table to display records */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>First Name</Text>
            <Text style={styles.tableHeaderText}>Last Name</Text>
            <Text style={styles.tableHeaderText}>Phone</Text>
            <Text style={styles.tableHeaderText}>Email</Text>
            <Text style={styles.tableHeaderText}>Gender</Text>
            <Text style={styles.tableHeaderText}>Date of Birth</Text>
            <Text style={styles.tableHeaderText}>Actions</Text>
          </View>
          {persons.map((person) => (
            <View key={person.id} style={styles.tableRow}>
              <Text style={styles.tableRowText}>{person.firstName}</Text>
              <Text style={styles.tableRowText}>{person.lastName}</Text>
              <Text style={styles.tableRowText}>{person.phone}</Text>
              <Text style={styles.tableRowText}>{person.email}</Text>
              <Text style={styles.tableRowText}>{person.gender}</Text>
              <Text style={styles.tableRowText}>
                {new Date(person.date).toDateString()}
              </Text>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={styles.updateButton}
                  onPress={() => handleUpdateClick(person)}
                >
                  <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDelete(person.id)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>

                
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

//... (styles remain unchange)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#87CEEB",
    justifyContent: "center",
  },

  button: {
    top: 20,
    backgroundColor: "#2085FFFF",
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
  buttonText2: {
    color: "#FFD000FF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },

  Image: {
    width: 300,
    height: 230,
    alignSelf:"center",
    marginBottom: 20,
    marginTop:10,
    borderRadius: 10,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00008B",
    textAlign: "center",
    marginBottom: 30,
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

  dateText: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    color: "#666",
  },

  personContainer: {
    marginBottom: 20,
  },

  tableContainer: {
    marginTop: 20,
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  tableHeaderText: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },

  tableRow: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  tableRowText: {
    flex: 1,
    textAlign: "center",
  },

  actionButtons: {
    flexDirection: "row",
  },
  
  updateButton: {
    backgroundColor: "#4CAF50",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: { backgroundColor: "#F44336", padding: 5, borderRadius: 5 },
});

export default Dashboard;
