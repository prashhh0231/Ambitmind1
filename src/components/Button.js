import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({lable, onclickFun}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn_style,
        lable === 'trash' && {backgroundColor: '#ed474f'},
      ]}
      onPress={() => {
        onclickFun();
      }}>
      <Text style={{textAlign: 'center'}}>
        <Icon name={lable} size={30} color="white" />
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn_style: {
    width: 50,
    paddingVertical: 5,
    backgroundColor: '#57b36d',
    marginRight: 20,
    marginTop: 20,
  },
});
