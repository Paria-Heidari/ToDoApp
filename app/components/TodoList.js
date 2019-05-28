// // TodoList
//
// import React, {Component} from 'react';
// import {
//     TouchableOpacity,
//     StyleSheet,
//     Dimensions,
//     Text,
//     View
// } from 'react-native';
//
// const {high, width} = Dimensions.get('window');
//
// class TodoList extends Component {
//     state = {
//         isEditing: false
//     };
//       render() {
//             return (
//                   <View style={styles.container} >
//                         <TouchableOpacity>
//                             <View style= {styles.circle} />
//                         </TouchableOpacity>
//                         <Text style={styles.text} >listttttttts are hereeeee</Text>
//                   </View>
//             );
//       }
//     }
//
//     const styles = StyleSheet.create({
//       container: {
//         width: width - 50,
//         borderBottomColor: '#bbb',
//         borderBottomWidth: StyleSheet.hairlineWidth,
//         flexDirection: 'row',
//         // justifyContent: 'center',
//         alignItems: 'center',
//       },
//       text: {
//           fontSize: 20,
//           marginVertical: 20,
//           fontWeight: '500'
//       },
//       circle: {
//           width: 30,
//           height: 30,
//           borderRadius: 15,
//           borderColor: 'green',
//           borderWidth: 3,
//           marginRight: 20
//       }
// });
//
//
//
// export default TodoList;
