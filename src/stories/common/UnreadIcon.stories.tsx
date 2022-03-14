import { ComponentStory, ComponentMeta } from '@storybook/react';

import UnreadIcon from '../../components/elements/UnreadIcon';

export default {
  title: 'Common/UnreadIcon',
  component: UnreadIcon,
} as ComponentMeta<typeof UnreadIcon>;

const Template: ComponentStory<typeof UnreadIcon> = (args) => <UnreadIcon {...args} />;

export const Default = Template.bind({});
