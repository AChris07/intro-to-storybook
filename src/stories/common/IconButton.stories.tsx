import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconButton from '../../components/IconButton';

export default {
  title: 'Common/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  icon: 'fa-times-circle',
  text: 'Mock Text',
};

export const IconWithText = Template.bind({});
IconWithText.args = {
  icon: 'fa-home',
};

export const JustText = Template.bind({});
JustText.args = {
  text: 'Mock Text',
};
