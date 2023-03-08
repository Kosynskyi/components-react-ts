"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const theme_1 = require("../theme");
const material_1 = require("@mui/material");
const Header_1 = require("components/Header/Header");
const material_2 = require("@mui/material");
const Skeleton_1 = require("components/Skeleton");
const NotFoundPage_1 = __importDefault(require("pages/NotFoundPage"));
const ModalPage_1 = __importDefault(require("pages/ModalPage"));
const HomePage_1 = __importDefault(require("pages/HomePage"));
function App() {
    const [theme] = (0, theme_1.useMode)();
    return (<material_1.ThemeProvider theme={theme}>
      <material_1.CssBaseline />
      <material_2.Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
            width: '100vw',
        }}>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<Header_1.Header />}>
            <react_router_dom_1.Route index element={<HomePage_1.default />}/>

            <react_router_dom_1.Route path="skeleton" element={<Skeleton_1.Skeleton />}/>
            <react_router_dom_1.Route path="modal" element={<ModalPage_1.default />}/>
          </react_router_dom_1.Route>

          <react_router_dom_1.Route path="*" element={<NotFoundPage_1.default />}/>
        </react_router_dom_1.Routes>
        <div>
          <p>Test TESToм поганяє 😎😉</p>
        </div>
        <react_toastify_1.ToastContainer />
      </material_2.Box>
    </material_1.ThemeProvider>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map