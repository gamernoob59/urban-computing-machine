import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default class ElectronicTab extends React.Component{
  render(){
    return(
      <FlatList>
      renderItem={({item})=>{
        <View style={{borderBottomWidth: 2,}}>
        <Text>{"Sound1"}</Text>
        <Text>{"Sound2"}</Text>
        <Text>{"Sound4"}</Text>
        <Text>{"Sound5"}</Text>
    </View>
      }}
      keyExtractor={(item, index)=>index.toString()}
    </FlatList>
    )}
}