import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {SearchIcon} from 'src/components/SVGs';
import {colors} from 'src/utils/theme';
import styles from './styles';

interface SearchInputProps {
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
}

const SearchInput = ({value, placeholder, onChangeText}: SearchInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={[styles.container, isFocused && styles.focus]}>
      <SearchIcon />
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.SILVER}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={styles.input}
      />
    </View>
  );
};

SearchInput.defaultProps = {
  value: '',
  placeholder: 'Search',
  onChangeText: () => null,
};

export default SearchInput;
