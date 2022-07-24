import React, { FC } from 'react';
import { AppHeaderContainer, AppHeaderToolbar } from './AppHeader.style';
import { isPlatform } from '@ionic/react';

type AppHeaderProps = {
  fullwidth?: boolean;
};

const AppHeader: FC<AppHeaderProps> = ({ fullwidth = false, children }) => {
  return (
    <AppHeaderContainer>
      <AppHeaderToolbar
        isNotMobile={
          !fullwidth && (isPlatform('desktop') || isPlatform('tablet'))
        }
      >
        {children}
      </AppHeaderToolbar>
    </AppHeaderContainer>
  );
};

export default AppHeader;
