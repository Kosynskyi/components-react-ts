"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = require("Header/Header");
const material_1 = require("@mui/material");
const Skeleton_1 = require("Skeleton");
function App() {
    return (<material_1.Box sx={{
            position: 'relative',
            height: '100vh',
        }}>
      <Header_1.Header />
      <Skeleton_1.Skeleton />
    </material_1.Box>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map