import api from "./api";

export interface RecyclableItem {
  id: number;
  title: string;
  type: string;
  recyclable: boolean | { status: "partial"; explanation: string };
  degradation: {
    value: number;
    unit: string;
  };
  disposal: string;
}

export const getRecyclableItems = async (): Promise<RecyclableItem[]> => {
  try {
    const response = await api.get<RecyclableItem[]>("/items");
    return response.data;
  } catch (error) {
    console.error("Erro ao carregar items recicláveis:", error);
    throw error;
  }
};
