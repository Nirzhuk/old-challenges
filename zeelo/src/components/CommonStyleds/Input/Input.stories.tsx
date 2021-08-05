import { Story, Meta } from '@storybook/react';

import Input, { InputProps } from '.';

export default {
    title: 'Input',
    component: Input
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const InputText = Template.bind({});
InputText.args = {
    legend: 'Legend',
};
