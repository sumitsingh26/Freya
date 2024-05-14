// MainContent.js
import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import SearchResultView from './SearchResultView';
import {appColors, tmpSearchData} from '../utils/constant';
import {scaleHeight} from '../utils/screenUtils';
import Icon from 'react-native-vector-icons/Ionicons';

const AppSearchBar = ({data}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false); // Autofocus on mount

  const inputRef = useRef(null);
  const searchData = data || tmpSearchData;
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSearch = query => {
    setSearchQuery(query);

    const results = searchData.filter(item =>
      item.toLowerCase().includes(query?.toLowerCase()),
    );
    setSearchResults(results);
  };

  const handleOutsidePress = () => {
    // Unfocus TextInput when tapping outside
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View
        style={
          isFocused ? styles.focusedSearchContainer : styles.searchContainer
        }>
        <TextInput
          ref={inputRef}
          style={[isFocused ? styles.focusedSearchInput : styles.searchInput]}
          placeholder="Search..."
          onChangeText={handleSearch}
          value={searchQuery}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={appColors.TextPrimary}
        />
        {isFocused && searchQuery?.length > 0 && searchResults?.length > 0 && (
          <View style={styles.resultsContainer}>
            <SearchResultView results={searchResults} />
            <Icon
              name={'close'}
              size={30}
              color={appColors.Secondary}
              style={{padding: 10, alignSelf: 'flex-end'}}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppSearchBar;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  searchContainer: {
    backgroundColor: appColors.Primary,
    borderRadius: 40,
    flex: 1,
    marginEnd: 10,
    height: scaleHeight(45),
  },
  searchInput: {
    borderRadius: 20,
    paddingLeft: 15,
    textAlign: 'center',
    flex: 1,
    color: appColors.TextPrimary,
    height: '100%',
  },
  focusedSearchContainer: {
    backgroundColor: appColors.TextPrimary,
    borderWidth: 2,
    borderColor: appColors.Primary,
    borderRadius: 40,
    marginEnd: 10,
    flex: 1,
    height: scaleHeight(45),
    zIndex : 999
  },
  focusedSearchInput: {
    color: appColors.Primary,
    borderRadius: 20,
    paddingLeft: 15,
    flex: 1,
    height: '100%',
  },
  resultsContainer: {
    position: 'absolute',
    top: 45, 
    left: '10%',
    right: '10%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    maxHeight: scaleHeight(200),
   zIndex: Number.MAX_SAFE_INTEGER - 1,
    borderWidth: 2,
    borderColor: appColors.Primary,
    borderEndEndRadius: 20,
    borderEndStartRadius: 20,
  },
});
