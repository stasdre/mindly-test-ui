import React, { useState } from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import { 
  IonApp, IonContent, IonPage, setupIonicReact, IonList, IonButton
} from "@ionic/react";

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme.css'

setupIonicReact({
  rippleEffect: false,
})

const IonWrapper = ({ children }) => {
  return (
    <IonApp>
      <IonPage style={{ margin: '16px' }}>
        <IonContent>{children}</IonContent>
      </IonPage>
    </IonApp>
  );
};

export const decorators = [
  (Story) => (
    <IonWrapper>
      <Story />
    </IonWrapper>
  ),
]

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  layout: 'fullscreen',
  chromatic: {
    viewports: [
      // iPhone X
      375
    ],
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphonex',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  styles: [
    "./theme.css"
  ],
};
