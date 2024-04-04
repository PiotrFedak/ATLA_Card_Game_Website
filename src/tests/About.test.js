import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About';

describe('About component', () => {
    it('displays elements', () => {
        const { getByText, getByAltText } = render(<About />);

        expect(getByText('Elements')).toBeInTheDocument();
        expect(getByAltText('fire Icon')).toBeInTheDocument();
    });

    it('checks if Airbending text is present', () => {
        const { getByText } = render(<About />);
        expect(getByText(/Airbending/i)).toBeInTheDocument();
    });

    it('checks if Firebending text is present', () => {
        const { getByText } = render(<About />);
        expect(getByText(/Firebending/i)).toBeInTheDocument();
    });

    it('checks if Waterbending text is present', () => {
        const { getByText } = render(<About />);
        expect(getByText(/Waterbending/i)).toBeInTheDocument();
    });
});