import { useState } from "react";

export const useApp = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
    const [selectedFile, setSelectedFile] = useState('');

    const showPopup = (e: React.MouseEvent, name: string) => {
        e.preventDefault(); // Prevent the default right-click context menu
        setPopupVisible(true);
        setPopupPosition({ x: e.clientX, y: e.clientY });
        setSelectedFile(name);
    };

    const hidePopup = () => {
        setPopupVisible(false);
    };

    const handleFileMenu = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        console.log(target.innerText, selectedFile);
    };

    return {
        popupVisible,
        popupPosition,
        showPopup,
        hidePopup,
        handleFileMenu
    }
}