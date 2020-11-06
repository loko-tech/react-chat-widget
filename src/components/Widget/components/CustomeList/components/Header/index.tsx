import React from 'react';

const close = require('../../../../../../../assets/clear-button.svg') as string;

import './style.scss';

type Props = {
  title: string;
  toggleChat: () => void;
  showCloseButton: boolean;
}

function Header({ title, toggleChat, showCloseButton }: Props) {
  return (
    <div className="rcw-header">
      {showCloseButton &&
        <button className="rcw-close-button" onClick={toggleChat}>
          <img src={close} className="rcw-close" alt="close" />
        </button>
      }
      <h4 className="rcw-title">
        {title}
      </h4>
    </div>
  );
}

export default Header;
