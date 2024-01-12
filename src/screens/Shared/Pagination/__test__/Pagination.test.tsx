import { render, screen } from "@testing-library/react";
import Pagination from "../index";

const changeValue = jest.fn();

describe("Pagination", () => {
    it("shoud render over Pagination", async () => {
        render(
            <Pagination
                changeCurrentPage={changeValue}
                currentPage={1}
                getCanNextPage={true}
                getCanPreviousPage={false}
                itemsPerPage={10}
                nextPage={changeValue}
                previousPage={changeValue}
                pages={[0, 1, 2]}
            />,
        ); // ARRANGE
        const pgination = screen.getAllByRole("list");
        expect(pgination);
    });
});
