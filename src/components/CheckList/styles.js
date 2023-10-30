import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 0 22px;
`;

export const TableContainer = styled.View`
  flex: 1;
`;

export const Table = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  border-width: 0 0 1px 0;
  border-color: #606f7e;
  padding: 5px 0;
`;

export const Tr = styled.View`
  width: 80px;
`;

export const ViewName = styled.View`
  align-items: left;
`;

export const IconAction = styled.TouchableOpacity`
  width: 40px;
  align-items: center;
`;
