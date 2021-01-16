import React from 'react';

type propsLoadingCollectionItemsBtn = {
  className: any,
  handleLoadItem(e:React.MouseEvent<HTMLButtonElement>): void,
  handlerGetButtonText(e:React.MouseEvent<HTMLButtonElement>): void,
}

export const LoadCollectionItemsBtn: React.FC<propsLoadingCollectionItemsBtn> = (
  { className,
    handleLoadItem,
    handlerGetButtonText,
    children,
  }) => {

  return (
    <button
      type="button"
      className={className}
      onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
        handleLoadItem(e);
        handlerGetButtonText(e);
      }}
    >
      {children}
    </button>
  );
}
