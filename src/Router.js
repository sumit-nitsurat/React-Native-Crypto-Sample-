import * as React from 'react';
import {View, Dimensions, Platform, Text} from 'react-native'
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import EIcon from 'react-native-vector-icons/Entypo'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import FIcon from 'react-native-vector-icons/FontAwesome'
import Root from './components/Root';
import NewsListView from './components/news/NewsList';

const mapNavigationStateParamsToProps = (SomeComponent) => {
  return class extends React.Component {
      static navigationOptions = SomeComponent.navigationOptions; // better use hoist-non-react-statics
      render() {
          const {navigation: {state: {params}}} = this.props
          return <SomeComponent {...params} {...this.props} />
      }
  }
}

// export const MarketStack = StackNavigator({
//   Markets: { screen: MarketSummary }},
//   {headerMode: 'none'}
// );


const HomeScreenRouter = TabNavigator(
  {
    Markets: { screen: Root, 
      navigationOptions: ({navigation}) => ({
        title: 'Markets',
        tabBarIcon: ({tintColor, focused}) => <View style={{justifyContent: 'center', alignItems: 'center', marginTop: Platform.OS === 'ios' ? 20 : 4}}> 
        <EIcon 
          name={'bar-graph'}
          size={20}
          color={focused ? '#ffffff' : '#708090'}
        />
        <View style={{marginTop: 1}}><Text style={{color: focused ? '#ffffff' : '#708090', fontSize: 11}}>Markets</Text></View>
        </View>
      })  },
      News: {screen: NewsListView, 
        navigationOptions: ({navigation}) => ({
          title: 'News',
          tabBarIcon: ({tintColor, focused}) =><View style={{justifyContent: 'center', alignItems: 'center', marginTop: Platform.OS === 'ios' ? 20 : 4}}> 
           <EIcon 
            name={'database'}
            size={20}
            color={focused ? '#ffffff' : '#708090'}
          />
          <View style={{marginTop: 1}}><Text style={{color: focused ? '#ffffff' : '#708090', fontSize: 11}}>News</Text></View>
          </View>
        })  
      },
  },
  {
    lazy: true,
    initialRouteName:"Markets",
    tabBarComponent: TabBarBottom,
    swipeEnabled: true,
    tabBarPosition:'bottom',
    animationEnabled: true,
    tabBarOptions: {
      style: {marginBottom: 0, height: 50, backgroundColor: '#0f1f31', alignItems: 'flex-end'},
      showIcon:true,
      pressColor: '#0f1f31',
      showLabel:false,
      activeTintColor: '#61C2B9',
      inactiveTintColor: '#708090',
      activeBackgroundColor: '#0f1f31',
      inactiveBackgroundColor: '#0f1f31'
    }
  }
);

export default HomeScreenRouter;
