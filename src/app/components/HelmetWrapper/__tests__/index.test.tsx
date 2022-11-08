import { render, cleanup, MockHelmetWrapper } from 'jest.setup';

import { HelmetWrapper } from 'app/components/HelmetWrapper/index';

afterEach(cleanup);

const renderComponent = () =>
  render(
    <MockHelmetWrapper>
      <HelmetWrapper title="home" description="home page" />
    </MockHelmetWrapper>,
  );

describe('<HelmetWrapper  />', () => {
  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderComponent();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toMatchSnapshot();
  });
});
