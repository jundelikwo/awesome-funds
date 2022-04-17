import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BackArrowIcon, FaceIdIcon} from 'src/components/SVGs';
import styles from './styles';

export type NumPadActionType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '0'
  | '00'
  | 'back';

interface NumPadProps {
  face?: boolean;
  onPress: (action: NumPadActionType) => void;
}

const NumPad = ({face, onPress}: NumPadProps) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => onPress('1')}>
        <Text style={styles.text}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => onPress('2')}>
        <Text style={styles.text}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => onPress('3')}>
        <Text style={styles.text}>3</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => onPress('4')}>
        <Text style={styles.text}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => onPress('5')}>
        <Text style={styles.text}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => onPress('6')}>
        <Text style={styles.text}>6</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => onPress('7')}>
        <Text style={styles.text}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => onPress('8')}>
        <Text style={styles.text}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => onPress('9')}>
        <Text style={styles.text}>9</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => {
          if (!face) {
            onPress('00');
          }
        }}>
        {face ? <FaceIdIcon /> : <Text style={styles.text}>00</Text>}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => onPress('0')}>
        <Text style={styles.text}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => onPress('back')}>
        <BackArrowIcon />
      </TouchableOpacity>
    </View>
  </View>
);

NumPad.defaultProps = {
  selling: '',
  paying: '',
  rate: '',
  date: '',
  user: '',
  trades: 0,
};

export default NumPad;
