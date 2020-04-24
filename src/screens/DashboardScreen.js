
import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

// Import getNews function from news.js
import { getNews } from '../apis/news';
// We'll get to this one later
import Article from '../components/Article';

export default class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  // Called after a component is mounted
  componentDidMount() {
    this.fetchNews();
   }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }

  render() {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.heading}>DASHBOARD</Text>
            </View>
            <FlatList
                data={this.state.articles}
                renderItem={({ item }) => <Article article={item} />}
                keyExtractor={item => item.url}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh.bind(this)}
            />
        </>
  );
  }
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    heading: {
        fontSize: 25,
        color: '#3B5D5D',
        fontWeight: 'bold'
    }
});
