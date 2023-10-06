import { DocumentData, QueryDocumentSnapshot, Timestamp } from 'firebase/firestore/lite';

export interface Todo {
  id: string;
  title: string;
  description: string;
  created: Date;
  userId: string;
}

export const todoConverter = {
  toFirestore: (todo: Todo): DocumentData => {
    return {
      title: todo.title,
      description: todo.description,
      created: Timestamp.fromDate(todo.created),
      userId: todo.userId
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot): Todo => {
    return {
      id: snapshot.id,
      title: snapshot.data().title,
      description: snapshot.data().description,
      created: new Date(snapshot.data().created.toDate()),
      userId: snapshot.data().userId
    };
  }
};
