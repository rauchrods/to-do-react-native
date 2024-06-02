import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface GoalItemsPropsInterface {
  goals: Array<string>;
  deleteGoalHandler: (id: number) => void;
}

const GoalItems = ({
  goals,
  deleteGoalHandler,
}: GoalItemsPropsInterface): React.JSX.Element => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={goal => (
          <Pressable
            onLongPress={() => deleteGoalHandler(goal.index)}
            android_ripple={{
              color: '#ff5050',
              foreground: true,
            }}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.goalItem} key={goal.index}>
              <Text style={styles.goalText}>{goal.index + 1}</Text>
              <Text style={styles.goalText}>{goal.item}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(goal, index) => goal + index}
      />
    </View>
  );
};
export default GoalItems;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 6,
  },

  goalItem: {
    marginVertical: 6,
    backgroundColor: '#8334eb',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    overflow: 'hidden',
    // flexWrap: 'wrap'
  },

  pressed: {
    opacity: 0.65,
  },

  goalText: {
    fontSize: 20,
    color: 'white',
  },
});
