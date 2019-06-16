import React from "react";
// import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Header from "./Header";

describe("Header", () => {
  it("Should render the header of the page", () => {
    const header = shallow(<Header />);
    expect(header.text()).toEqual("Github Releases");
    expect(header.find("h1").length).toEqual(1);
  });
});
