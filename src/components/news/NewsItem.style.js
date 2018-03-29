import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");

const ITEM_HEIGHT = 0.15 * height;

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    flexDirection: "row"
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: 'yellow'
  },
  newsContainer: {
    flex: 3,
    marginLeft: 5

    // backgroundColor: 'red'
  },
  newsHeading: {
    flex: 3,
    //    backgroundColor: 'pink' ,
    justifyContent: "center"
  },
  newsSource: {
    flex: 1
    // backgroundColor: 'skyblue'
  },
  newsTime: {
    flex: 1,
    // backgroundColor: 'lightblue',
    alignItems: "flex-end",
    paddingRight: 10
  },
  metaText: {
    color: "rgb(148,153,158)"
  },
  newsHeadingText: {
    fontSize: 16,
    fontWeight: "600"
  }
});

export default styles;
