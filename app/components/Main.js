import React from 'react';
import {
    Platform,
    Alert,
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

// import Note from './Note';
const isAndroid = Platform.OS == "android";


export default class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        noteArray: [] ,
        noteText: ' ' ,
        }
    }
    addNote() {
    Alert.alert('You tapped the button!')
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headertext}> ToDoApp </Text>
                </View>

                <ScrollView style={styles.scrollcontainer} >

                </ScrollView>

                <View style={styles.footer}>

                        <TextInput
                                style={styles.textInput}
                                placeholder= 'note'
                                placeholderTextColor = '#fff'>
                        </TextInput>

                </View>

                    <TouchableOpacity onPress={ this.addNote.bind(this)} style={styles.addButton}>
                        <Text style={styles.addButtonText} >+</Text>
                    </TouchableOpacity>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#67CB69'
    },
    header: {
        // backgroundColor: '#2A702B',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#2A702B',
        marginBottom: 30,
        marginTop: 30,
        // fontWeight: '400'
    },
    headertext: {
        color: '#0B380B',
        fontSize: 36,
        marginBottom: 30,
        marginTop: 60,
        fontWeight: '400'
    },
    scrollcontainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 120,
        left: 10,
        right: 10
        // zIndex: 10
    },
    textInput: {
        alignItems: 'stretch',
        color: '#0B380B',
        backgroundColor: '#C4D5C4',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
        padding: 10,
        borderBottomColor:  '#67CB69',
        fontSize: 20,
        borderRadius: 8
    },
    addButton: {
        position: 'relative',
        bottom: 40,
        left: 130,
        right: 0,
        zIndex: 11,
        backgroundColor: '#C4D5C4',
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color:  '#67CB69',
        fontSize: 40
    },
});
