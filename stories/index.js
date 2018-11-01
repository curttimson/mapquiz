import React from 'react';
import { storiesOf, action } from '@storybook/react';
import MapDisplay from '../src/components/MapDisplay/map-display';
import Options from '../src/components/Options/options';

storiesOf('Map Display', module)
    .add('UK', () => {
        const mapItem = {
            lat: 51.5074,
            long: 0.1278,
        };
        return (<MapDisplay item={mapItem} />);
    });

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