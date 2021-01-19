export default class ToDo {
    id: number = new Date().getTime();
    text!: string;
    done = false;
}