import { Story, Meta } from '@storybook/react';

import Skeleton, { SkeletonProps } from '.';

export default {
    title: 'Skeleton',
    component: Skeleton,
    argTypes: {
        width: {
            type: { name: 'string', required: true },
            control: {
                type: 'text'
            }
        },
        height: {
            type: { name: 'string', required: true },
            control: {
                type: 'text'
            }
        },
        border: {
            control: {
                type: 'boolean'
            }
        },
    },
} as Meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Solo = Template.bind({});
Solo.args = {
    width: '300px',
    height: '300px'
};
