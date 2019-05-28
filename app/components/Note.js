// Hold every individual Note that we create

import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


export default class Note extends React.Component {

    render() {
        return (

            <View key={this.props.keyval} style={styles.note}>
                // // <Text style={styles.noteText} >{this.props.val.date}</Text>
                // <Text style={styles.noteText} >{this.props.val.note}</Text>
                //
                // <TouchableOpacity onPress={{this.props.deleteMethod} style={styles.noteDelete}>
                //     <Text style={styles.noteDeleteText} > Delete </Text>
                // </TouchableOpacity>
            </View>
        ),
    }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#2A702B'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#2A702B'
    },
    noteDelete: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C4D5C4',
        padding: 10,
        top:10,
        bottom:10,
        right:10
    },
    noteDeleteText: {
        color:  'white'
    }
});
