import {StyleSheet} from 'react-native';
import {colors, typography} from 'src/utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  content: {
    paddingHorizontal: 24,
  },
  header: {
    padding: 24,
    paddingTop: 15,
    backgroundColor: colors.THUNDER,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerWalletView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  headerWallet: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: typography.EUCLID_CIRCULAR_A_MEDIUM,
    color: colors.WHITE_LILAC,
    paddingRight: 6,
  },
  fundWalletBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 96,
    backgroundColor: colors.TUNDORA,
  },
  fundWallet: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: typography.EUCLID_CIRCULAR_A_MEDIUM,
    color: colors.WHITE,
  },
  headerAmount: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: typography.EUCLID_CIRCULAR_A_SEMIBOLD,
    color: colors.SOLITUDE,
  },
  headerCurrency: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: typography.EUCLID_CIRCULAR_A_BOLD,
    color: colors.SOLITUDE,
    paddingRight: 3,
  },
  headerAmountView: {
    flexDirection: 'row',
    paddingTop: 6,
  },
  headerFooter: {
    flexDirection: 'row',
    paddingTop: 24,
  },
  headerFooterText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: typography.EUCLID_CIRCULAR_A_SEMIBOLD,
    color: colors.WHITE,
    paddingLeft: 8,
  },
  exchange: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: colors.ABBEY,
    borderWidth: 1,
    borderColor: colors.ABBEY,
    flex: 1,
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
  },
  sendFunds: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: colors.ABBEY,
    borderWidth: 1,
    borderColor: colors.ABBEY,
    flex: 1,
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.CATSKILL_WHITE,
  },
  sectionTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: typography.EUCLID_CIRCULAR_A_MEDIUM,
    color: colors.THUNDER05,
  },
  showAll: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: typography.EUCLID_CIRCULAR_A_SEMIBOLD,
    color: colors.THUNDER,
  },
  transactionSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 32,
    paddingTop: 37,
  },
  requestSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 24,
    paddingTop: 8,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
  },
  activeBtn: {
    flex: 1,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.TUNDORA,
  },
  btn: {
    flex: 1,
    height: 65,
    paddingTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
  },
});

export default styles;
