import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '.';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        size: {
            options: ['l', ''],
        },
        buttonType: {
            options: ['', 'primary'],
        },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
};


export const Large = Template.bind({});
Large.args = {
    label: 'Button',
    size: 'l'
};

export const Small = Template.bind({});
Small.args = {
    label: 'Button',
    buttonType: 'primary'
};
