import { mount } from "enzyme";
import React, { useState } from "react";
import { act } from "react-dom/test-utils";

import InputText from "../input-text/input-text";
import DropdownSearch from "./dropdown-search";
import { MenuItem as MenuItemStyle } from "./dropdown-search.style";

const Component = () => {
  const [repositories, setRepositories] = useState([
    { name: "Vue" },
    { name: "React" },
    { name: "Angular" },
  ]);

  return (
    <DropdownSearch
      keyLabel="name"
      options={repositories}
      onSearch={(filter: string, page: number) => {
        const result = repositories.filter((r) => r.name.includes(filter));
        setRepositories(result);
      }}
      // tslint:disable-next-line: no-empty
      onLoadMore={() => {}}
      // tslint:disable-next-line: no-empty
      onSelect={() => {}}
    />
  );
};

describe("DropdownSearch success tests", () => {
  test("DropdownSearch should render the options", async () => {
    await act(async () => {
      const wrapper = mount(<Component />);

      wrapper.find(InputText).prop("onChange")({ target: { value: "r" } } as React.ChangeEvent<HTMLInputElement>);
      setTimeout(() => {
        expect(wrapper.find(MenuItemStyle)).toHaveLength(1);
      }, 1000);

      wrapper.find(InputText).prop("onChange")({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
      setTimeout(() => {
        expect(wrapper.find(MenuItemStyle)).toHaveLength(3);
      }, 1000);
    });
  });
});
