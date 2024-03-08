import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Header from '../../components/header/Header';
import Loading from '../../components/loading/Loading';
import ApiService from '../../services/ApiService';
import ListItem from '../../components/item/ListItem';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      banks: [],
    };

    // Bindeo
    this.refreshBanks = this.refreshBanks.bind(this);
  }

  async componentDidMount() {
    await this.refreshBanks();
  }

  async refreshBanks() {
    try {
      this.setState({loading: true});
      const banks = await ApiService.getBankList();
      this.setState({banks});
    } catch (error) {
      console.error('HomeScreen.js:refreshBanks:error: ', error);
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    const {loading, banks} = this.state;

    return (
      <>
        <SafeAreaView>
          <Header title="PagaTodo App" onRefresh={this.refreshBanks} />
          <ScrollView>
            {banks.length > 0 ? (
              banks.map((bank, index) => {
                return (
                  <ListItem
                    key={`item_${index}`}
                    url_image={bank.url}
                    title={`${bank.bankName} (${bank.age} años)`}
                    description={bank.description}
                  />
                );
              })
            ) : (
              <Text style={{textAlign: 'center'}}>Ups! No hay nada aqui</Text>
            )}
          </ScrollView>
        </SafeAreaView>
        <Loading active={loading} />
      </>
    );
  }
}

const styles = StyleSheet.create({});
