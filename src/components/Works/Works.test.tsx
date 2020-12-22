import { screen, render } from '@testing-library/react';

import Works from './';

describe('<Works />', () => {
  it('should render the heading', () => {
    const { container } = render(<Works />);

    // expect(
    //   screen.getByRole('heading', { name: /Works/i }),
    // ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
