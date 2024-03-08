import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

interface HeaderProps {
  title?: string;
  onRefresh?: () => void;
}

const Header: React.FC<HeaderProps> = ({title = '', onRefresh = () => {}}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 5, justifyContent: 'center'}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', paddingRight: 10}}>
        <TouchableOpacity style={styles.btn} onPress={onRefresh}>
          <Image
            style={{tintColor: 'white'}}
            source={require('../../assets/icons/refresh.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#519280',
    height: 50,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
  },
  btn: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 3,
    alignItems: 'center',
  },
});

export default Header;
