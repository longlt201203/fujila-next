const ErrorCode = {
    login_code_existed: {
        code: "login_code_existed",
        message: "Login code is not expired!"
    },
    invalid_login_code: {
        code: "invalid_login_code",
        message: "Invalid Login Code"
    },
    validation_err: {
        code: "validation_err",
        message: "Validation Error!"
    },
    server_err: {
        code: "server_err",
        message: "Internal Server Error!"
    },
    unauthorized: {
        code: "unauthorized",
        message: "Unauthorized"
    },
    forbiden: {
        code: "forbiden",
        message: "Forbiden"
    },
    user_not_found: {
        code: "user_not_found",
        message: "User not found!"
    },
    user_username_existed: {
        code: "user_username_existed",
        message: "Username is existed"
    },
    user_email_existed: {
        code: "user_email_existed",
        message: "Email is existed"
    },
    missing_chat_id: {
        code: "missing_chat_id",
        message: "Chat ID is missing"
    },
    chat_not_found: {
        code: "chat_not_found",
        message: "Chat not found!"
    }
}

export default ErrorCode;