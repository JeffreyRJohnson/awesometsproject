import * as React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

interface AppProperties {}

export interface AppState {
  placeName: string;
}

export default class App extends Component<AppProperties, AppState> {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = event => {
    alert(event);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ width: 300, borderColor: 'black', borderWidth: 1 }}
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
