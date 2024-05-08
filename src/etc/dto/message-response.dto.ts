export class MessageResponseDto {
    message: string;

    static create(data: MessageResponseDto) {
        return data;
    }
}