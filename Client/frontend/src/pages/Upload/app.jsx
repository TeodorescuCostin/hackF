import React, { Fragment, useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import DashboardCard07 from '../../partials/dashboard/DashboardCard07';

const fileTypes = ["JPG", "PNG", "GIF"];

const FileUpload = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');
  const [uploadedFile, setUploadedFile] = useState({});


  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      console.log('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  const deleteFile = () => {
    setFilename('')
  }

  return (
    <div style={{background:'#0f172a'}} className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',}}>

            <form onSubmit={onSubmit}>
              <div className='custom-file mb-4'>
                {/* <input
                  type='file'
                  className='custom-file-input'
                  id='customFile'
                  onChange={onChange}
                /> */}
                <div style={{display: 'flex'}}>
                  <label type="submit" style={{display:'flex',margin:'auto', background:'#1c2b50',  borderColor:'#f9f9f9'}} className="btn bg-indigo-500 hover:bg-indigo-600 text-white" >
                    <input
                      style={{display: 'none'}}
                      type='file'
                      className='custom-file-input'
                      id='customFile'
                      onChange={onChange}
                    />
                    Search a file
                  </label> 
                </div>
                <DashboardCard07
                  filename={filename}
                  deleteFile={deleteFile}
                />
              </div>
              <div style={{display: 'flex'}}>
                <button type="submit" style={{display:'flex',margin:'auto', background:'#1c2b50',  borderColor:'#f9f9f9'}}className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                        <span className="hidden xs:block ml-2">Upload File</span>
                </button> 
              </div>
            </form>
        </main>

      </div>
    </div>
  );
}

export default FileUpload;
