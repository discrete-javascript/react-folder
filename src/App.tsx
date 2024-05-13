import React from 'react';
import { Files } from '@app/interfaces';
import File from './components/file/File';
import { useApp } from './useApp';

import './File.css';

const FileExplorer: React.FC<Files> = ({ files }) => {
	const { hidePopup, showPopup, popupVisible, popupPosition, handleFileMenu } =
		useApp();

	console.log('popupVisible', popupVisible);
	return (
		<div className="file-explorer">
			<h4>Click and open folders for preview and check markdown file as well</h4>
			<File {...files} showPopup={showPopup} hidePopup={hidePopup} />
			{popupVisible && (
				<div
					className="popup-menu"
					style={{ left: popupPosition.x, top: popupPosition.y }}
					onMouseLeave={hidePopup}
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
