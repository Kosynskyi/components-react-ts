"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const SwitchMode_1 = require("components/SwitchMode");
const Header = () => {
    return (<>
      <material_1.Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingX: 4,
            outline: '1px solid red',
            width: '100%',
        }}>
        <material_1.Box component="nav" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
        }}>
          <react_router_dom_1.NavLink to="/">Home</react_router_dom_1.NavLink>
          <react_router_dom_1.NavLink to="/modal">Modal</react_router_dom_1.NavLink>
          <SwitchMode_1.SwitchMode />
        </material_1.Box>
      </material_1.Box>
      <react_router_dom_1.Outlet />
    </>);
};
exports.Header = Header;
//# sourceMappingURL=Header.jsx.map