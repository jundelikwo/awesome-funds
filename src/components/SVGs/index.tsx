import * as React from 'react';
import Svg, {ClipPath, Defs, G, Mask, Path, Rect} from 'react-native-svg';
import {colors} from 'src/utils/theme';

interface IconProp {
  width: number;
  height: number;
  color?: string;
}

export function LinePathIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 19" fill="none">
      <Path
        d="M21.8324 5.05094L21.0796 4.4931L16.7003 10.6306L17.4531 11.1884L21.8324 5.05094Z"
        fill="#FCFCFE"
      />
      <Path
        d="M13.4611 11.0075L10.7754 8.66211L10.1697 9.38234L12.8554 11.7278L13.4611 11.0075Z"
        fill="#FCFCFE"
      />
      <Path
        d="M7.79401 9.77025L7.05615 9.19202L3.82183 13.4779L4.55969 14.0561L7.79401 9.77025Z"
        fill="#FCFCFE"
      />
      <Path
        d="M22.8051 5.69125C21.2693 5.69125 20.0127 4.41072 20.0127 2.84563C20.0127 1.28053 21.2693 0 22.8051 0C24.341 0 25.5976 1.28053 25.5976 2.84563C25.5976 4.41072 24.341 5.69125 22.8051 5.69125ZM22.8051 0.948542C21.7812 0.948542 20.9435 1.80223 20.9435 2.84563C20.9435 3.88902 21.7812 4.74271 22.8051 4.74271C23.829 4.74271 24.6668 3.88902 24.6668 2.84563C24.6668 1.80223 23.829 0.948542 22.8051 0.948542Z"
        fill="#FCFCFE"
      />
      <Path
        d="M15.3589 15.6509C13.823 15.6509 12.5664 14.3704 12.5664 12.8053C12.5664 11.2402 13.823 9.95966 15.3589 9.95966C16.8947 9.95966 18.1513 11.2402 18.1513 12.8053C18.1513 14.3704 16.8947 15.6509 15.3589 15.6509ZM15.3589 10.9082C14.335 10.9082 13.4972 11.7619 13.4972 12.8053C13.4972 13.8487 14.335 14.7024 15.3589 14.7024C16.3828 14.7024 17.2205 13.8487 17.2205 12.8053C17.2205 11.7619 16.3828 10.9082 15.3589 10.9082Z"
        fill="#FCFCFE"
      />
      <Path
        d="M8.84274 10.4339C7.30689 10.4339 6.05029 9.15339 6.05029 7.5883C6.05029 6.02321 7.30689 4.74268 8.84274 4.74268C10.3786 4.74268 11.6352 6.02321 11.6352 7.5883C11.6352 9.15339 10.3786 10.4339 8.84274 10.4339ZM8.84274 5.69122C7.81884 5.69122 6.98111 6.5449 6.98111 7.5883C6.98111 8.6317 7.81884 9.48538 8.84274 9.48538C9.86664 9.48538 10.7044 8.6317 10.7044 7.5883C10.7044 6.5449 9.86664 5.69122 8.84274 5.69122Z"
        fill="#FCFCFE"
      />
      <Path
        d="M2.79245 18.4965C1.2566 18.4965 0 17.216 0 15.6509C0 14.0858 1.2566 12.8053 2.79245 12.8053C4.32829 12.8053 5.5849 14.0858 5.5849 15.6509C5.5849 17.216 4.32829 18.4965 2.79245 18.4965ZM2.79245 13.7538C1.76855 13.7538 0.930816 14.6075 0.930816 15.6509C0.930816 16.6943 1.76855 17.548 2.79245 17.548C3.81635 17.548 4.65408 16.6943 4.65408 15.6509C4.65408 14.6075 3.81635 13.7538 2.79245 13.7538Z"
        fill="#FCFCFE"
      />
    </Svg>
  );
}

LinePathIcon.defaultProps = {
  height: 19,
  width: 26,
};

export function NotificationIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.50083 13.7871V13.5681C3.53295 12.9202 3.7406 12.2925 4.10236 11.7496C4.7045 11.0975 5.1167 10.2983 5.29571 9.43598C5.29571 8.7695 5.29571 8.0935 5.35393 7.42703C5.65469 4.21842 8.82728 2 11.9611 2H12.0387C15.1725 2 18.345 4.21842 18.6555 7.42703C18.7137 8.0935 18.6555 8.7695 18.704 9.43598C18.8854 10.3003 19.2972 11.1019 19.8974 11.7591C20.2618 12.2972 20.4698 12.9227 20.4989 13.5681V13.7776C20.5206 14.648 20.2208 15.4968 19.6548 16.1674C18.907 16.9515 17.8921 17.4393 16.8024 17.5384C13.607 17.8812 10.383 17.8812 7.18762 17.5384C6.09914 17.435 5.08576 16.9479 4.33521 16.1674C3.778 15.4963 3.48224 14.6526 3.50083 13.7871Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.55518 20.8518C10.0545 21.4784 10.7876 21.884 11.5925 21.9787C12.3973 22.0734 13.2074 21.8495 13.8435 21.3564C14.0391 21.2106 14.2152 21.041 14.3674 20.8518"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

NotificationIcon.defaultProps = {
  height: 24,
  width: 24,
};

export function SwapIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.8397 20.1642V6.54645"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.9173 16.0681L16.8395 20.1648L12.7617 16.0681"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.91102 3.83289V17.4507"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.8335 7.929L6.91127 3.83234L10.9891 7.929"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

SwapIcon.defaultProps = {
  height: 24,
  width: 24,
};

export function SendIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.8554 8.12111L10.1916 13.8227L3.56064 9.74147C2.69176 9.20657 2.86787 7.88697 3.8467 7.60287L19.5022 3.04743C20.3925 2.78978 21.2156 3.62446 20.949 4.51889L16.304 20.1582C16.013 21.1369 14.7082 21.3064 14.1809 20.4325L10.1916 13.8227"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

SendIcon.defaultProps = {
  height: 24,
  width: 24,
};

export function DownIcon({width, height, color}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
      <Path
        d="M5.4345 8.31539C5.4055 8.28714 5.2815 8.18047 5.1795 8.0811C4.538 7.49854 3.488 5.97881 3.1675 5.18339C3.116 5.06259 3.007 4.75718 3 4.59401C3 4.43765 3.036 4.2886 3.109 4.14637C3.211 3.96907 3.3715 3.82684 3.561 3.7489C3.6925 3.69873 4.086 3.6208 4.093 3.6208C4.5235 3.54286 5.223 3.5 5.996 3.5C6.7325 3.5 7.4035 3.54286 7.8405 3.60667C7.8475 3.61398 8.3365 3.69191 8.504 3.77716C8.81 3.93351 9 4.23892 9 4.56576V4.59401C8.9925 4.80687 8.8025 5.25451 8.7955 5.25451C8.4745 6.00706 7.476 7.49172 6.8125 8.08841C6.8125 8.08841 6.642 8.25645 6.5355 8.32952C6.3825 8.4435 6.193 8.5 6.0035 8.5C5.792 8.5 5.595 8.43619 5.4345 8.31539Z"
        fill={color}
      />
    </Svg>
  );
}

DownIcon.defaultProps = {
  height: 12,
  width: 12,
  color: colors.WHITE_LILAC,
};

export function BackIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M20 24L12 16L20 8"
        stroke="#200E32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

BackIcon.defaultProps = {
  height: 32,
  width: 32,
};

export function BackArrowIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        d="M20 11.5H7.83L13.42 5.91L12 4.5L4 12.5L12 20.5L13.41 19.09L7.83 13.5H20V11.5Z"
        fill="black"
      />
    </Svg>
  );
}

BackArrowIcon.defaultProps = {
  height: 25,
  width: 24,
};

export function RightArrowIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
      <Path
        d="M6.07074 3.29495C5.95374 3.35807 5.8808 3.47809 5.8808 3.60863V5.64136H1.86715C1.66448 5.64136 1.5 5.80202 1.5 5.99999C1.5 6.19795 1.66448 6.35862 1.86715 6.35862H5.8808L5.8808 8.39134C5.8808 8.52236 5.95374 8.64239 6.07074 8.70503C6.18773 8.76862 6.33068 8.76432 6.44376 8.69498L10.3287 6.30363C10.4354 6.23764 10.5 6.12336 10.5 5.99999C10.5 5.87662 10.4354 5.76233 10.3287 5.69635L6.44376 3.30499C6.38404 3.26865 6.31599 3.25 6.24795 3.25C6.18724 3.25 6.12605 3.2653 6.07074 3.29495Z"
        fill="#231F20"
      />
    </Svg>
  );
}

RightArrowIcon.defaultProps = {
  height: 12,
  width: 12,
};

export function CloseIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 0C5.38367 0 0 5.38367 0 12C0 18.6163 5.38367 24 12 24C18.6163 24 24 18.6163 24 12C24 5.38367 18.6163 0 12 0ZM16.4191 15.0059C16.8091 15.3959 16.8091 16.0291 16.4191 16.4205C16.2239 16.6154 15.9675 16.7131 15.7126 16.7131C15.4574 16.7131 15.201 16.6154 15.0059 16.4205L12 13.4147L8.99414 16.4205C8.79895 16.6154 8.5426 16.7131 8.28735 16.7131C8.03101 16.7131 7.77612 16.6154 7.58093 16.4205C7.19092 16.0305 7.19092 15.3973 7.58093 15.0059L10.5853 12L7.57947 8.99414C7.18945 8.60413 7.18945 7.97095 7.57947 7.57947C7.96948 7.18799 8.60266 7.18945 8.99414 7.57947L12 10.5853L15.0059 7.57947C15.3959 7.18945 16.0291 7.18945 16.4205 7.57947C16.812 7.96948 16.8105 8.60266 16.4205 8.99414L13.4147 12L16.4191 15.0059Z"
        fill="#979797"
      />
    </Svg>
  );
}

CloseIcon.defaultProps = {
  height: 24,
  width: 24,
};

export function CreditIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 26" fill="none">
      <Rect y="-6.10352e-05" width="26" height="26" rx="8" fill="#C4EFDF" />
      <Mask
        id="mask0_792_208"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="26"
        height="27">
        <Rect y="0.000167847" width="26" height="26" rx="8" fill="#C4EFDF" />
      </Mask>
      <G mask="url(#mask0_792_208)">
        <Path
          d="M18.6218 17.7841L18.1832 10.6608C18.1622 10.3213 17.9392 10.0277 17.6166 9.91769C17.2941 9.80772 16.9376 9.90122 16.7127 10.1558L15.0421 12.0462L0.548674 -0.761661C0.200833 -1.06905 -0.330948 -1.03622 -0.638338 -0.688379L-2.8658 1.83221C-3.17319 2.18005 -3.14036 2.71183 -2.79252 3.01922L11.7009 15.8271L10.0303 17.7176C9.8053 17.9721 9.75524 18.3387 9.90516 18.644C10.054 18.9505 10.3728 19.1358 10.7123 19.1148L17.8344 18.6751C18.2973 18.6466 18.6504 18.2471 18.6218 17.7841Z"
          fill="#02AE97"
        />
      </G>
    </Svg>
  );
}

CreditIcon.defaultProps = {
  height: 26,
  width: 26,
};

export function DebitIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 26" fill="none">
      <Rect y="3.05176e-05" width="26" height="26" rx="8" fill="#FFD4D4" />
      <Mask
        id="mask0_792_209"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="26"
        height="26">
        <Rect y="3.05176e-05" width="26" height="26" rx="8" fill="#FFD4D4" />
      </Mask>
      <G mask="url(#mask0_792_209)">
        <Path
          d="M6.98274 9.01272L7.38228 15.5021C7.40138 15.8113 7.6046 16.0788 7.89843 16.179C8.19227 16.2792 8.517 16.194 8.72195 15.9621L10.2439 14.2399L23.4473 25.9079C23.7642 26.1879 24.2486 26.158 24.5287 25.8411L26.5579 23.5449C26.8379 23.228 26.808 22.7435 26.4911 22.4635L13.2877 10.7955L14.8096 9.07335C15.0145 8.84143 15.0601 8.50754 14.9236 8.2294C14.788 7.95012 14.4975 7.78135 14.1883 7.80044L7.70007 8.201C7.27834 8.22703 6.9567 8.59099 6.98274 9.01272Z"
          fill="#AD283D"
        />
      </G>
    </Svg>
  );
}

DebitIcon.defaultProps = {
  height: 26,
  width: 26,
};

export function HomeIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 23 23" fill="none">
      <G clipPath="url(#clip0_1_4074)">
        <Path
          d="M22.425 9.95899C22.4243 9.95846 22.4238 9.95776 22.4233 9.95723L13.0411 0.575387C12.6412 0.175301 12.1095 -0.0449219 11.5439 -0.0449219C10.9784 -0.0449219 10.4467 0.175301 10.0466 0.575387L0.669291 9.95249C0.666132 9.95565 0.662798 9.95899 0.659815 9.96214C-0.161415 10.7881 -0.160011 12.1282 0.663851 12.9521C1.04025 13.3287 1.5372 13.5466 2.06871 13.5696C2.09047 13.5717 2.11223 13.5727 2.13417 13.5727H2.50793V20.477C2.50793 21.8435 3.61975 22.9551 4.98619 22.9551H8.6568C9.02899 22.9551 9.33063 22.6533 9.33063 22.2813V16.8682C9.33063 16.2447 9.83793 15.7376 10.4614 15.7376H12.6264C13.2499 15.7376 13.757 16.2447 13.757 16.8682V22.2813C13.757 22.6533 14.0587 22.9551 14.4309 22.9551H18.1015C19.4681 22.9551 20.5797 21.8435 20.5797 20.477V13.5727H20.9265C21.4918 13.5727 22.0235 13.3525 22.4238 12.9523C23.2485 12.1272 23.2489 10.7846 22.425 9.95899ZM21.4708 11.9994C21.3253 12.1449 21.1319 12.2251 20.9265 12.2251H19.9059C19.5337 12.2251 19.2321 12.5267 19.2321 12.8989V20.477C19.2321 21.1003 18.7249 21.6075 18.1015 21.6075H15.1047V16.8682C15.1047 15.5018 13.993 14.3899 12.6264 14.3899H10.4614C9.09479 14.3899 7.98297 15.5018 7.98297 16.8682V21.6075H4.98619C4.36289 21.6075 3.85559 21.1003 3.85559 20.477V12.8989C3.85559 12.5267 3.55395 12.2251 3.18176 12.2251H2.17874C2.16821 12.2244 2.15786 12.2239 2.14715 12.2237C1.94641 12.2202 1.75812 12.1405 1.61704 11.9993C1.31697 11.6992 1.31697 11.2108 1.61704 10.9106C1.61721 10.9106 1.61721 10.9104 1.61739 10.9102L1.61792 10.9097L10.9998 1.52822C11.1451 1.38275 11.3383 1.30274 11.5439 1.30274C11.7494 1.30274 11.9426 1.38275 12.0881 1.52822L21.4678 10.9078C21.4692 10.9092 21.4708 10.9106 21.4722 10.912C21.7707 11.2126 21.7702 11.6999 21.4708 11.9994Z"
          fill="#4B4B4B"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_4074">
          <Rect width="23" height="23" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

HomeIcon.defaultProps = {
  height: 23,
  width: 23,
};

export function TransferIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 33 33" fill="none">
      <G opacity="0.4">
        <G clipPath="url(#clip0_1_4069)">
          <Path
            d="M23.2909 6.75351L15.0407 6.03172C14.5804 5.99152 14.1747 6.33207 14.1345 6.79235C14.1152 7.0133 14.1844 7.23282 14.327 7.40276L15.9402 9.32532L11.4542 13.0895C11.1003 13.3865 11.0541 13.9142 11.3511 14.2681C11.6481 14.6221 12.1758 14.6682 12.5297 14.3712L17.6566 10.0693C18.0105 9.7723 18.0567 9.24463 17.7597 8.89068L16.9068 7.87424L22.3118 8.34712L21.8389 13.7522L20.9861 12.7358C20.6891 12.3818 20.1614 12.3356 19.8075 12.6326L12.7581 18.5478L11.1449 16.6252C10.8478 16.2713 10.3201 16.2253 9.96625 16.5224C9.79641 16.6649 9.6901 16.8691 9.67074 17.0901L8.94898 25.3402C8.90878 25.8004 9.24916 26.2061 9.70933 26.2464L17.9595 26.9682C18.1805 26.9875 18.4002 26.9183 18.5701 26.7758C18.6546 26.7054 18.7242 26.6187 18.7747 26.5211C18.9308 26.2209 18.8908 25.8563 18.6732 25.5972L17.06 23.6746L21.546 19.9104C21.8999 19.6134 21.9461 19.0858 21.6491 18.7318C21.3521 18.3779 20.8244 18.3317 20.4705 18.6287L15.3437 22.9306C14.9897 23.2276 14.9436 23.7553 15.2406 24.1092L16.0934 25.1256L10.6884 24.6527L11.1613 19.2477L12.0141 20.2641C12.3111 20.6181 12.8388 20.6642 13.1927 20.3672L20.2421 14.4521L21.8553 16.3747C22.1524 16.7286 22.6801 16.7746 23.0339 16.4775C23.2038 16.335 23.3101 16.1308 23.3294 15.9098L24.0512 7.65967C24.0914 7.19949 23.751 6.79384 23.2909 6.75351Z"
            fill="#231F20"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1_4069">
          <Rect
            width="23.4237"
            height="23.4237"
            fill="white"
            transform="translate(0 15.0564) rotate(-40)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

TransferIcon.defaultProps = {
  height: 33,
  width: 33,
};

export function WalletIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 23 23" fill="none">
      <G opacity="0.4">
        <G clipPath="url(#clip0_1_4077)">
          <Path
            d="M20.8964 5.74506H20.6103V2.9659C20.6103 1.80601 19.6666 0.86232 18.5067 0.86232H3.24935C1.56569 0.86232 0.177513 2.15012 0.0172661 3.79238C-0.00720677 3.90842 0.00150772 2.87442 0.00150772 18.8898C0.00150772 20.6807 1.45845 22.1376 3.24931 22.1376H20.8964C22.0563 22.1376 23 21.194 23 20.034V7.84864C23 6.68875 22.0564 5.74506 20.8964 5.74506ZM3.24935 2.30726H18.5067C18.8699 2.30726 19.1654 2.60274 19.1654 2.96595V5.7451H3.24935C2.2834 5.7451 1.49263 4.98143 1.44857 4.02618C1.49259 3.07088 2.28335 2.30726 3.24935 2.30726ZM20.8964 20.6927H3.24935C2.25522 20.6927 1.44644 19.8839 1.44644 18.8898V6.64243C1.96259 6.98816 2.5828 7.18995 3.24935 7.18995H20.8964C21.2596 7.18995 21.5551 7.48543 21.5551 7.84864V10.7775H16.1184C14.2668 10.7775 12.7604 12.2839 12.7604 14.1354C12.7604 15.987 14.2668 17.4934 16.1184 17.4934H21.5551V20.034C21.5551 20.3972 21.2596 20.6927 20.8964 20.6927ZM21.5551 16.0485H16.1184C15.0635 16.0485 14.2053 15.1904 14.2053 14.1355C14.2053 13.0806 15.0635 12.2225 16.1184 12.2225H21.5551V16.0485Z"
            fill="#231F20"
          />
          <Path
            d="M16.3849 15.1825C16.9631 15.1825 17.4319 14.7137 17.4319 14.1355C17.4319 13.5573 16.9631 13.0885 16.3849 13.0885C15.8066 13.0885 15.3379 13.5573 15.3379 14.1355C15.3379 14.7137 15.8066 15.1825 16.3849 15.1825Z"
            fill="#231F20"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1_4077">
          <Rect width="23" height="23" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

WalletIcon.defaultProps = {
  height: 23,
  width: 23,
};

export function BookmarkIcon({width, height}: IconProp) {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 24" fill="none">
      <Path
        d="M10.5 7C10.5 5.61929 11.6193 4.5 13 4.5H19C20.3807 4.5 21.5 5.61929 21.5 7V18.1315C21.5 18.5308 21.0549 18.769 20.7227 18.5475L16.832 15.9538C16.3282 15.6179 15.6718 15.6179 15.1679 15.9538L11.2773 18.5475C10.9451 18.769 10.5 18.5308 10.5 18.1315V7Z"
        stroke="#231F20"
        strokeOpacity="0.5"
      />
    </Svg>
  );
}

BookmarkIcon.defaultProps = {
  height: 24,
  width: 32,
};
