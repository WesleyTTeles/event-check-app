import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  flex: 1;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 24px;
`;
