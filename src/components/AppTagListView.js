// TagListView.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper'; // Using Chip component from React Native Paper
import {appColors} from '../utils/constant';
import {scaleFontSize} from '../utils/screenUtils';
import {globalStyle} from '../utils/styles';
import {ScrollView} from 'react-native-gesture-handler';

const AppTagListView = ({tags, onChange, singleLine}) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = tag => {
    const index = selectedTags.indexOf(tag);
    if (index !== -1) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return !singleLine ? (
    <View style={[styles.container, {flexWrap: !singleLine && 'wrap'}]}>
      {tags.map(tag => (
        <TouchableOpacity key={tag} onPress={() => toggleTag(tag)}>
          <Chip
            mode={selectedTags.includes(tag) ? 'outlined' : 'flat'}
            style={[
              styles.tag,
              selectedTags.includes(tag)
                ? styles.selectedTag
                : styles.unselectedTag,
              styles.tagStyle,
            ]}
            textStyle={[styles.tagText]} // Apply text styles to the tag text
            onPress={() => toggleTag(tag)}>
            {tag}
          </Chip>
        </TouchableOpacity>
      ))}
    </View>
  ) : (
    <ScrollView
      horizontal
      style={[styles.container]}
      showsHorizontalScrollIndicator={false}>
      {tags.map(tag => (
        <TouchableOpacity key={tag} onPress={() => toggleTag(tag)}>
          <Chip
            mode={selectedTags.includes(tag) ? 'outlined' : 'flat'}
            style={[
              styles.tag,
              selectedTags.includes(tag)
                ? styles.selectedTag
                : styles.unselectedTag,
              styles.tagStyle,
            ]}
            textStyle={[styles.tagText]} // Apply text styles to the tag text
            onPress={() => toggleTag(tag)}>
            {tag}
          </Chip>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  tag: {
    margin: 4,
    borderRadius: 15,
    fontSize: 25,
  },
  selectedTag: {
    backgroundColor: appColors.Secondary, // Customize the background color for selected tags
    color: 'white', // Customize the text color for selected tags
  },
  unselectedTag: {
    backgroundColor: appColors.BackGround, // Customize the background color for unselected tags
    color: 'black', // Customize the text color for unselected tags
  },
  tagText: {
    // Default text style for tags
    ...globalStyle.textStyle,
    color: appColors.Primary,
  },
});

export default AppTagListView;
