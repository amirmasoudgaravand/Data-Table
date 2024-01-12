import { render, screen } from "@testing-library/react";
import Header from "../Header";

const changeValue = jest.fn();

describe("Header", () => {
    it("shoud have Header", () => {
        render(
            <Header
                globalFilter="test"
                pageSize={5}
                changeGlobalFilter={changeValue}
                changePageSize={changeValue}
            />,
        ); // ARRANGE

        const selectNode = screen.getByText("Show");
        const inputNode = screen.getByText("entries");
        const buttonNode = screen.getAllByRole("button");
        expect(selectNode);
        expect(inputNode);
        expect(buttonNode);
    });
});
