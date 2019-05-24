import React, { Component } from "react";
import {StyleSheet,Text,View,Image,ActivityIndicator,StatusBar} from "react-native";
import Weather from "./Weather";

const API_KEY = "6a02793735b1a0345302e08138de80f6";


export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature : null,
    name : null
  };

//37.499783, 127.031950
//navigator.geolocation.getCurrentPosition(success, error, options);
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
          this._getWeather( position.coords.latitude , position.coords.longitude ); //경도,위도
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ 
          temperature : json.main.temp,
          name : json.weather[0].main,
          isLoaded : true
        });
      });
  };   

  render() {
    const { isLoaded, error , temperature , name } = this.state;    

    return (

      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (<Weather WeatherName={"Rain"} temp={Math.ceil(temperature - 273.15)}/>) //Math.floor(1.87)이란 숫자를 내림으로 처리함 <-> Math.ceil():자리 올림
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
