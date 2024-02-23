import React from "react";

const File = ({file}) => {
    return (
        <div className="file">
            <img src='' alt="" />
            <div className="file_name">{file.name}</div>
            <div className="file_date">{file.date}</div>
            <div className="file_size">{file.size}</div>
            <button></button>
            <button></button>
        </div>
    )
}

export default File