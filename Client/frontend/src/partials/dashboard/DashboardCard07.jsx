import React from 'react';

function FileViewer({ filename, deleteFile}) {
  return (
    <div style={{background:'#1c2b50', borderRadius:'16px', width:'44rem'}} className="items-center p-4 m-4 border-2 w-96 h-96 col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 style={{ color:'#f9f9f9'}}className="font-semibold text-slate-800">File</h2>
      </header>
        <div className="p-3">
        {/* Table */}
        <div>
          <table className="table-auto w-full">
            {/* Table body */}
            <tbody style={{ color:'#1c2b50'}} className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
                <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      <td className="p-2">
                        <button onClick={deleteFile}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="17.449" height="16.949" viewBox="0 0 17.449 16.949">
                              <line id="Line_109" data-name="Line 109" x1="12.5" y2="12" transform="translate(2.474 2.474)" fill="none" stroke="#f9f9f9" strokeLinecap="round" strokeWidth="3.5"/>
                              <line id="Line_108" data-name="Line 108" x1="13" y1="12" transform="translate(2.473 2.473)" fill="none" stroke="#f9f9f9" strokeLinecap="round" strokeWidth="3.5"/>
                          </svg>
                        </button>
                      </td>
                      <svg style={{marginRight:'10px'}} width="14" height="19" viewBox="0 0 14 19" fill="#f9f9f9" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6914 4.91855L9.48828 0.505273C9.37109 0.382227 9.21289 0.3125 9.04687 0.3125H0.75C0.404297 0.3125 0.125 0.605762 0.125 0.96875V18.0312C0.125 18.3942 0.404297 18.6875 0.75 18.6875H13.25C13.5957 18.6875 13.875 18.3942 13.875 18.0312V5.38408C13.875 5.20977 13.8086 5.0416 13.6914 4.91855ZM12.4336 5.68555H8.75781V1.82598L12.4336 5.68555ZM12.4688 17.2109H1.53125V1.78906H7.42969V6.21875C7.42969 6.44719 7.51611 6.66627 7.66995 6.8278C7.82379 6.98933 8.03244 7.08008 8.25 7.08008H12.4688V17.2109ZM6.84375 11.6738H3.25C3.16406 11.6738 3.09375 11.7477 3.09375 11.8379V12.8223C3.09375 12.9125 3.16406 12.9863 3.25 12.9863H6.84375C6.92969 12.9863 7 12.9125 7 12.8223V11.8379C7 11.7477 6.92969 11.6738 6.84375 11.6738ZM3.09375 9.04883V10.0332C3.09375 10.1234 3.16406 10.1973 3.25 10.1973H10.75C10.8359 10.1973 10.9062 10.1234 10.9062 10.0332V9.04883C10.9062 8.95859 10.8359 8.88477 10.75 8.88477H3.25C3.16406 8.88477 3.09375 8.95859 3.09375 9.04883Z" fill="#F9F9F9"/>
                      </svg>
                      <div style={{ color:'#f9f9f9'}} className="text-slate-800">{filename}</div>
                    </div>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FileViewer;
