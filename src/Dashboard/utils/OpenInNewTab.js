const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export default openInNewTab;

// <a style={{display: "table-cell"}} href = "someLink" target = "_blank"
// rel = "noopener noreferrer">text</a>
