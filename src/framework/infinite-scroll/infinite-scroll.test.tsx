import { mount } from "enzyme";
import React, { useState } from "react";
import { act } from "react-dom/test-utils";

import InfiniteScroll from "./infinite-scroll";

const Component = () => {
  const [frameworks, setFrameworks] = useState([
    { name: "Vue" },
    { name: "React" },
    { name: "Angular" },
    { name: "Angular 2" },
    { name: "Angular 8" },
    { name: "Backbone" },
    { name: "Ember" },
    { name: "Meteor" },
    { name: "Mithril" },
    { name: "Polymer" },
    { name: "Aurelia" },
    { name: "JQuery" },
  ]);

  return (
    <InfiniteScroll
      // tslint:disable-next-line: no-empty
      onLoadMore={() => {}}
    >
      {frameworks.map((r, i) => {
        const key = i;
        return <div key={key}>{r.name}</div>;
      })}
    </InfiniteScroll>
  );
};

describe("InfiniteScroll success tests", () => {
  test("InfiniteScroll should render the options", async () => {
    await act(async () => {
      const wrapper = mount(<Component />);
      expect(wrapper.find(InfiniteScroll).prop("children")).toHaveLength(12);
    });
  });
});
