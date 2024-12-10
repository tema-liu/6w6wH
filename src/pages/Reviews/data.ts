export const mockData = {
  statusCode: 200,
  status: true,
  message: "取得店家評論成功",
  data: {
    commentID: "comment-12345",
    userID: "user-001",
    userName: "John Doe",
    userPhoto: "https://picsum.photos/400/400.jpg",
    starCount: 4,
    comment: "這家店的產品很不錯，值得推薦！",
    photo: [
      "https://picsum.photos/1000/800",
      "https://picsum.photos/1000/800",
      "https://picsum.photos/1000/800",
    ],
    postedAt: new Date("2024-12-05T10:00:00Z"),
    likeCount: 15,
    isLike: true,
    tag: ["Multilingual", "Friendly", "Communication aids"],
    medal: "badge", // 假設有一個金獎的字串
    reply: [
      {
        replyID: "reply-54321",
        userID: "user-002",
        userName: "Jane Smith",
        userPhoto: "https://picsum.photos/400/400.jpg",
        comment: "謝謝你的評論！我們會繼續努力！",
        postedAt: new Date("2024-12-06T12:30:00Z"),
        medal: "badge", // 假設這是銀獎
        likeCount: 5,
        isLike: false,
      },
      {
        replyID: "reply-11223",
        userID: "user-005",
        userName: "Charlie Wu",
        userPhoto: "https://picsum.photos/400/400.jpg",
        comment: "感謝推薦，會告訴朋友們！",
        postedAt: new Date("2024-12-09T00:30:00Z"),
        medal: null, // 沒有獎牌
        likeCount: 10,
        isLike: true,
      },
    ],
  },
};

export const mockApi = async (url: string): Promise<any> => {
  if (url === "/api/items") {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 1000); // 模擬延遲 1s
    });
  } else {
    throw new Error("API route not found");
  }
};
