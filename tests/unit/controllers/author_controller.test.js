const AuthorController = require("./../../../controllers/author_controller");
const AuthorModel = require("./../../../database/models/author_model");

describe("AuthorController", () => {
    describe("index()", () => {
        test("call res.render()", async () => {
            const res = {
                render: jest.fn()
            }

            const authors = [];

            AuthorModel.find = jest.fn().mockResolvedValue(authors);

            await AuthorController.index(null, res);
            expect(AuthorModel.find).toBeCalledTimes(1);
            expect(res.render).toHaveBeenLastCalledWith("author/index", { authors});
        });
    });
});