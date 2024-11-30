import { useDrag, useDrop } from 'react-dnd';

const DraggableWidget = ({ id, index, moveWidget, children }) => {
  const [, drag] = useDrag({
    type: 'WIDGET',
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: 'WIDGET',
    drop: (item) => {
      if (item.index !== index) {
        moveWidget(item.index, index);
        item.index = index;
      }
    },
    
  });

  return (
    <div ref={(node) => drag(drop(node))} style={{ margin: '0px 10px 10px 10px', cursor: 'move', transition: 'all 2s ease-in-out' , height:'50%'}}>
      {children}
    </div>
  );
};

export default DraggableWidget;
