import React from 'react';
import IconWithBadge from './IconWithBadge';

import articles from '../data/articles';

const HomeIconWithBadge = props => {
  const cnt = articles.length ? articles.length : 0;
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={cnt} />;
};
export default HomeIconWithBadge;
