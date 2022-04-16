import {StyleSheet} from 'react-native';
import {colors, typography} from 'src/utils/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 26,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 42,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    lineHeight: 41,
    fontFamily: typography.EUCLID_CIRCULAR_A_REGULAR,
    color: colors.BLACK,
  },
});

export default styles;
