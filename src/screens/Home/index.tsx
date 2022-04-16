import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors} from 'src/utils/theme';
import {
  DownIcon,
  HomeIcon,
  LinePathIcon,
  NotificationIcon,
  SendIcon,
  SwapIcon,
  TransferIcon,
  WalletIcon,
} from 'src/components/SVGs';
import {formatCurrency} from 'src/utils/formatter';
import TransactionItem from 'src/components/TransactionItem';
import RequestItem from 'src/components/RequestItem';
import CustomStatusBar from 'src/components/CustomStatusBar';
import styles from './styles';

const Home = ({navigation}: ScreenProp) => {
  return (
    <SafeAreaProvider>
      <CustomStatusBar color={colors.THUNDER} barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.flexRow}>
            <LinePathIcon />
            <NotificationIcon />
          </View>
          <View style={styles.headerWalletView}>
            <Text style={styles.headerWallet}>NGN Wallet</Text>
            <DownIcon />
          </View>
          <View style={styles.flexRow}>
            <View style={styles.headerAmountView}>
              <Text style={styles.headerCurrency}>₦</Text>
              <Text style={styles.headerAmount}>
                {formatCurrency({
                  amount: 3200002300,
                  hideCurrency: true,
                  nairaOnly: true,
                })}
              </Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.fundWalletBtn}>
              <Text style={styles.fundWallet}>+ Fund Wallet</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerFooter}>
            <TouchableOpacity activeOpacity={0.7} style={styles.exchange}>
              <SwapIcon />
              <Text style={styles.headerFooterText}>Exchange</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.sendFunds}
              onPress={() => navigation.navigate('SendFunds')}>
              <SendIcon />
              <Text style={styles.headerFooterText}>Send Funds</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.scrollView}>
          <View style={styles.content}>
            <View style={styles.transactionSection}>
              <Text style={styles.sectionTitle}>Transactions</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.showAll}>Show All</Text>
              </TouchableOpacity>
            </View>
            <TransactionItem
              title="Fund Wallet"
              type="credit"
              date="Today"
              amount={900000}
            />
            <TransactionItem
              title="Paid @layorfunds"
              type="debit"
              date="Yesterday"
              amount={2000000}
            />
            <TransactionItem
              title="Fund Wallet"
              type="credit"
              date="Today"
              amount={2000000}
            />
            <View style={styles.requestSection}>
              <Text style={styles.sectionTitle}>Recent Request</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.showAll}>Show All</Text>
              </TouchableOpacity>
            </View>
            <RequestItem
              selling="31,000 GBP"
              paying="15,500,000 NGN"
              rate="500NGN / 1 GBP"
              date="2h ago"
              user="fatfam"
              trades={23}
            />
            <RequestItem
              selling="3,600 GBP"
              paying="2,552,000 NGN"
              rate="709NGN / 1 GBP"
              date="7h ago"
              user="Layorfunds"
              trades={302}
            />
            <RequestItem
              selling="3,600 GBP"
              paying="2,552,000 NGN"
              rate="709NGN / 1 GBP"
              date="9h ago"
              user="Kunle"
              trades={23}
            />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity activeOpacity={0.7} style={styles.activeBtn}>
            <HomeIcon />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
            <TransferIcon />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
            <WalletIcon />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
            <Image
              source={require('src/assets/images/profile.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
