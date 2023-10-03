import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore';

export interface Todo {
  id: string;
  title: string;
  description: string;
  userId: string;
}

export const todoConverter = {
  toFirestore: (todo: Todo): DocumentData => {
    return {
      title: todo.title,
      description: todo.description,
      userId: todo.userId
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Todo => {
    const data = snapshot.data(options);
    return { id: snapshot.id, title: data.title, description: data.description, userId: data.userId };
  }
};
