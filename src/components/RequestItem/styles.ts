import {StyleSheet} from 'react-native';
import {colors, typography} from 'src/utils/theme';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.CONCRETE,
    marginBottom: 18,
  },
  header: {
    flexDirection: 'row',
  },
  amount: {
    fontSize: 12,
    lineHeight: 17,
    fontFamily: typography.EUCLID_CIRCULAR_A_SEMIBOLD,
    color: colors.THUNDER,
  },
  title: {
    fontSize: 12,
    lineHeight: 17,
    fontFamily: typography.EUCLID_CIRCULAR_A_REGULAR,
    color: colors.THUNDER05,
  },
  selling: {
    marginRight: 46,
  },
  paying: {
    marginLeft: 46,
  },
  rate: {
    fontSize: 10,
    lineHeight: 14,
    fontFamily: typography.EUCLID_CIRCULAR_A_REGULAR,
    color: colors.THUNDER05,
    marginVertical: 8,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: typography.EUCLID_CIRCULAR_A_REGULAR,
    color: colors.THUNDER,
    marginRight: 8,
  },
  date: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: typography.EUCLID_CIRCULAR_A_REGULAR,
    color: colors.THUNDER05,
  },
  buyAll: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: colors.ALTO,
    marginRight: 16,
  },
  buyAllText: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: typography.EUCLID_CIRCULAR_A_REGULAR,
    color: colors.TUNDORA,
  },
  buySome: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: colors.SEASHELL_PEACH,
  },
  buySomeText: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: typography.EUCLID_CIRCULAR_A_REGULAR,
    color: colors.KOROMIKO,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default styles;
