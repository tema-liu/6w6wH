export const commentData = {
  statusCode: 200,
  status: true,
  message: "取得店家評論成功",

  data: {
    popular: {
      commentID: "comment-12345",
      userID: "user-001",
      userName: "John Doe",
      userPhoto: "https://picsum.photos/400/400.jpg",
      replyCount: 5,
      photos: [
        "https://picsum.photos/1000/800",
        "https://picsum.photos/1000/800",
        "https://picsum.photos/1000/800",
      ],
      starCount: 4,
      comment: "這家店的產品很不錯，值得推薦！",
      postedAt: new Date("2024-12-05T10:00:00Z"),
      likeCount: 15,
      isLike: true,
      tags: [
        "Multilingual",
        "Friendly",
        "Communication aids",
        "Average",
        "Improvement needed",
      ],
      medal: "badge2", // 假設金獎
      reply: [
        {
          replyID: "reply-54321",
          userID: "user-002",
          userName: "Jane Smith",
          userPhoto: "https://picsum.photos/400/400.jpg",
          comment:
            "Kopi susu is super yummy! Nice ambient and service! Come hang out!",
          postedAt: new Date("2024-12-06T12:30:00Z"),
          medal: "badge2", // 設銀獎
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
          medal: null, // 無獎牌
          likeCount: 10,
          isLike: true,
        },
      ],
    },
    review: {
      commentID: "comment-67890",
      userID: "user-003",
      userName: "Alice Lin",
      userPhoto: "https://picsum.photos/400/400.jpg",
      photos: [
        "https://picsum.photos/1000/800",
        "https://picsum.photos/1000/800",
        "https://picsum.photos/1000/800",
      ],
      starCount: 5,
      comment: "員工服務態度很好，環境也很舒適！",
      postedAt: new Date("2024-12-07T15:00:00Z"),
      likeCount: 20,
      isLike: true,
      tags: ["Clean", "Comfortable", "Great service"],
      medal: "badge2",
    },
    latest: {
      commentID: "comment-99999",
      userID: "user-004",
      userName: "David Lee",
      userPhoto: "https://picsum.photos/400/400.jpg",
      photos: [
        "https://picsum.photos/1000/800",
        "https://picsum.photos/1000/800",
        "https://picsum.photos/1000/800",
      ],
      starCount: 3,
      comment: "產品還不錯，但服務有待改進。",
      postedAt: new Date("2024-12-04T08:00:00Z"),
      likeCount: 8,
      isLike: false,
      tags: ["Average", "Improvement needed", "Quality"],
      medal: null, // 無獎牌
      reply: [
        {
          replyID: "reply-55555",
          userID: "user-006",
          userName: "Emily Wong",
          userPhoto: "https://picsum.photos/400/400.jpg",
          comment: "感謝反饋，我們會檢討改進！",
          postedAt: new Date("2024-12-05T10:45:00Z"),
          medal: "badge", // 假設銀獎
          likeCount: 3,
          isLike: false,
        },
        {
          replyID: "reply-55444",
          userID: "user-007",
          userName: "tema liu",
          userPhoto: "https://picsum.photos/400/400.jpg",
          comment: "好吃咖哩一直吃",
          postedAt: new Date("2024-12-05T10:45:00Z"),
          medal: "badge", // 假設銀獎
          likeCount: 3,
          isLike: false,
        },
      ],
    },
  },
};

export const mockApi = async (url: string): Promise<any> => {
  if (url === "/api/items") {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(commentData);
      }, 1000); // 模擬延遲 1s
    });
  } else {
    throw new Error("API route not found");
  }
};
