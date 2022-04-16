import React from 'react';
import {SafeAreaView, StatusBar, StatusBarStyle, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface CustomStatusBarProps {
  color: string;
  barStyle: StatusBarStyle;
}

const CustomStatusBar = ({barStyle, color}: CustomStatusBarProps) => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        height: StatusBar.currentHeight || top,
        backgroundColor: color,
      }}>
      <SafeAreaView style={{backgroundColor: color}}>
        <StatusBar translucent barStyle={barStyle} backgroundColor={color} />
      </SafeAreaView>
    </View>
  );
};

export default CustomStatusBar;
