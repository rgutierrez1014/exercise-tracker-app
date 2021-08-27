function get_app_env() {
    if (typeof (process.env.NODE_ENV) === 'undefined') {
        return 'development';
    }
    return process.env.NODE_ENV;
}

const app_config = {
    // add config vars here
    app_env: get_app_env(),
    api_base_url: get_app_env() === 'production' ? process.env.API_BASE_URL : 'http://localhost:5000/'
};

export default app_config;