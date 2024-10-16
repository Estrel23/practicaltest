import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'; 
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const CommentPage = () => {
  const navigation = useNavigation(); // Get navigation object
  const [comments, setComments] = useState("");

  // Function to update the comments state
  function setEnterYourCommentHere(text: string): void {
    setComments(text);
  }

  // Navigate to Thank You page
  const handleDashboard = () => {
    // code to handle the browse action
    (navigation as any).navigate("thankyoupage");
  };

  return (
    <View style={styles.container}>
      <Image
          source={require('@/assets/images/OIP.jpeg')}
          style={styles.Image}
      />

      <Text style={styles.header}>COMMENTS/REMARKS</Text>
      <Text style={styles.subText}>
        (Note in the space below any comments/questions if you have).
      </Text>

      {/* Comment text box for user input */}
      <TextInput
          style={styles.commentInput}
          placeholder="Enter Your Comments Here"
          value={comments}
          onChangeText={setEnterYourCommentHere}
          placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} onPress={handleDashboard}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
      
    </View>           
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#87CEEB",
      justifyContent: "space-between",
      alignItems: "center",
  },
  
  Image: {
      width: 300,
      height: 230,
      alignSelf: "center",
      marginBottom: 20,
      marginTop: 40,
      borderRadius: 10,
  },
  
  header: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#000000",
      textAlign: "center",
      marginBottom: 0,
      marginTop: -10,
  },

  subText: {
      fontSize: 19,
      color: "#666",
      textAlign: "center",
      marginBottom: -2, 
  },

  commentInput: {
      height: 140,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 50,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 20,
      marginBottom: 30,
  },

  button: {
    backgroundColor: "#FFDF00",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: -4,
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

export default CommentPage;
