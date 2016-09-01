/**
 * 本文件的作用就是直观呈现 整个应用状态结构树 及其 初始值
 */
export default {
    login: {
        showLogin: false,
        isLogedin: false,
        errorText: null,
        user: {}
    },

    pagination: {
        currPage: 1
    },

    loading: {
        show: false
    },

    snackbar: {
        show: false,
        message: ''
    },

    topic: {
        topics: []
    },

    sidebar: {
        show: false
    }
}