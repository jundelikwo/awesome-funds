import React from 'react';
import {Text, View} from 'react-native';
import {CreditIcon, DebitIcon} from 'src/components/SVGs';
import {formatCurrency} from 'src/utils/formatter';
import styles from './styles';

interface TransactionItemProps {
  title: string;
  date: string;
  amount: number;
  type: 'credit' | 'debit';
}

const TransactionItem = ({title, date, amount, type}: TransactionItemProps) => (
  <View style={styles.container}>
    <View style={styles.content}>
      {type === 'credit' ? <CreditIcon /> : <DebitIcon />}
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
    <Text style={styles.amount}>
      {type === 'credit' ? '+' : '-'}{' '}
      {formatCurrency({
        amount,
        hideCurrency: true,
        nairaOnly: true,
      })}
      NGN
    </Text>
  </View>
);

TransactionItem.defaultProps = {
  title: '',
  date: '',
  amount: 0,
};

export default TransactionItem;
