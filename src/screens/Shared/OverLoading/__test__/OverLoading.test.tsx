import { render, screen } from "@testing-library/react";
import OverLoading from "../index";

describe("OverLoading", () => {
    it("shoud render over loading", async () => {
        render(<OverLoading isLoading={true} />); // ARRANGE
        const inputSearch = screen.getByText("Loading...");
        expect(inputSearch);
    });
});
