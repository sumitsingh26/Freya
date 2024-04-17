import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Modal,
  View,
  ActivityIndicator,
} from 'react-native';

const AppLoader = (props: CustomAppLoaderType) => {
  return (
    <Modal
      animationType="fade"
      visible={props.openModal}
      onRequestClose={props.closeModal}
      transparent={true}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <ActivityIndicator size={'large'} color={'#DED0B6'} />
      </View>
    </Modal>
  );
};

interface CustomAppLoaderType {
  openModal: boolean;
  closeModal: () => void;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default AppLoader;
