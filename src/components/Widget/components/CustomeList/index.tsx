import React from 'react';
import cn from 'classnames';
import Header from './components/Header'
import { AnyFunction } from '../../../../utils/types';

import './style.scss';

type Props = {
  className: string;
  title: string,
  items?: Array<JSX.Element>
};

function Conversation({
  className,
  title,
  items
}: Props) {
  return (
    <div className={cn('rcw-custom-list-container', className)} aria-live="polite">
      <Header
        title={title}
        toggleChat={() => {}}
        showCloseButton={true}
      />
      <div style={{ maxHeight: 590, overflowY: 'auto'}}>
        {items}
      </div>
    </div>
  );
}

export default Conversation;
