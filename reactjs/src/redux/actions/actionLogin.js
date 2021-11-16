function actionLogin(userInfo) {
    return {
        type: "LOGIN",
        data: userInfo,
    }
}

export default actionLogin;