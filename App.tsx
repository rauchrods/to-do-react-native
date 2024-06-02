import {Button, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [goals, setGoals] = useState<Array<string>>([]);

  function modalVisiblityHandler(): void {
    setIsModalVisible(currState => !currState);
  }

  function deleteGoalHandler(id: number): void {
    const updatedGoals = goals.filter((goal, index) => index !== id);
    setGoals(updatedGoals);
  }

  return (
    <View style={styles.appContainer}>
      <TouchableOpacity
        onPress={modalVisiblityHandler}
        style={styles.mainButton}>
        <Text style={styles.mainButtonText}>Add a new Goal</Text>
      </TouchableOpacity>
      <GoalInput
        setGoals={setGoals}
        isModalVisible={isModalVisible}
        modalVisiblityHandler={modalVisiblityHandler}
      />
      <GoalItems goals={goals} deleteGoalHandler={deleteGoalHandler} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: Colors.dark,
  },

  mainButton: {
    backgroundColor: '#318CE7',
    padding: 6,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    marginHorizontal: 32,
  },

  mainButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
