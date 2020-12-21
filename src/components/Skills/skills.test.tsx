import {
  // screen,
  render,
} from '@testing-library/react';

import Skills from './';

describe('<Skills />', () => {
  it('should render the heading', () => {
    const { container } = render(<Skills />);

    // expect(
    //   screen.getByRole('heading', { name: /Skills/i }),
    // ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
