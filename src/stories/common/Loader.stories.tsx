import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loader from '../../components/elements/Loader';

export default {
  title: 'Common/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
};

export const NotVisible = Template.bind({});
NotVisible.args = {
  isVisible: false,
};
