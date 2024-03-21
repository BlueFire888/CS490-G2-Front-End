import React from 'react';

function Pagination() {
  return (
    <div className="pagination">
      <button>{"<"}</button>
      {/* Number buttons should be generated based on available pages */}
      <button>{">"}</button>
    </div>
  );
}

export default Pagination;
