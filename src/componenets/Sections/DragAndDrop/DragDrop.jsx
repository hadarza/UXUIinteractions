import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const tasks = [
  { id: "1", content: "First task" },
  { id: "2", content: "Second task" },
  { id: "3", content: "Third task" },
  { id: "4", content: "Fourth task" },
  { id: "5", content: "Fifth task" },
];

// you can more columns if you like to 
const taskStatus = {
  requested: {
    name: "Requested",
    items: tasks
  },
  toDo: {
    name: "To do",
    items: []
  }
};
/*<StrictMode> dont work in react-beautiful dnd */
const onDragEnd = (result, columns, setColumns) => {
  /* columns respresent taskStatus */
  console.log(columns)
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]; // source column
    const destColumn = columns[destination.droppableId]; // dest column after drsg
    const sourceItems = [...sourceColumn.items]; // save the current items at the source column
    const destItems = [...destColumn.items]; // save the current items at the source column

    const [removed] = sourceItems.splice(source.index, 1);  // remove from sourceItems array the sourceItem
    destItems.splice(destination.index, 0, removed); // add to destItems array the sourceItem

    /*Update columns arrays at changing one item from one column to another.*/
   //  source.droppableId - name of column the dragItem before the drag.
   // destination.droppableId - name of column the current dragItem after the dray.
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    // when the drag item stay at same column after drag
    const column = columns[source.droppableId]; 
    const copiedItems = [...column.items];

    const [removed] = copiedItems.splice(source.index, 1); // remove from copiedItems array the sourceItem at the current location
    copiedItems.splice(destination.index, 0, removed); // add the sourceItem to his new location on copiedItems

    /*Update column array at changing an item (reorder on the same column)*/

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function DragDrop() {
  const [columns, setColumns] = useState(taskStatus);
  return (
    <div className="only-flex m-3">
        <div>
            <h3 className='title_accordion'>אנימציית גרירה בין רשימות</h3>
            <h6 className='subTitle_accordion'>דוגמה לאנימציה של גרירה בין רשימות על ידי שימוש בספרייה react-beautiful-dnd</h6>
            <h6 className="red">נא לקרוא הערות בקוד </h6>
        </div>
       
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                key={columnId}>
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}>
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>

    </div>
  );
}

export default DragDrop;
