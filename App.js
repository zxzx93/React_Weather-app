import React, { Component } from "react";
import {StyleSheet,Text,View,Image,ActivityIndicator,StatusBar} from "react-native";
import Weather from "./Weather";

     //const API_KEY = "6a02793735b1a0345302e08138de80f6";

export default class App extends Component {
  state = {
    isLoaded: true,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
        error : "somthing went wrong"
        });
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

/*   _getWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  }; */

  render() {
    const { isLoaded, error } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (<Weather />)
          : <View style={styles.loading}>
              <Text style={styles.loadingText}>Getting the fucking weather</Text>
              { error ? <Text style={styles.errorText}>{error}</Text> : null }
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
  errorText :{
    color: "red",
    backgroundColor: "transparent",
    marginBottom : 40
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24
  }
});

//View,Text는 flexbox를 이용한다!
