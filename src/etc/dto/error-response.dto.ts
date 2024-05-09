import ErrorCode from "@/etc/error-code";

export class ErrorResponseDto {
    code: string;
    message: string;
    detail: any;

    static create(data: ErrorResponseDto) {
        return data;
    }

    static createUnauthorized(detail: any = null): ErrorResponseDto {
        return { code: ErrorCode.unauthorized.code, message: ErrorCode.unauthorized.message, detail: detail };
    }

    static createForbiden(detail: any = null): ErrorResponseDto {
        return { code: ErrorCode.forbiden.code, message: ErrorCode.forbiden.message, detail: detail };
    }

    static createInternalServerError(detail: any = null): ErrorResponseDto {
        return { code: ErrorCode.server_err.code, message: ErrorCode.server_err.message, detail: detail };
    }
}