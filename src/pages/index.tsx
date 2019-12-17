import Error from "@components/error/error";
import Repository from "@components/repository/repository";
import Body from "@framework/body/body.style";
import Content from "@framework/content/content.style";
import DropdownSearch from "@framework/dropdown-search/dropdown-search";
import Nav from "@framework/nav/nav";
import { useState } from "react";

const App = () => {
  const [repositories, setRepositories] = useState([]);
  const [repository, setRepository] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState(null);

  const getRepositories = async (filter: string, page: number) => {
    if (!filter) {
      return [];
    }

    const response = await fetch(`https://api.github.com/search/repositories?q=${filter}&page=${page}&per_page=10`);
    const json = await response.json();

    if (response.status >= 400 && response.status < 600) {
      throw json.message || response.statusText;
    }
    return json.items;
  };

  const search = async (filter: string, page: number, isLoadMore?: boolean) => {
    setLoading(true);
    try {
      const r = await getRepositories(filter, page);
      if (isLoadMore) {
        const repositoriesMerge = (r || []).concat(repositories);
        setRepositories(repositoriesMerge);
      } else {
        setRepositories(r);
      }
      setErrorRequest(null);
    } catch (e) {
      setErrorRequest(e);
    }
    setLoading(false);
  };

  return (
    <Body>
      <Nav title="Github Explorer">
        <DropdownSearch
          keyLabel="full_name"
          options={repositories}
          loading={loading}
          onSearch={async (filter: string, page: number) => {
            search(filter, page);
          }}
          onLoadMore={async (filter: string, page: number) => {
            const isLoadMore = true;
            search(filter, page, isLoadMore);
          }}
          onSelect={(r) => setRepository(r)}
        />
      </Nav>
      <Content>
        {errorRequest ? <Error>{errorRequest}</Error> : <Repository {...repository} />}
      </Content>
    </Body>
  );
};

export default App;
