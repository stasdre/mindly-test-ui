import styled from 'styled-components';
import { IonHeader, IonToolbar } from '@ionic/react';
import { maxContainerWidth } from '../Theme/mindly_constants';

type AppHeaderToolbarProps = {
  isNotMobile: boolean;
};

export const AppHeaderContainer = styled(IonHeader)`
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
`;

export const AppHeaderToolbar = styled(IonToolbar)<AppHeaderToolbarProps>`
  max-width: ${({ isNotMobile }) => (isNotMobile ? maxContainerWidth : '100%')};
  padding: 0 16px;
`;
