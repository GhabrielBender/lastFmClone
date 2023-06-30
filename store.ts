import { create } from "zustand";
import { combine } from "zustand/middleware";

// interface UserState {
//   user: {
//     name: string;
//     password: string;
//   };
//   setUser: (text: object) => void;
//   removeUser: () => void;
// }

const initialState = {
  user: {
    name: "",
    password: "",
  },
};

const useUserStore = create(
  combine(initialState, (set, get) => ({
    setUser: (text: { name: ""; password: "" }) =>
      set(() => ({ user: { name: text.name, password: text.password } })),
    removeUser: () => set(() => ({ user: { name: "", password: "" } })),
  }))
);

export default useUserStore;

// interface ClientState {
//   client: {
//     cpf_cnp: string;
//     establishment_name: string;
//     fantasy_name: string;
//     cep: string;
//     street: string;
//     addition: string;
//     city: string;
//     role: string;
//     name: string;
//     phone: string;
//     email: string;
//   };
//   setClient: (text: object) => void;
//   removeClient: () => void;
// }

// const useCLientStore = create<ClientState>()((set) => ({
//   client: {
//     cpf_cnp: "",
//     establishment_name: "",
//     fantasy_name: "",
//     cep: "",
//     street: "",
//     addition: "",
//     city: "",
//     role: "",
//     name: "",
//     phone: "",
//     email: "",
//   },
//   setClient: (text: {
//     cpf_cnp: "";
//     establishment_name: "";
//     fantasy_name: "";
//     cep: "";
//     street: "";
//     addition: "";
//     city: "";
//     role: "";
//     name: "";
//     phone: "";
//     email: "";
//   }) =>
//     set(() => ({
//       client: {
//         cpf_cnp: text.cpf_cnp,
//         establishment_name: text.establishment_name,
//         fantasy_name: text.fantasy_name,
//         cep: text.cep,
//         street: text.street,
//         addition: text.addition,
//         city: text.city,
//         role: text.role,
//         name: text.name,
//         phone: text.phone,
//         email: text.email,
//       },
//     })),
//   removeClient: () =>
//     set(() => ({
//       client: {
//         cpf_cnp: "",
//         establishment_name: "",
//         fantasy_name: "",
//         cep: "",
//         street: "",
//         addition: "",
//         city: "",
//         role: "",
//         name: "",
//         phone: "",
//         email: "",
//       },
//     })),
// }));
