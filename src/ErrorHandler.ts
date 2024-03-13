class ErrorHandler extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
const newError = (message: string, statusCode: number) => {
    return new ErrorHandler(message, statusCode);
};
export { newError};
