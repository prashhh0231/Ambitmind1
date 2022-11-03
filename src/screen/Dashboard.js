import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../components/Button';
import InnerCard from '../components/InnerCard';
import {storeInfo} from '../redux/action';

const Dashboard = () => {
  const catInfo = useSelector(state => state.addInfoReducer);
  const dispatch = useDispatch();
  // const [data, setData] = useState(catInfo);
  const [isEdit, setIsEdit] = useState(false);
  const [editNo, setEditNo] = useState();
  const [input, setInput] = useState([
    {
      id: 0,
      key: 'cat_name',
      value: '',
      placeholder: 'Cat Name',
    },
    {
      id: 1,
      key: 'cat_bread',
      value: '',
      placeholder: 'Cat Bread',
    },
    {
      id: 2,
      key: 'cat_description',
      value: '',
      placeholder: 'Cat Description',
    },
  ]);

  const onChangeText = (key, value) => {
    if (key !== undefined) {
      input[key].value = value;
      setInput(() => [...input]);
    }
  };
  const emptyTextfield = () => {
    (input[0].value = ''), (input[1].value = ''), (input[2].value = '');
    setInput(() => [...input]);
  };
  const submitHandler = () => {
    let newArr = [
      ...catInfo,
      {
        cat_name: input[0].value,
        cat_bread: input[1].value,
        cat_description: input[2].value,
      },
    ];

    dispatch(storeInfo(newArr));
    emptyTextfield();
  };

  const deleteHandler = item => {
    let newArr = catInfo.filter((val, i) => {
      return item !== i;
    });

    dispatch(storeInfo(newArr));
  };

  const editHandler = (val, item) => {
    setEditNo(item);
    setIsEdit(true);
    input[0].value = val.cat_name;
    input[1].value = val.cat_bread;
    input[2].value = val.cat_description;
    setInput([...input]);
  };

  const updateHandler = () => {
    let newArr = catInfo.map((val, i) => {
      if (i === editNo) {
        let data = {
          cat_name: input[0].value,
          cat_bread: input[1].value,
          cat_description: input[2].value,
        };
        return data;
      } else {
        return val;
      }
    });

    dispatch(storeInfo(newArr));
    emptyTextfield();
    setIsEdit(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Pet Tracking System</Text>
      </View>
      <View style={styles.form_container}>
        {input.map((val, i) => {
          return (
            <TextInput
              style={styles.textField}
              onChangeText={value => {
                onChangeText(i, value);
              }}
              value={val.value}
              placeholder={val.placeholder}
            />
          );
        })}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            isEdit ? updateHandler() : submitHandler();
          }}>
          <Text style={styles.btnLable}>{isEdit ? 'Update' : 'Submit'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.showdata}>
          {catInfo.map((val, i) => {
            return (
              <View style={styles.card}>
                <InnerCard head={'Name'} value={val.cat_name} />
                <InnerCard head={'Bread'} value={val.cat_bread} />
                <InnerCard head={'Description'} value={val.cat_description} />
                <View style={styles.btn_container}>
                  <Button
                    lable={'pencil'}
                    onclickFun={() => editHandler(val, i)}
                  />
                  <Button lable={'trash'} onclickFun={() => deleteHandler(i)} />
                </View>
              </View>
            );
          })}
          {catInfo.length === 0 && (
            <Text style={{fontSize: 18, color: 'gray'}}>
              No data found please add data
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4fa',
  },
  header: {
    backgroundColor: 'black',
    padding: 10,
  },
  heading: {
    fontSize: 18,
    color: 'wheat',
    fontWeight: '600',
  },
  form_container: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  textField: {
    marginBottom: 15,
    padding: 5,
    width: '100%',
    backgroundColor: '#edeef2',
    fontSize: 14,
    borderRadius: 9,
  },
  btn: {
    backgroundColor: 'black',
    width: '30%',
    paddingVertical: 5,
    borderRadius: 5,
  },
  btnLable: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  showdata: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: 30,
  },
  card: {
    width: '85%',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },

  btn_container: {
    display: 'flex',
    flexDirection: 'row',
  },
});
