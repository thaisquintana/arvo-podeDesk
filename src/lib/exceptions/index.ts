export class NotResultFound extends Error {
    constructor(message = 'No result found.') {
        super(message)
        this.name = 'NotResultFound'
    }
}