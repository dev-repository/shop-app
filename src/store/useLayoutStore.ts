import { create } from 'zustand';
import { shallow } from 'zustand/shallow';

type ModalType = 'NOOP' | 'LOGIN' | 'SIGNUP';

interface LayoutPopupState {
  type: ModalType;
  open: boolean;
}

interface LayoutAction {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  changeModal: (type: ModalType) => void;
}

interface LayoutStore {
  modal: LayoutPopupState;
  action: LayoutAction;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  modal: {
    type: 'NOOP',
    open: false,
  },
  action: {
    openModal: (type: ModalType) => {
      set((state) => ({
        ...state,
        modal: {
          type,
          open: true,
        },
      }));
    },
    changeModal: (type: ModalType) => {
      set((state) => ({
        ...state,
        modal: {
          ...state.modal,
          type,
        },
      }));
    },
    closeModal: () => {
      set((state) => ({
        ...state,
        modal: {
          type: 'NOOP',
          open: false,
        },
      }));
    },
  },
}));

export const useStateHookStore = () =>
  useLayoutStore(
    (state) => ({
      modal: state.modal,
    }),
    shallow,
  );

export const useApiHookStore = () =>
  useLayoutStore((state) => state.action, shallow);
