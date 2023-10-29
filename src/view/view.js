export class View {
    constructor() {

    }

    render(todo) {
        for (const property in todo) {
            console.log(todo[property]);
        }
    }
}