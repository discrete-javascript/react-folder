import { useState } from 'react';
import { FileProps } from '@app/interfaces';

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
					<button onContextMenu={(e) => showPopup && showPopup(e, name)}>
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

export default File;
