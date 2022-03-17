import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeroBanner from '../../components/HeroBanner';

export default {
  title: 'Common/HeroBanner',
  component: HeroBanner,
} as ComponentMeta<typeof HeroBanner>;

const Template: ComponentStory<typeof HeroBanner> = (args) => <HeroBanner {...args} />;

export const WithTitle = Template.bind({});
WithTitle.args = {
  img: 'https://picsum.photos/id/271/2000/400',
  title: 'Mock title',
  height: 400,
};

export const WithTitleAndSubtitle = Template.bind({});
WithTitleAndSubtitle.args = {
  img: 'https://picsum.photos/id/271/2000/400',
  title: 'Mock title',
  subtitle: 'Mock subtitle',
  height: 400,
};
