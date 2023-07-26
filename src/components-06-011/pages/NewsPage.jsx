import { useState } from "react";

import ContentInfo from "components-06-011/ContentInfo";
import Search from "components-06-011/Search";

const NewsPage = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = searchText => {
    setSearchText(searchText);
  };

  return (
    <>
      <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} />
    </>
  );
};

export default NewsPage;
