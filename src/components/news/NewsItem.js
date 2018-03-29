import * as React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import styles from "./NewsItem.style";
import {formatTimePast} from '../../Utils/Formatter';
// import {IMAGE_URI} from '../../constants/image';
const {width} = Dimensions.get('window');

export default class NewsItem extends React.Component {
  render() {
    const { item } = this.props;
    const headingColor =
      this.props.index % 2 === 0 ? "rgb(111,180,183)" : "rgb(186,212,95)";
    return (
      <TouchableOpacity style={styles.container} onPress={() => openUrl(item.link)}>
        <View style={styles.iconContainer}>
            <Image 
                style={{height: 122, width: 95}}
                source={item.imageurl && item.imageurl !== '' ? {uri: item.imageurl} : ''}
            />
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.newsHeading}>
            <View style={{ paddingRight: 10 }}>
              <Text
                style={[styles.newsHeadingText, { color: headingColor }]}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                {this.props.item ? item.title : '' }
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', flex: 1}}>
          <View style={[styles.newsSource]}>
            <Text style={styles.metaText}>{item.source}</Text>
          </View>
          <View style={styles.newsTime}>
            {/* <Text  style={styles.metaText}>{formatTimePast(item.published_on)}</Text> */}
          </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
