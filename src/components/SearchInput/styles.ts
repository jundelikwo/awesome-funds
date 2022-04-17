import {StyleSheet} from 'react-native';
import {colors, typography} from 'src/utils/theme';

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: colors.WHITE,
    borderWidth: 0.5,
    borderColor: colors.THUNDER05,
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    borderRadius: 4,
  },
  focus: {
    borderColor: colors.AZURE,
  },
  input: {
    fontFamily: typography.EUCLID_CIRCULAR_A_REGULAR,
    fontSize: 14,
    color: colors.THUNDER,
    flex: 1,
    height: 48,
    textAlignVertical: 'center',
    marginLeft: 10,
  },
});

export default styles;
