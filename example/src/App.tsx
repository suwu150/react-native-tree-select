
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TreeSelect from 'react-native-tree-select';
// import Icon from 'react-native-vector-icons/Ionicons';
import treeselectData from './treselect.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { result: null };
  }

  _onClick = ({ item, routes, currentNode }) => {
    console.log(item.name, currentNode);
    console.log(routes);
    this.setState({
      result: item.name,
    });
  };

  _onClickLeaf = ({ item, routes, currentNode }) => {
    console.log(item.name, currentNode);
    console.log(routes);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginVertical: 30 }}>
          <Text>{this.state.result}</Text>
        </View>
        <View style={{ width: '100%', flex: 1 }}>
          <TreeSelect
            data={treeselectData}
            // isOpen
            // openIds={['A01']}
            defaultSelectedId={['B062']}
            isShowTreeId={false}
            // selectType="single"
            selectType="multiple"
            leafCanBeSelected
            itemStyle={styles.itemStyle}
            selectedItemStyle={styles.selectedItemStyle}
            onClick={this._onClick}
            onClickLeaf={this._onClickLeaf}
            treeNodeStyle={{
              // openIcon: <Icon size={18} color="#171e99" style={{ marginRight: 10 }} name="ios-arrow-down" />,
              // closeIcon: <Icon size={18} color="#171e99" style={{ marginRight: 10 }} name="ios-arrow-forward" />
              openIcon: (
                <Image
                  resizeMode="stretch"
                  style={styles.icon}
                  source={require('./images/down-circle.png')}
                />
              ),
              closeIcon: (
                <Image
                  resizeMode="stretch"
                  style={styles.icon}
                  source={require('./images/right-circle.png')}
                />
              )
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  itemStyle: {
    fontSize: 12,
    color: '#995962',
  },
  selectedItemStyle: {
    backgroudColor: '#f7edca',
    fontSize: 16,
    color: '#171e99',
  },
  icon: { width: 18, height: 18 },
});
