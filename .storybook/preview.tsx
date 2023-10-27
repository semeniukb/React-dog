import type { Preview } from '@storybook/react';
import React from 'react';
import { DogAppThemeProvider } from '../src/theme';

const preview: Preview = {
    decorators: [
        Story => (
            <DogAppThemeProvider>
                <Story />
            </DogAppThemeProvider>
        )
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        backgrounds: {
            default: 'twitter',
            values: [
                {
                    name: 'twitter',
                    value: '#00aced',
                },
                {
                    name: 'facebook',
                    value: '#3b5998',
                },
                {
                    name: 'white',
                    value: '#fff',
                }
            ],
        },
    }
};

export default preview;