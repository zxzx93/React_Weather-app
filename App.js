import React, { Component } from "react";
import {StyleSheet,Text,View,Image,ActivityIndicator,StatusBar} from "react-native";
import Weather from "./Weather";
import { Ionicons } from "@expo/vector-icons";

export default class App extends Component {
  state = {
    isLoaded: true
  };

  render() {
    const { isLoaded } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded
          ? <Weather />
          : <View style={styles.loading}>
              <Text style={styles.loadingText}>
                Getting the fucking weather
              </Text>
            </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }
});

//View,Text는 flexbox를 이용한다!
