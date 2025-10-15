import { KanbanBoard } from '@/components/kanban/KanbanBoard';

export default function MainPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <KanbanBoard />
    </main>
  );
}
