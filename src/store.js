// import { atom, useAtom } from "jotai";

// const countAtom = atom(0);

// const useCount = () => useAtom(countAtom)

// export default useCount
import { atom, useAtom, Provider, useStore } from "jotai";

// 🔥 Estado global
const countAtom = atom(0);

// 🔥 Hook que verifica si hay Provider
const useCount = () => {
  try {
    useStore(); // ❗ Si no hay Provider, esto lanzará error
    return useAtom(countAtom);
  } catch (error) {
    throw new Error("❌ useCount debe usarse dentro de un <Provider>", error);
  }
};

export { Provider }; // 👈 Exporta el Provider
export default useCount;
