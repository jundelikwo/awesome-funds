import {StyleSheet} from 'react-native';
import {colors, typography} from 'src/utils/theme';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    height: '100%',
  },
  title: {
    fontFamily: typography.EUCLID_CIRCULAR_A_SEMIBOLD,
    fontSize: 16,
    lineHeight: 20,
    color: colors.THUNDER,
    textAlign: 'center',
  },
  bottomSheetContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  cancelBtn: {
    position: 'absolute',
    zIndex: 1,
    top: 24,
    left: 24,
  },
});

export default styles;
