import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';



export default class HomeScreen extends React.Component{
  goToTabScreen=()=> {
      this.props.navigation.navigate('TabScreen')
    }
    goToAboutScreen=()=> {
      this.props.navigation.navigate('About')
    }
    goToSuggestScreen=()=> {
      this.props.navigation.navigate('Suggest')
    }

  render(){
    return(
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <TouchableOpacity onPress={this.goToTabScreen}>Start </TouchableOpacity>
    <TouchableOpacity onPress={this.goToAboutScreen}>About </TouchableOpacity>
    <TouchableOpacity onPress={this.goToSuggestScreen}>Suggest A Sound </TouchableOpacity>
  </View>
    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
