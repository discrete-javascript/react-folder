import { useState } from "react";

export const useFile = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [highlighted, setHighlighted] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    const toggleHighlight = () => {
        setHighlighted(!highlighted);
    };

    return {
        toggleCollapse,
        toggleHighlight
    }
}