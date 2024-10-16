import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';

const thankyoupage = () => {
  const navigation = useNavigation(); // Get navigation object
  const handleDashboard = () => {
    // code to handle the browse action
    (navigation as any).navigate("index");
  };

  return (
   
      
    <View style={styles.container}>
      <Image
          source={require('@/assets/images/OIP.jpeg')}
          style={styles.Image}
          />

          <Text style={styles.header}>THANK YOU FOR YOUR PARTICIPATION</Text>

          <TouchableOpacity style={styles.button} onPress={() => handleDashboard()}>
        <Text style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
  </View>           
);
};

const styles = StyleSheet.create({

      
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#87CEEB",
       justifyContent: "space-between", // distributes space between items
    alignItems: "center",
      
    },
  
    Image: {
      width: 300,
      height: 230,
      alignSelf:"center",
      marginBottom: 20,
      marginTop:40,
      borderRadius: 10,
    },

    header: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#000000",
      textAlign: "center",
      marginBottom: 150,
      marginTop: 50,
    },

    button: {
    backgroundColor: "#FFDF00", // Modern goldern yellow color
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: -4,
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

 
})

export default thankyoupage
    
    
   


