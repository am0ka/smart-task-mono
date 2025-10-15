'use client';

import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

// This is a very basic placeholder for the Kanban board.
// A real implementation would involve columns and cards, and much more complex state management.

export function KanbanBoard() {
  // Placeholder data
  const columns = ['To Do', 'In Progress', 'Done'];
  const tasks = {
    'To Do': [{ id: '1', title: 'Task 1' }, { id: '2', title: 'Task 2' }],
    'In Progress': [{ id: '3', title: 'Task 3' }],
    'Done': [{ id: '4', title: 'Task 4' }],
  };

  return (
    <DndContext collisionDetection={closestCenter}>
      <div className="flex space-x-4">
        {columns.map(column => (
          <div key={column} className="bg-gray-100 p-4 rounded-lg w-1/3">
            <h2 className="font-bold mb-4">{column}</h2>
            <SortableContext items={tasks[column]} strategy={verticalListSortingStrategy}>
              <div className="space-y-2">
                {tasks[column].map(task => (
                  <div key={task.id} className="bg-white p-2 rounded shadow">
                    {task.title}
                  </div>
                ))}
              </div>
            </SortableContext>
          </div>
        ))}
      </div>
    </DndContext>
  );
}
