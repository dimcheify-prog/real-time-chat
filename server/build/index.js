"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_js_1 = require("./router/index.js");
const errorMiddleware_js_1 = require("./middleware/errorMiddleware.js");
const authMiddleware_js_1 = require("./middleware/authMiddleware.js");
const index_1 = require("./models/index");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    credentials: true,
    origin: process.env.CLIENT_URL,
}));
app.use("/api", index_js_1.router);
app.use(authMiddleware_js_1.authMiddleware);
app.use(errorMiddleware_js_1.errorMiddleware);
index_1.sequelize
    .authenticate()
    .then(() => console.log("db is connected"))
    .catch((err) => console.log("error during connecting to db", err));
const start = async () => {
    try {
        app.listen(port, () => console.log("server is running"));
    }
    catch (err) {
        console.log(err);
    }
};
start();
//# sourceMappingURL=index.js.map