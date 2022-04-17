import React, {MutableRefObject} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {BackIcon, CloseIcon} from 'src/components/SVGs';
import styles from './styles';

export interface BottomSheetProp {
  children?: React.ReactNode;
  title: string;
  height: number;
  forwardedRef: MutableRefObject<any>;
  onOpen?: () => void;
  back?: boolean;
}

const BottomSheet = ({
  title,
  children,
  height,
  forwardedRef,
  back,
  onOpen,
}: BottomSheetProp) => {
  return (
    <RBSheet
      ref={forwardedRef}
      height={height}
      onOpen={onOpen}
      openDuration={200}
      customStyles={{
        container: styles.bottomSheetContainer,
      }}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => forwardedRef.current.close()}
          style={styles.cancelBtn}>
          {back ? <BackIcon /> : <CloseIcon />}
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        {children}
      </View>
    </RBSheet>
  );
};

BottomSheet.defaultProps = {
  title: '',
  height: 300,
  back: false,
  onOpen: () => null,
};

export default BottomSheet;
