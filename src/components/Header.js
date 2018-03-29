import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({title}) => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
                {title}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#0f1f31',
        display: "flex",
        marginTop: 55,
        height: 56,
        alignItems: "center",
        justifyContent: 'center'
    },
    header: {
        fontWeight: "bold",        
        fontSize: 20,
        color: '#ffffff'
    }
})

const { headerContainer, header } = styles;


export default Header;