import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Segment from '../lib/Segment';

export default {
  title: 'Example/Segment',
  component: Segment,
} as ComponentMeta<typeof Segment>;

const Template: ComponentStory<typeof Segment> = (args) => (
  <Segment {...args} />
);

export const Default = Template.bind({});
Default.args = {
  segments: [{id:'feed', label:'Tab 1'}, {id:'info', label:'Tab 2'}],
  selected: 'feed'
};
 