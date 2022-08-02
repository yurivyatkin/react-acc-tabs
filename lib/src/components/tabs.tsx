import * as React from 'react';

export interface ITabProps {
    as?: React.ElementType
    children?: React.ReactNode
}

export function Tab (props: ITabProps) {
  const { as: Elem = "button", children } = props;
  return (
    <Elem>
      {children}
    </Elem>
  );
}
