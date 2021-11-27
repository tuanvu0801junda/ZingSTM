function actionLogout() {
    const userInfo = {
        email: "Undefined",
        profilePic: "https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAvatarImages%2Fistockphoto-1223671392-612x612.jpg?alt=media&token=c746eb6a-3d27-478f-8309-d1fef46c8930",
        role: 0,
    };
    const data = {
        status: "LOGOUT",
        userInfo: userInfo,
    }
    return {
        type: "LOGOUT",
        data: data,
    }
}

export default actionLogout;