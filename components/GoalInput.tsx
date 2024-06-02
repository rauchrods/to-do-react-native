import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface GoalInputInterface {
  setGoals: React.Dispatch<React.SetStateAction<string[]>>;
  isModalVisible: boolean;
  modalVisiblityHandler: () => void;
}

function GoalInput({
  setGoals,
  isModalVisible,
  modalVisiblityHandler,
}: GoalInputInterface): React.JSX.Element {
  const [goal, setGoal] = useState<string>('');

  const setGoalHandler = (text: string): void => {
    setGoal(text);
  };

  const addGaolHandler = (): void => {
    setGoals(currState => [...currState, goal.trim()]);
    setGoal('');
    modalVisiblityHandler();
  };

  return (
    <Modal visible={isModalVisible} animationType="slide" hardwareAccelerated={true}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goalimg.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goal!!"
          value={goal}
          onChangeText={setGoalHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGaolHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={modalVisiblityHandler} color={'#E32636'}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.darker,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaaaaa',
    flex: 1,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#aaaaaa',
    paddingVertical: 6,
    paddingHorizontal: 8,
    width: '100%',
    fontSize: 18,
    color: 'white',
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    columnGap: 12,
    marginTop: 18,
  },
  button: {
    width: '30%',
  },

  image: {
    height: 200,
    width: 200,
    color: 'black',
    margin: 16,
  },
});
