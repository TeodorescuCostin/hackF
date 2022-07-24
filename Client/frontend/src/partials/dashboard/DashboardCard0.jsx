import React from 'react';

function FileViewer() {
  return (
    <div style={{background:'#1c2b50', borderRadius:'16px',height:'8rem', width:'24rem', display:'flex',margin:'auto'}} className="items-center p-4 m-4 border-2 w-96 h-96 col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header style={{display:'flex'}} className="px-5 py-4 border-slate-100">
        <h2 style={{ color:'#f9f9f9', display:'flex',margin:'auto', fontSize:'40px'}}className="font-semibold text-slate-800">Hello!</h2>
      </header>
    </div>
  );
}

export default FileViewer;
