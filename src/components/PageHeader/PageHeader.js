import React from 'react';

function PageHeader(props) {
  return (
    <div className="page-head">
      <h2 className="page-head-title">{props.text}</h2>
      <ol className="breadcrumb page-head-nav">{props.children}</ol>
    </div>
  );
}

export default PageHeader;
