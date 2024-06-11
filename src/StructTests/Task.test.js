import { Task } from "../Structs/Task.js";
// To start tests
// npm install --save-dev jest
// npm test src/StructTests

describe('Task', () => {
    let task;

    beforeEach(() => {
        task = new Task(1, 'Test Task', '2024-06-01', 'To Do', 'Task details');
    });

    test('should create a task with correct properties', () => {
        expect(task.id).toBe(1);
        expect(task.text).toBe('Test Task');
        expect(task.date).toBe('2024-06-01');
        expect(task.status).toBe('To Do');
        expect(task.details).toBe('Task details');
    });

    test('should update the task text', () => {
        task.text = 'Updated Task';
        expect(task.text).toBe('Updated Task');
    });

    test('should update the task date', () => {
        task.date = '2024-06-02';
        expect(task.date).toBe('2024-06-02');
    });

    test('should update the task status', () => {
        task.status = 'In Progress';
        expect(task.status).toBe('In Progress');
    });

    test('should update the task details', () => {
        task.details = 'Updated task details';
        expect(task.details).toBe('Updated task details');
    });
});
