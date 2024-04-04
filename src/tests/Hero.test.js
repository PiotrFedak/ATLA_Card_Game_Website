import React from 'react';
import { render } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero component', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Hero />);

        expect(getByText('ATLA CARD GAME.')).toBeInTheDocument();
        expect(getByText('Are you tired of Hearthstone?')).toBeInTheDocument();

    });

});
