import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState, forwardRef} from 'react';
import BottomSheet from 'react-native-raw-bottom-sheet';
import {deviceHeight} from '../utils/screenUtils';

const AppBottomSheetContent = forwardRef((props, ref) => {
  const [contentHeight, setContentHeight] = useState(0);
  // Function to handle layout event and calculate content height
  const handleLayout = event => {
    const {height} = event.nativeEvent.layout;
    setContentHeight(height);
  };

  useEffect(() => {
    if (contentHeight > 0) {
      ref.current.snapTo(0); // Snap to initial position
      ref.current.snapTo(1); // Snap to calculated content height
    }
  }, [contentHeight]);
  return (
    <BottomSheet
      ref={ref}
      height={deviceHeight * 0.5}
      snapPoints={[0, contentHeight]}
      onLayout={handleLayout} // Handle layout event to calculate content height
      customStyles={{
        container: {
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        },
      }}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>{props.children}</View>
      </ScrollView>
    </BottomSheet>
  );
});

export default AppBottomSheetContent;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1, // Fill the available space
  },
  content: {
    flex: 1,
    margin: 20,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
});
