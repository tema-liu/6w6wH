export const storeReview = {
  statusCode: 200,
  status: true,
  message: "取得店家評論成功",
  data: null,
};

export const mockApi = async (url: string): Promise<any> => {
  if (url === "/api/items") {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(storeReview);
      }, 1000); // 模擬延遲 1s
    });
  } else {
    throw new Error("API route not found");
  }
};
