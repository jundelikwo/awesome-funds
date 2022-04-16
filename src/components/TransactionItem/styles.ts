import {StyleSheet} from 'react-native';
import {colors, typography} from 'src/utils/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    marginLeft: 8,
  },
  amount: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: typography.EUCLID_CIRCULAR_A_SEMIBOLD,
    color: colors.THUNDER,
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: typography.EUCLID_CIRCULAR_A_MEDIUM,
    color: colors.THUNDER,
  },
  date: {
    fontSize: 12,
    lineHeight: 17,
    fontFamily: typography.EUCLID_CIRCULAR_A_REGULAR,
    color: colors.THUNDER05,
  },
});

export default styles;
