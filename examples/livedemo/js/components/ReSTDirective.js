import _ from 'lodash';
import React from 'react';
import ReST from './ReST';

export default function ReSTDirective({ element, key }) {
  const children = _.map(element.children, (e, k) => new ReST({ element: e, key: k }));
  return <div className={element.directive} key={key}>{children}</div>;
}
