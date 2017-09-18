import {StyleSheet} from 'react-native';
import Util from '../Util.js';

const Styles = StyleSheet.create({
    watchContainer: {
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        marginTop: 60
    },
    watchFaceContainer: {
        width: Util.size.width,
        height: 170,
        paddingTop: 10, 
        paddingLeft: 10,
        paddingTop: 40,
        paddingBottom: 40,
        borderBottomWidth:1,
        borderBottomColor: '#ddd'
    },
    sectionTime: {
        position: 'absolute',
        fontSize:20,
        fontWeight:'100',
        paddingRight:30,
        right:30,
        color: '#555',
        top: 10
    },
    totalTime: {
        fontSize: 60,
        fontWeight:'100',
        paddingLeft: 20,
        color:'#222'
    }
})

export default Styles;