import React from "react";
import File from "../File";

const FileList = () => {
    return (
        <div className="filelist">
            <div className="filelist_header">
                <div className="file_name">Name</div>
                <div className="file_date">Size</div>
                <div className="file_size"></div>
            </div>
            <File />
        </div>
    )
}

export default FileList