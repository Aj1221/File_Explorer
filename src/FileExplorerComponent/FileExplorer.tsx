import React, { useState } from 'react';
import './FileExplorer.css';
import { FileNode } from '../types';

interface FileExplorerProps {
    files: FileNode;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files }) => {
    const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({});
    const [contextMenu, setContextMenu] = useState<{ visible: boolean; x: number; y: number; file: FileNode | null }>({ visible: false, x: 0, y: 0, file: null });

    const handleFolderToggle = (path: string) => {
        setExpandedFolders(prevState => ({ ...prevState, [path]: !prevState[path] }));
    };

    const handleRightClick = (event: React.MouseEvent, file: FileNode) => {
        event.preventDefault();
        setContextMenu({ visible: true, x: event.clientX, y: event.clientY, file });
    };

    const handleContextMenuAction = (action: string) => {
        if (contextMenu.file) {
            console.log(`Action: ${action}, File: ${contextMenu.file.name}`);
        }
        setContextMenu({ visible: false, x: 0, y: 0, file: null });
    };

    const renderFiles = (files: FileNode, path: string = '') => {
        return files.data?.map((file, index) => {
            const filePath = `${path}/${file.name}`;
            if (file.type === 'folder') {
                return (
                    <div key={filePath}>
                        <div className="folder" onClick={() => handleFolderToggle(filePath)} onContextMenu={(e) => handleRightClick(e, file)}>
                            📁 {file.name}
                        </div>
                        {expandedFolders[filePath] && <div className="nested">{renderFiles(file, filePath)}</div>}
                    </div>
                );
            } else {
                return (
                    <div key={filePath} className="file" onContextMenu={(e) => handleRightClick(e, file)}>
                        📄 {file.name}
                    </div>
                );
            }
        });
    };

    return (
        <div className="file-explorer">
            {renderFiles(files)}
            {contextMenu.visible && (
                <div className="context-menu" style={{ top: contextMenu.y, left: contextMenu.x }}>
                    <div onClick={() => handleContextMenuAction('copy')}>Copy</div>
                    <div onClick={() => handleContextMenuAction('delete')}>Delete</div>
                    <div onClick={() => handleContextMenuAction('rename')}>Rename</div>
                </div>
            )}
        </div>
    );
};

export default FileExplorer;
