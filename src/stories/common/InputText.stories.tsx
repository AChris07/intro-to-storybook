import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputText from '../../components/InputText';

export default {
  title: 'Common/InputText',
  component: InputText,
  argTypes: {
    value: {
      disable: true,
    },
  },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <>
      <InputText
        {...args}
        onChange={(newValue) => {
          args.onChange(newValue);
          setValue(newValue);
        }}
        value={value}
      />
      <pre style={{ marginTop: 10 }}>{JSON.stringify({ value }, null, 2)}</pre>
    </>
  );
};

export const Default = Template.bind({});

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Type text here!',
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  placeholder: 'Type text here!',
  value: 'Mock Text',
};
