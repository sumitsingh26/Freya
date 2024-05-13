import React, { useState } from 'react';
import { Modal, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import i18n, { changeLanguage } from '../services/i18n/i18n';
import DropDownPicker from 'react-native-dropdown-picker';
import { appColors } from '../utils/constant';

const LanguageSelectionModal = ({ isVisible, onClose }) => {
    const [value, setValue] = useState(i18n.language);
    const [items, setItems] = useState([
        { label: 'English', value: 'en' },
        { label: 'Danish', value: 'da' },
        { label: 'Sweden', value: 'se' },
        { label: 'Norwegian', value: 'no' },
        { label: 'Finnish', value: 'fi' }
    ]);


    const setDropdownValue = (value) => {
        console.log(value());
        changeLanguage(value())
        setValue(value)
    };

    return (
        <Modal
            animationType='none'
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalBackground}>
                    <DropDownPicker
                        open={isVisible}
                        value={value}
                        items={items}
                        setOpen={onClose}
                        setValue={setDropdownValue}
                        setItems={setItems}
                        containerStyle={{ width: '75%', }}
                        style={{ backgroundColor: appColors.Secondary }}
                        itemStyle={{
                            justifyContent: 'flex-start',
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                    />
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 50,
        alignItems: 'center',

    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    languageOption: {
        fontSize: 16,
        marginBottom: 10,
    },
    closeButton: {
        fontSize: 16,
        color: 'blue',
        marginTop: 20,
    },
});

export default LanguageSelectionModal;
