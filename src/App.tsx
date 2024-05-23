import React from 'react';
import FileExplorer from './FileExplorerComponent/FileExplorer';
import { FileNode } from './types';

const files: FileNode = {
    type: "folder",
    name: "parent",
    data: [
        {
            type: "folder",
            name: "root",
            data: [
                {
                    type: "folder",
                    name: "src",
                    data: [
                        {
                            type: "file",
                            meta: 'js',
                            name: "index.js"
                        }
                    ]
                },
                {
                    type: "folder",
                    name: "public",
                    data: [
                        {
                            type: "file",
                            meta: 'ts',
                            name: "index.ts"
                        }
                    ]
                },
                {
                    type: "file",
                    meta: 'html',
                    name: "index.html"
                },
                {
                    type: "folder",
                    name: "data",
                    data: [
                        {
                            type: "folder",
                            name: "images",
                            data: [
                                {
                                    type: "file",
                                    meta: 'img',
                                    name: "image.png"
                                },
                                {
                                    type: "file",
                                    meta: 'img',
                                    name: "image2.webp"
                                }
                            ]
                        },
                        {
                            type: "file",
                            meta: 'svg',
                            name: "logo.svg"
                        }
                    ]
                },
                {
                    type: "file",
                    meta: 'css',
                    name: "style.css"
                }
            ]
        }
    ]
};

const App: React.FC = () => {
    return (
        <div className="App">
            <FileExplorer files={files} />
        </div>
    );
};

export default App;
