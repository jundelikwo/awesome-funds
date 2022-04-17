import React, {useCallback, useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AltDownIcon, BackIcon, CloseIcon, DownIcon} from 'src/components/SVGs';
import CustomStatusBar from 'src/components/CustomStatusBar';
import {colors} from 'src/utils/theme';
import {formatCurrency} from 'src/utils/formatter';
import NumPad, {NumPadActionType} from 'src/components/NumPad';
import BottomSheet from 'src/components/BottomSheet';
import SearchInput from 'src/components/SearchInput';
import styles from './styles';

interface UserType {
  name: string;
  tag: string;
  image: number;
  id: string;
}

const recentUsers: UserType[] = [
  {
    name: 'Philip Obioha',
    id: 'Philip',
    tag: '@Enigma',
    image: require('src/assets/images/philip.png'),
  },
  {
    name: 'Babatope Sanni',
    id: 'Babatope',
    tag: '@Batsannn',
    image: require('src/assets/images/babatope.png'),
  },
];

const friends: UserType[] = [
  {
    name: 'Wale Musa',
    id: 'Wale',
    tag: '@Trapper',
    image: require('src/assets/images/wale.png'),
  },
  {
    name: 'Pedro Oconnor',
    id: 'Pedro',
    tag: '@Casper',
    image: require('src/assets/images/pedro.png'),
  },
  {
    name: 'Peter Gordon',
    id: 'Peter',
    tag: '@Casper',
    image: require('src/assets/images/peter.png'),
  },
  {
    name: 'Modupeola Ariyibi-Oke',
    id: 'Modupeola',
    tag: '@Modupeola$',
    image: require('src/assets/images/modupeola.png'),
  },
  {
    name: 'Erika Henderson',
    id: 'Erika',
    tag: '@Casper',
    image: require('src/assets/images/erika.png'),
  },
];

const SendFunds = ({navigation}: ScreenProp) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [searchText, setSearchText] = useState('');
  const [sendToTab, setSendToTab] = useState<'tag' | 'bank'>('tag');
  const [selectedUser, setSelectedUser] = useState<UserType>();
  const sendToSheet = useRef<any>(null);

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
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.sendToBtn}
            onPress={() => sendToSheet.current.open()}>
            <Text style={styles.sendTo}>Send To:</Text>
            {selectedUser ? (
              <View style={styles.sendToUser}>
                <Image
                  source={selectedUser.image}
                  style={styles.selectedUserImage}
                />
                <View style={styles.sendToNameView}>
                  <Text numberOfLines={1} style={styles.userName}>
                    {selectedUser.name}
                  </Text>
                  <Text numberOfLines={1} style={styles.userTag}>
                    {selectedUser.tag}
                  </Text>
                </View>
              </View>
            ) : (
              <Text style={styles.sendTo}>Select Option</Text>
            )}
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
        <BottomSheet height={550} forwardedRef={sendToSheet} title="Send To ?">
          <View style={styles.tabView}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setSendToTab('tag')}
              style={[styles.tab, sendToTab === 'tag' && styles.activeTab]}>
              <Text
                style={[
                  styles.tabText,
                  sendToTab === 'tag' && styles.activeTabText,
                ]}>
                Fetch Tag
              </Text>
            </TouchableOpacity>
            <View style={styles.space} />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setSendToTab('bank')}
              style={[styles.tab, sendToTab === 'bank' && styles.activeTab]}>
              <Text
                style={[
                  styles.tabText,
                  sendToTab === 'bank' && styles.activeTabText,
                ]}>
                Bank Account
              </Text>
            </TouchableOpacity>
          </View>
          {sendToTab === 'tag' && (
            <View style={styles.search}>
              <SearchInput
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Search @fetchtag"
              />
            </View>
          )}
          {sendToTab === 'tag' && selectedUser ? (
            <View>
              <Text style={styles.userSection}>Selected</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.selectedUser}
                onPress={() => setSelectedUser(undefined)}>
                <Image
                  source={selectedUser.image}
                  style={styles.selectedUserImage}
                />
                <View style={styles.selectedUserNameView}>
                  <Text numberOfLines={1} style={styles.userName}>
                    {selectedUser.name}
                  </Text>
                  <Text numberOfLines={1} style={styles.userTag}>
                    {selectedUser.tag}
                  </Text>
                </View>
                <View style={styles.selectedUserClose}>
                  <CloseIcon color={colors.ORANGE} width={14} height={14} />
                </View>
              </TouchableOpacity>
            </View>
          ) : null}
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={styles.sheetScrollView}>
            {sendToTab === 'tag' ? (
              <View>
                <Text style={styles.userSection}>Recent</Text>
                {recentUsers.map(item => (
                  <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.7}
                    style={styles.userBtn}
                    onPress={() => setSelectedUser(item)}>
                    <Image source={item.image} style={styles.userImage} />
                    <View style={styles.userNameView}>
                      <Text numberOfLines={1} style={styles.userName}>
                        {item.name}
                      </Text>
                      <Text numberOfLines={1} style={styles.userTag}>
                        {item.tag}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.userInActive,
                        selectedUser?.id === item.id && styles.userActive,
                      ]}
                    />
                  </TouchableOpacity>
                ))}
                <Text style={styles.userSection}>Friends</Text>
                {friends.map(item => (
                  <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.7}
                    style={styles.userBtn}
                    onPress={() => setSelectedUser(item)}>
                    <Image source={item.image} style={styles.userImage} />
                    <View style={styles.userNameView}>
                      <Text numberOfLines={1} style={styles.userName}>
                        {item.name}
                      </Text>
                      <Text numberOfLines={1} style={styles.userTag}>
                        {item.tag}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.userInActive,
                        selectedUser?.id === item.id && styles.userActive,
                      ]}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <View>
                <Text style={styles.label}>Bank Name</Text>
                <View style={[styles.bankNameView, styles.margin24Bottom]}>
                  <Text style={styles.placeholder}>Select options</Text>
                  <AltDownIcon />
                </View>
                <Text style={styles.label}>Account Number</Text>
                <TextInput
                  value={accountNumber}
                  keyboardType="numeric"
                  placeholder="1234567890"
                  placeholderTextColor={colors.THUNDER05}
                  onChangeText={setAccountNumber}
                  style={styles.accountNumber}
                />
                <View style={styles.accountName}>
                  <Text style={styles.label}>Account Name</Text>
                  <View style={styles.bankNameView}>
                    <Text style={styles.placeholder}>Autofilled</Text>
                  </View>
                </View>
              </View>
            )}
          </ScrollView>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.btn, styles.sheetBtn]}>
            <Text style={styles.btnText}>Send Funds</Text>
          </TouchableOpacity>
        </BottomSheet>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SendFunds;
