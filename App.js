import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Linking } from "react-native";

export default function App() {
  const handleJoinMeeting = () => {
    Linking.openURL("https://meet.google.com/wgz-mieq-rks");
  };
  return (
    <View style={styles.container}>
      <Button title="Join meeting!" onPress={handleJoinMeeting} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
