import { ComponentStory, ComponentMeta } from '@storybook/react';

import PostDetails from '../../components/PostDetails';
import { Post } from '../../types/posts';

export default {
  title: 'Reddit/DetailsPost',
  component: PostDetails,
} as ComponentMeta<typeof PostDetails>;

const mockPost: Post = {
  id: `mock-id`,
  title: `Mock Post`,
  thumbnail: 'https://picsum.photos/id/293/200',
  author: `Mock Author`,
  entryDate: 1619382797,
  numComments: 1337,
  isRead: false,
};

const Template: ComponentStory<typeof PostDetails> = (args) => <PostDetails {...args} />;

export const WithoutSelection = Template.bind({});
WithoutSelection.args = {
  post: undefined,
};

export const SelectedPost = Template.bind({});
SelectedPost.args = {
  post: mockPost,
};
