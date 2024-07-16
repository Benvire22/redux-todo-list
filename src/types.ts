export interface TaskApi {
    title: string;
    isDone: boolean;
}

export interface Task extends TaskApi {
    id: string;
}