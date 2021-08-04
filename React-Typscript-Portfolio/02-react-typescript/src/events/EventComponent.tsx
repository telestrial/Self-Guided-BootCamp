import React from 'react';

const EventComponent: React.FC = () => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChangeHandler} />
      <div draggable onDragStart={onDragStartHandler}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
