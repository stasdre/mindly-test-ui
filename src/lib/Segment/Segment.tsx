import {IonSegmentButton, setupIonicReact} from '@ionic/react';
import React, { FC } from 'react';
import { SegmentLabel, SegmentWrapper } from './Segment.style';
import { SegmentType } from './types';

setupIonicReact({
  mode:'ios'
});


type SegmentProps = {
  segments: SegmentType[];
  selected?: string;
  onChange?: (id: string) => void;
};

const Segment: FC<SegmentProps> = ({ segments, selected, onChange }) => {
  return (
    <SegmentWrapper
      scrollable
      mode="ios"
      value={selected}
      onIonChange={(e) => onChange?.(e.detail.value as string)}
    >
      {segments.map((item) => (
        <IonSegmentButton key={item.id} value={item.id}>
          <SegmentLabel>{item.label}</SegmentLabel>
        </IonSegmentButton>
      ))}
    </SegmentWrapper>
  );
};

export default Segment;
