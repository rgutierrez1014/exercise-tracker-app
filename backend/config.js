function get_app_env() {
    if (typeof (process.env.NODE_ENV) === 'undefined') {
        return 'development';
    }
    return process.env.NODE_ENV;
}

const app_config = {
    app_env: get_app_env()
};

module.exports = app_config;