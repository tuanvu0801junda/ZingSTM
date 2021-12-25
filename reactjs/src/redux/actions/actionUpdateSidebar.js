export default function actionUpdateSidebar(sidebarState) {
    const data = {
        sidebarState: sidebarState,
    }
    console.log(data);
    return {
        type: "UPDATE_SIDEBAR",
        data: data,
    }
}