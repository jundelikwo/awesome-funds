import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BackIcon, DownIcon} from 'src/components/SVGs';
import CustomStatusBar from 'src/components/CustomStatusBar';
import {colors} from 'src/utils/theme';
import {formatCurrency} from 'src/utils/formatter';
import NumPad, {NumPadActionType} from 'src/components/NumPad';
import styles from './styles';

const SendFunds = ({navigation}: ScreenProp) => {
  const [amount, setAmount] = useState('');

  const handleNumPadPress = useCallback(
    (action: NumPadActionType) => {
      let newAmount = amount;
      if (action === 'back') {
        newAmount = newAmount.substring(0, newAmount.length - 1);
      } else {
        newAmount += action;
      }

      setAmount(parseInt(newAmount, 10).toString());
    },
    [amount],
  );

  return (
    <SafeAreaProvider>
      <CustomStatusBar color={colors.CATSKILL_WHITE} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.heading}>
            <TouchableOpacity activeOpacity={0.7} onPress={navigation.goBack}>
              <BackIcon />
            </TouchableOpacity>
            <Text style={styles.title}>Send Funds</Text>
          </View>
          <View style={styles.balanceView}>
            <Text style={styles.balance}>
              <Text style={styles.balanceText}>Bal: </Text>352,000 NGN
            </Text>
          </View>
          <View style={styles.flexRow}>
            <View style={styles.currencyView}>
              <Text style={styles.currency}>NGN</Text>
              <DownIcon color={colors.TUNDORA} />
            </View>
            <View style={styles.amountView}>
              <Text style={styles.amountText}>Amount</Text>
              <Text style={styles.amount}>
                {formatCurrency({
                  amount: parseInt(amount, 10) * 100,
                  hideCurrency: true,
                  nairaOnly: true,
                })}
              </Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.sendToBtn}>
            <Text style={styles.sendTo}>Send To:</Text>
            <Text style={styles.sendTo}>Select Option</Text>
            <DownIcon color={colors.TUNDORA} />
          </TouchableOpacity>
          <Text style={styles.withdrawal}>
            Withdrawal can only be done to local banks
          </Text>
        </View>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <NumPad onPress={handleNumPadPress} />
          <View style={styles.charge}>
            <Text style={styles.chargeText}>
              You will be charged 0 NGN to fund NGN Wallet
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SendFunds;
