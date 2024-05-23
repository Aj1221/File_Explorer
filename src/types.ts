export type FileType = 'file' | 'folder';

export interface FileNode {
    type: FileType;
    name: string;
    meta?: string;
    data?: FileNode[];
}
