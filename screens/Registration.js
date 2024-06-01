// Registration.js with hooks

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Register;