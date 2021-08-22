import { Router } from "express";
import { GetUsersController } from "./controllers/GetUsersController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetTagsController } from "./controllers/GetTagsController";
import { DeleteTagController } from "./controllers/DeleteTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";

export const router = Router();

const createUserController = new CreateUserController();
const getUsersController = new GetUsersController();
const deleteUserController = new DeleteUserController();
const getTagsController = new GetTagsController();
const createTagController = new CreateTagController();
const deleteTagController = new DeleteTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();

router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle);

router.use(ensureAuthenticated);

router.get("/users", ensureAdmin, getUsersController.handle);
router.delete("/users/:id", ensureAdmin, deleteUserController.handle);
router.get("/tags", getTagsController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.delete("/tags/:id", deleteTagController.handle);
router.post("/compliments", createComplimentController.handle);
router.get("/compliments/receive", listUserReceiveComplimentsController.handle);