import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons"; //아이콘 
import { MaterialCommunityIcons } from "@expo/vector-icons"; //아이콘 
import PropTypes from "prop-types";

/* export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
          <Ionicons color="white" size={144} name="ios-rainy"/>
          <Text style={styles.temp}>35°C</Text>
        </View>

        <View style={styles.lower}>
          <Text style={styles.title}>Raining like a MF</Text>
          <Text style={styles.subtitle}>For more info look outside</Text>
        </View>
      </LinearGradient>
    );
  }
} */

 const WeatherCases = {
   Rain : {
     colors :["#00C6FB", "#005BEA"],
     title : "Raining like a MF",
     subtitle : "For more info look ourside",
     icon : "weather-rainy",
   },
   clear : {
    colors :["#FEF253", "#FF7300"],
    title : "Sunny as fuck",
    subtitle : "Go get your ass burnt",
    icon : "weather-sunny",
   },
   ThunderStorm : {
    colors :["#00ECBC", "#007ADF"],
    title : "Tunderstorm in the house",
    subtitle : "Actually, outside of the house",
    icon : "weather-lightning",
   },
   Clouds : {
    colors :["#D7D2CC", "#304352"],
    title : "Clouds",
    subtitle : "I know fucking boring",
    icon : "weather-cloudy",
   },
   Snow : {
    colors :["#7DE2FC", "#B9B6E5"],
    title : "Cold as balls",
    subtitle : "Do you want to build a snowman? funck no",
    icon : "weather-snowy",
   },
   Drizzle : {
    colors :["#89F7FE", "#66A6FF"],
    title : "Drizzle",
    subtitle : "It's like rain, but gay",
    icon : "weather-hail",
   },
   Haze : {
    colors :["#82E1FF", "#8250FF"],
    title : "Haze",
    subtitle : "Don't know what that is Haze",
    icon : "weather-hail",
   },
   Mist : {
    colors :["#825043", "#D45043"],
    title : "Mist",
    subtitle : "It's like you have no glasses on",
    icon : "weather-fog",
   }
  };

//함수형 
export default function Weather({WeatherName ,temp}) {  
  console.log(WeatherName);
  return (
    <LinearGradient colors={WeatherCases[WeatherName].colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons color="white" size={144} name={WeatherCases[WeatherName].icon} />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>

      <View style={styles.lower}>
        <Text style={styles.title}>{WeatherCases[WeatherName].title}</Text>
        <Text style={styles.subtitle}>{WeatherCases[WeatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}


Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  WeatherName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  temp: {
    fontSize: 48,
    color: "#fff",
    backgroundColor: "transparent",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    color: "#fff",
    backgroundColor: "transparent",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    color: "#fff",
    backgroundColor: "transparent",
    marginBottom: 24
  }
});
