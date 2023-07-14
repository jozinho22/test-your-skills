import NAV_URLS from "./NAV_URLS";

const pathBuilder = (path) => {
    return `${process.env.NODE_ENV === 'production' ? NAV_URLS.GH_PREFIX : ""}${path}`;
}

export default pathBuilder;