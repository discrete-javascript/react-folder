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

    const hidePopup = (e?: React.MouseEvent) => {
        if (e) {
            const target = e.relatedTarget as HTMLElement;
            if (target && target.closest('.popup-menu')) {
                return;
            }
        }
        setPopupVisible(false);
    };

    const handleFileMenu = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target) {
            console.log(`Clicked on: ${target.innerText}`);
            console.log(`Selected file: ${selectedFile}`);
        }
    };


    return {
        popupVisible,
        popupPosition,
        showPopup,
        hidePopup,
        handleFileMenu
    }
}