import * as React from 'react';
import { connect } from 'react-redux';

import styles from './NewsList.style';
import NewsItem from './NewsItem';
import FetchNews from '../../Actions/FetchNews';
import Header from '../Header';
import {
    ActivityIndicator,
    View,
    FlatList
} from 'react-native';

class NewsListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsSummary: null
        }
        this.refreshing = false;
        this.loader = true;
    }

    async componentDidMount() {
        try {
       let news = await this.props.FetchNews();
        if(news && news.payload) {
            let sortedNews = news.payload.sort((a, b) => {
                let aDate = new Date(a.published_on);
                let bDate = new Date(b.published_on);
                return aDate >= bDate ? -1 : 1;
            });
            this.setState({
                newsSummary: sortedNews
            }) 
        }
    } catch(e) {
        console.log(e)
    }
    }

    _renderMenu() {
        return (
            <Icon
                color='#fff'
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
                containerStyle={{height: 56, width: 56}}
                size={24}
                underlayColor='transparent'
                name="menu">
            </Icon>
        );
    }

    async _onRefresh() {
        this.refreshing = true;
        let news = await this.props.FetchNews();
        this.refreshing = false;
        if(news && news.payload) {
            let sortedNews = news.payload.sort((a, b) => {
                let aDate = new Date(a.published_on);
                let bDate = new Date(b.published_on);
                return aDate >= bDate ? -1 : 1;
            });
            this.setState({
                newsSummary: sortedNews
            }) 
        }
    }

    trucateText(text, len) {
        return text.substr(0,len) + '...';
    }

    renderItem = ({ item, index }) => <NewsItem item={item} index={index}/>;

    itemSeparator = () => {
        return (<View style={{ height: 2, backgroundColor: "rgba(100,100,100,0.3)" }} />)
    };

    _renderFooter = () => {
        if (!this.loader) return null;
        return (
          <View
            style={{
              paddingVertical: 20
            }}
          >
            <ActivityIndicator animating size="large" color='white' />
          </View>
        );
    };

    render() {
        if(!this.state.newsSummary) { return null; }
        return (
            <View style={[styles.container]}>
                 <Header title={'Crypto News'} />
                <FlatList
                    keyExtractor={(item, index) => item.title}
                    onRefresh={this._onRefresh.bind(this)}
                    refreshing={this.refreshing}
                    data={this.state.newsSummary ? this.state.newsSummary.slice() : []}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.itemSeparator}
                />
            </View>
        )
    }

    
}

function mapStateToProps(state) {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps, { FetchNews })(NewsListView)
