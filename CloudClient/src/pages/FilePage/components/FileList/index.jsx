import React from "react";
import File from "../File";

const FileList = () => {
    const testFIle = [
        { id: '_12', name: 'dir', type: 'dir', size: '5gb', date: '2024-02-22T05:40:03.071Z' }
    ]
    return (
        <div className="filelist">
            <div className="filelist_header">
                <div className="file_name">Name</div>
                <div className="file_date">Size</div>
                <div className="file_size"></div>
            </div>
            {testFIle.map((item, index) => (
                <File file={item} key={index} />
            ))}
        </div>
    )
}

export default FileList