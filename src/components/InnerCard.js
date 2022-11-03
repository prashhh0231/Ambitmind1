import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InnerCard = ({head, value}) => {
  return (
    <View style={styles.inner_card}>
      <Text style={{flex: 1, color: 'black'}}>{head} </Text>
      <Text
        style={{textAlign: 'left', flex: 2, color: 'black'}}
        numberOfLines={2}>
        {value}
      </Text>
    </View>
  );
};

export default InnerCard;

const styles = StyleSheet.create({
  inner_card: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 2,
  },
});
