import React from 'react';
import { action } from '@storybook/addon-actions';
import Badge, { colors } from '../ui/global/atoms/Badge';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'Badge',
    component: Badge,
    decorators: [withKnobs]
};

export const Grey = () => <Badge text={text("Label", "Designer")} color={colors.grey}/>;

export const Purple = () => <Badge text={text("Label", "Developer")} color={colors.purple}/>;
