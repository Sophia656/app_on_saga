export type task = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export default interface Tasks {
    tasks: task[]
}