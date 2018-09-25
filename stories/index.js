import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Options from '../src/components/Options/options';

storiesOf('Options', module)
    .add('Standard', () => (
        <Options item={{
            options: [
                'Option A',
                'Option B',
                'Option C',
                'Option D',
            ]
        }}
        onOptionSelected={action('Option Selected')} />
    ));