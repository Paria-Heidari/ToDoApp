import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.note}</Text>
        <Text style={styles.noteText}>{this.props.val.date}</Text>


        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDel}>
          <Text style={styles.noteDelT}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  note: {
        position: 'relative',
        padding: 20,
        paddingRight: 200,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',

    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#C4D5C4',
        fontSize: 14
    },
    noteDel: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0B380B',
        padding: 2,
        top: 0,
        bottom: 3,
        right: 2
    },
    noteDelT: {
        color: '#C4D5C4',
    }
});
