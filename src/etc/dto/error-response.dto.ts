export class ErrorResponseDto {
    code: string;
    message: string;
    detail: any;

    static create(data: ErrorResponseDto) {
        return data;
    }
}