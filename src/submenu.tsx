import * as React from 'react';
import {createPortal} from 'react-dom';
import {SyntheticEvent, CSSProperties, ReactNode, useState} from 'react';
import { getMousePosition } from './mouse';

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
  const [position, setPosition] = useState({x: 0, y: 0})
  const onContextMenu = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const position = getMousePosition(e.nativeEvent);
    
    setPosition(position);
    setContentVisible(true);
  }
  const renderContent = () => {
    if (!isContentVisible) return null;
    
    const contentWrapperStyles: CSSProperties = {
      position: 'absolute',
      left: position.x,
      top: position.y
    };

    return createPortal((
      <div style={contentWrapperStyles}>
        {content}
      </div>
    ), contentContainer || document.body)
  }

  return (
    <div onContextMenu={onContextMenu}>
      {children}
      {renderContent()}
    </div>
  )
}