import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        margin: 10,
        padding:10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#35355a',
        backgroundColor: '#35355a'
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",    
        color: '#fff'    
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
        color: '#fff'
    },
    seperator: {
        marginTop: 10,
        color: '#fff'
    },
    coinPrice: {
        marginTop: 10,
        marginRight: 10,
        fontWeight: "bold", 
        color: '#fff'       
    },
    image: {
        width: 35,
        height: 35,
    },
    moneySymbol: {
        marginTop: 10,
        fontWeight: "bold",
        color: '#fff'
    },
    statisticsContainer: {
        display: "flex",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    }
})

const { 
    container,
    image,
    moneySymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    seperator,
    percentChangePlus,
    percentChangeMinus
} = styles;

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {
 
    
    return (
        <View style={container}>

            <View style={upperRow}>
                <Image
                    style={styles.image}
                    source={{ uri: images[symbol] }}
                />
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinName}>{coin_name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1}}>
                <Text style={moneySymbol}> $ </Text>
                <Text style={coinPrice}>{price_usd}</Text>
                </View>
            </View>

            <View style={statisticsContainer}>

                <Text>24h:
                     <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
                <Text>7d:
                    <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
                </Text>

            </View>

        </View> 
    );
}



export default CoinCard;