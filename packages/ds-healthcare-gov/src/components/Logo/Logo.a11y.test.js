import { ROOT_URL } from '@cmsgov/design-system-scripts/helpers/a11y/constants';
import assertNoAxeViolations from '@cmsgov/design-system-scripts/helpers/a11y/assertNoAxeViolations';

const rootURL = `${ROOT_URL}/example/components.logo/`;

describe('Logo component', () => {
  it('Should have no accessibility violations', async () => {
    await assertNoAxeViolations(rootURL);
  });
});
