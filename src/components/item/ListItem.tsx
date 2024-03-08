import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

interface ListItemProps {
  title?: string;
  description?: string;
  url_image?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  title = '',
  description = '',
  url_image = '',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          source={{uri: url_image}}
          style={{width: '100%', height: 50}}
          resizeMode="center"
        />
      </View>
      <View style={{flex: 3, paddingHorizontal: 5}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 5,
    borderRadius: 5,
    paddingVertical: 10,
  },
  image_container: {
    flex: 1,
    paddingHorizontal: 5,
    borderRightWidth: 1,
    borderRightColor: 'gray',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {fontSize: 12, fontWeight: '400'},
});

export default ListItem;
