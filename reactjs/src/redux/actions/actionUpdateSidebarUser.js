function actionUpdateSidebarUser() {
    const data = {
        sidebarState: "user",
    }
    console.log(data);
    return {
        type: "SIDEBAR_LOGIN",
        data: data,
    }
}

export default actionUpdateSidebarUser