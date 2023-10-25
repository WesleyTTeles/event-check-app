import styled from "styled-components/native";

export const Text = styled.Text`
  font-family: ${({ weight }) =>
    weight ? `GeneralSans-${weight}` : "GeneralSans-400"};
  color: ${({ color }) => color || "#605F69"};
  font-size: ${({ size }) => (size ? `${size}px` : "14px")};
  opacity: ${({ opacity }) => opacity || 1};
`;
