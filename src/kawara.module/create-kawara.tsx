import React from 'react';
import {KawaraPassingProps, Kawara} from './organisms/kawara';
import * as atoms from './atoms';

export const createKawara: (
  components: Partial<typeof atoms>,
) => React.SFC<KawaraPassingProps> = (components: Partial<typeof atoms>) => {
  return props => {
    const Component = Kawara as React.ComponentClass<KawaraPassingProps>;
    return <Component components={components} {...props} />;
  };
};
