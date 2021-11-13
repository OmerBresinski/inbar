import { useLocation } from "react-router";

const useTab = (url) => {
    const { pathname } = useLocation();
    const isActive = pathname === url;

    return {
        isActive,
    };
};

export default useTab;
