import {
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  View,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import AuthComponent from "@/components/auth/AuthComponent";
import React from "react";

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleDashboard = () => {
    // code to handle the browse action
    (navigation as any).navigate("indicativeInfo");
  };

  const handleSignIn = () => {
    (navigation as any).navigate("auth");
  };

  const testRoute = () => {
    (navigation as any).navigate("test");
  };

  return (
    
    <View style={styles.container}>

<Image
          source={require('@/assets/images/OIP.jpeg')}
          style={styles.Image}
        />

      {/* Two Text Messages */}
      <Text style={styles.headerText}>PAPUA NEW GUINEA NATIONAL CENSUS</Text>
      <Text style={styles.subText}>
        Your count matters in the population enumeration.
      </Text>

     

  
      <TouchableOpacity style={styles.button} onPress={() => handleDashboard()}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styling for a modern, attractive layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#87CEEB", // Light background for contrast against buttons
  },
  headerText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 50,
  },
  subText: {
    fontSize: 19,
    color: "#666",
    textAlign: "center",
    marginBottom: 25, // Space between text and buttons
  },
  Image: {
    width: 300,
    height: 230,
    alignSelf:"center",
    marginBottom: 20,
    marginTop:-40,
    borderRadius: 10,
  },

  button: {
    backgroundColor: "#FFDF00", // Modern goldern yellow color
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonSecondary: {
    backgroundColor: "#FFDF00", // Stylish yellow for Sign In/Sign Up buttons
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
