import InfiniteScroll from "@framework/infinite-scroll/infinite-scroll";
import InputText from "@framework/input-text/input-text";
import Loading from "@framework/loading/loading";
import SearchIcon from "@framework/search-icon/search-icon";
import React, { useState } from "react";

import {
  DropdownSearch as DropdownSearchStyle,
  Loading as LoadingStyle,
  Menu as MenuStyle,
  MenuDescription as MenuDescriptionStyle,
  MenuItem as MenuItemStyle,
  MenuLabel as MenuLabelStyle,
  SearchIcon as SearchIconStyle,
} from "./dropdown-search.style";

interface IDropdownSearch {
  options: any[];
  keyLabel: string;
  loading?: boolean;
  onLoadMore: (filter: string, page: number) => void;
  onSearch: (filter: string, page: number) => void;
  onSelect: (opt: any) => void;
  onRenderListItem?: (opt: any) => any;
}

const DropdownSearch = (props: IDropdownSearch) => {
  const [filter, setFilter] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [page, setPage] = useState(1);

  let timeOutFilter = null;
  const search = (f: string) => {
    setFilter(f);
    if (timeOutFilter) {
      clearInterval(timeOutFilter);
    }

    timeOutFilter = setTimeout(() => {
      setPage(1);

      props.onSearch(f, page);
      setShowMenu(true);
    }, 500);
  };

  const loadMore = () => {
    if (props.loading) {
      return;
    }

    setPage(page + 1);
    props.onLoadMore(filter, page + 1);
  };

  return (
    <DropdownSearchStyle showMenu={showMenu}>
      <InputText
        value={filter}
        placeholder="search a repository"
        onChange={(e) => search(e.target.value)}
      />
      {showMenu
        && (
          <MenuStyle>
            <InfiniteScroll
              onLoadMore={() => loadMore()}
            >
              {(props.options || []).map((opt) => {
                return props.onRenderListItem ? props.onRenderListItem(opt) : (
                  <MenuItemStyle
                    key={opt.id}
                    onClick={() => {
                      props.onSelect(opt);
                      setShowMenu(false);
                      setFilter(opt[props.keyLabel]);
                    }}
                  >
                    <MenuLabelStyle>{opt[props.keyLabel]}</MenuLabelStyle>
                    <MenuDescriptionStyle>{opt.description}</MenuDescriptionStyle>
                  </MenuItemStyle>
                );
              })}
            </InfiniteScroll>
          </MenuStyle>
        )
      }
      {props.loading ? (
        <LoadingStyle>
          <Loading />
        </LoadingStyle>
      ) : (
        <SearchIconStyle>
          <SearchIcon />
        </SearchIconStyle>
      )}
    </DropdownSearchStyle>
  );
};

export { MenuItemStyle };
export default DropdownSearch;
