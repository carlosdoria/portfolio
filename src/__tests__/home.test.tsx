import {
  render,
  //  screen
} from '@testing-library/react';

import Home from '../pages/index';

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = render(<Home />);

    // expect(
    //   screen.getByRole('heading', { name: /Gerenciador de Links/i }),
    // ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
