import * as React from 'react';
import {createPortal} from 'react-dom';
import {SyntheticEvent, ReactNode, useState} from 'react';

export interface SubmenuProps {
  children: ReactNode;
  content: ReactNode;
  contentContainer?: Element;
}

export interface SubmenuState {
  
}

export const Submenu = (props: SubmenuProps) => {
  const {content, contentContainer, children} = props;
  const [isContentVisible, setContentVisible] = useState(false);
  const onContextMenu = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setContentVisible(true);
  }
  const renderContent = () => {
    if (!isContentVisible) return null;

    return createPortal(content, contentContainer || document.body)
  }

  return (
    <div onContextMenu={onContextMenu}>
      {children}
      {renderContent()}
    </div>
  )
}