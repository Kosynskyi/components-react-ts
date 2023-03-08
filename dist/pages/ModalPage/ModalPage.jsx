"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const Add_1 = __importDefault(require("@mui/icons-material/Add"));
const AddForm_1 = require("components/AddForm");
const Modal_1 = require("components/Modal");
const ModalPage_styled_1 = require("./ModalPage.styled");
const ModalPage = () => {
    const [openModal, setOpenModal] = (0, react_1.useState)(false);
    const openModalFormAdd = () => {
        setOpenModal(prev => !prev);
    };
    const closeModalAddForm = () => {
        setOpenModal(prev => !prev);
    };
    return (<material_1.Box>
      {openModal && (<Modal_1.Modal closeModal={closeModalAddForm}>
          <AddForm_1.AddForm />
        </Modal_1.Modal>)}
      <ModalPage_styled_1.StyledIconButton aria-label="add information" sx={{ backgroundColor: 'green', color: '#fff' }} onClick={openModalFormAdd}>
        <Add_1.default />
      </ModalPage_styled_1.StyledIconButton>
    </material_1.Box>);
};
exports.default = ModalPage;
//# sourceMappingURL=ModalPage.jsx.map