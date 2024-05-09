import React, { useState } from 'react';
import './FileExplorer.css';

interface Files {
	files: FileProps;
}

interface FileProps {
	type: string;
	name: string;
	meta?: string;
	data?: FileProps[];
	showPopup: (e: React.MouseEvent, name: string) => void;
}

const File: React.FC<FileProps> = ({ type, name, meta, data, showPopup }) => {
	const [collapsed, setCollapsed] = useState(true);
	const [highlighted, setHighlighted] = useState(false);

	const toggleCollapse = () => {
		setCollapsed(!collapsed);
	};

	const toggleHighlight = () => {
		setHighlighted(!highlighted);
	};

	const renderChildren = (data: FileProps[]) => {
		return data.map((item, index) => (
			<File key={index} {...item} showPopup={showPopup} />
		));
	};

	return (
		<div className={`file ${type} ${highlighted ? 'highlighted' : ''}`}>
			<div className="file-header" onClick={toggleCollapse}>
				{type === 'folder' && (
					<>
						<i
							className={`icon ${collapsed ? 'collapsed' : 'expanded'}`}
							onClick={toggleCollapse}
						/>
						<span onClick={toggleHighlight}>{name}</span>
					</>
				)}
				{type === 'file' && (
					<button onContextMenu={(e) => showPopup(e, name)}>
						<i className={`file-icon`} />
						<span>{name}</span>
					</button>
				)}
			</div>
			{!collapsed && type === 'folder' && (
				<div className="file-content">{data && renderChildren(data)}</div>
			)}
		</div>
	);
};

const FileExplorer: React.FC<Files> = ({ files }) => {
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
		console.log(e.target.innerText, selectedFile);
	};

	return (
		<div className="file-explorer" onMouseLeave={hidePopup}>
			<File {...files} showPopup={showPopup} />
			{popupVisible && (
				<div
					className="popup-menu"
					style={{ left: popupPosition.x, top: popupPosition.y }}
					onBlur={hidePopup}
				>
					<div className="menu-item" onClick={handleFileMenu}>
						Copy
					</div>
					<div className="menu-item" onClick={handleFileMenu}>
						Rename
					</div>
					<div className="menu-item" onClick={handleFileMenu}>
						Delete
					</div>
				</div>
			)}
		</div>
	);
};

export default FileExplorer;
