import Repository from "@components/repository";
import Body from "@framework/body/body.style";
import DropdownSearch from "@framework/dropdown-search/dropdown-search";
import Nav from "@framework/nav/nav";
import { useState } from "react";

const App = () => {
  const [repositories, setRepositories] = useState([]);
  const [repository, setRepository] = useState({});
  const [loading, setLoading] = useState(false);

  const getRepositories = async (filter: string, page: number) => {
    if (!filter) {
      return [];
    }

    const response = await fetch(`https://api.github.com/search/repositories?q=${filter}&page=${page}&per_page=10`);
    const json = await response.json();
    return json.items;
  };

  const search = async (filter: string, page: number, isLoadMore?: boolean) => {
    setLoading(true);
    const r = await getRepositories(filter, page);
    if (isLoadMore) {
      const repositoriesMerge = (r || []).concat(repositories);
      setRepositories(repositoriesMerge);
    } else {
      setRepositories(r);
    }
    setLoading(false);
  };

  return (
    <Body>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
      `}</style>
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
      <Repository {...repository} />
    </Body>
  );
};

export default App;
