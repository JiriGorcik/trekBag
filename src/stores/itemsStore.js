import { create } from "zustand";
import { initialItems } from "../constants/constants";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist((set) => ({
    items: initialItems,
    addItem: (newItemText) => {
      const newItem = {
        id: new Date().getTime(),
        name: newItemText,
        packed: false,
      };
      set((state) => {
        const newItems = [...state.items, newItem];
        return { items: newItems };
      });
    },
    deleteItem: (id) => {
      set((state) => {
        const newItem = state.items.filter((item) => item.id !== id);

        return { items: newItem };
      });
    },
    toggleItem: (id) => {
      set((state) => {
        const newItem = state.items.map((item) => {
          if (item.id === id) {
            return { ...item, packed: !item.packed };
          }

          return item;
        });

        return { items: newItem };
      });
    },
    removeAllItems: () => {
      set(() => ({ items: [] }));
    },
    resetToInitial: () => {
      set(() => ({ items: initialItems }));
    },
    markAllAsIncomplete: () => {
      set((state) => {
        const newItems = state.items.map((item) => {
          return { ...item, packed: false };
        });

        return { items: newItems };
      });
    },
    markAllAsComplete: () => {
      set((state) => {
        const newItems = state.items.map((item) => {
          return { ...item, packed: true };
        });

        return { items: newItems };
      });
    },
  }), {
    name: "items"
  })
);
