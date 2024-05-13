
export interface Files {
    files: FileProps;
}

export interface FileProps {
    type: string;
    name: string;
    meta?: string;
    data?: FileProps[];
    showPopup?: (e: React.MouseEvent, name: string) => void;
}