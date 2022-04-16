import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BookmarkIcon, RightArrowIcon} from 'src/components/SVGs';
import styles from './styles';

interface RequestItemProps {
  selling: string;
  paying: string;
  rate: string;
  date: string;
  user: string;
  trades: number;
}

const RequestItem = ({
  selling,
  paying,
  rate,
  date,
  user,
  trades,
}: RequestItemProps) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.selling}>
        <Text style={styles.title}>Selling</Text>
        <Text style={styles.amount}>{selling}</Text>
      </View>
      <RightArrowIcon />
      <View style={styles.paying}>
        <Text style={styles.title}>You Paying</Text>
        <Text style={styles.amount}>{paying}</Text>
      </View>
    </View>
    <Text style={styles.rate}>Rate {rate}</Text>
    <View style={styles.dateView}>
      <View style={styles.flexRow}>
        <Text style={styles.user}>@{user}</Text>
        <Text style={styles.date}>({trades} Trades)</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
    <View style={styles.footer}>
      <View style={styles.flexRow}>
        <TouchableOpacity activeOpacity={0.7} style={styles.buyAll}>
          <Text style={styles.buyAllText}>Buy All</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.buySome}>
          <Text style={styles.buySomeText}>Buy Some</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <BookmarkIcon />
      </TouchableOpacity>
    </View>
  </View>
);

RequestItem.defaultProps = {
  selling: '',
  paying: '',
  rate: '',
  date: '',
  user: '',
  trades: 0,
};

export default RequestItem;
