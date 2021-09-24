function get_app_env() {
    if (typeof (process.env.NODE_ENV) === 'undefined') {
        return 'development';
    }
    return process.env.NODE_ENV;
}

const all_config = {
    // add config vars here
    common: {
        app_env: get_app_env(),
    },
    development: {
        api_base_url: 'http://localhost:5000/'
    },
    test: {
        api_base_url: 'http://localhost:5000/'
    },
    production: {
        api_base_url: 'https://api-dot-rg-exercise-tracker.uc.r.appspot.com/'
    }
};

const app_config = {
    ...all_config.common,
    ...all_config[get_app_env()]
};

export default app_config;