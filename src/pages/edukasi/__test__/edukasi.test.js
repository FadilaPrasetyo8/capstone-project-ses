import { render, screen, waitFor } from '@testing-library/react';

import Education from '../index'

describe("Component Edukasi", () => {

    test("Show edukasi list when api responds", () => {
        render(<Education />)
        waitFor(() => {
            screen.getByText("Title")
        })
    });

    test(" it should be render component edukasi", () => {
        render(<Education />)
        expect(screen.queryByTestId('content-item')).toBeDefined();
    });
      
})

