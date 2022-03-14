import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThumbnailList, { Thumbnail } from '../../components/ThumbnailList';

export default {
  title: 'Common/ThumbnailList',
  component: ThumbnailList,
  argTypes: {
    onChangeStatus: { action: 'clicked' },
    onDelete: { action: 'clicked' },
  },
} as ComponentMeta<typeof ThumbnailList>;

const generateMockThumbnails = (amount: number): Thumbnail[] =>
  Array.from(
    { length: amount },
    (_, i): Thumbnail => ({
      href: `#${i + 1}`,
      img: 'https://picsum.photos/200/200',
      width: 200,
      height: 200,
      title: `Thumbnail N.${i + 1}`,
      description: `Mock description N.${i + 1}`,
    })
  );

const Template: ComponentStory<typeof ThumbnailList> = (args) => (
  <ThumbnailList {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  thumbnails: [],
};

export const WithContent = Template.bind({});
WithContent.args = {
  thumbnails: generateMockThumbnails(3),
};
