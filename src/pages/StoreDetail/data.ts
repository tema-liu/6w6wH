export const storeReview = {
  statusCode: 200,
  status: true,
  message: "取得店家評論成功",
  data: [
    {
      commentID: "comment-12345",
      userID: "user-001",
      userName: "John Doe",
      userPhoto: "https://picsum.photos/400/400.jpg",
      starCount: 4,
      replyCount: 5,
      comment: "This store has great products, definitely worth recommending!",
      photos: [
        "https://picsum.photos/1000/800",
        "https://picsum.photos/1000/800",
        "https://picsum.photos/1000/800",
      ],
      postedAt: new Date("2024-12-05T10:00:00Z"),
      likeCount: 15,
      isLike: true,
      tags: ["Multilingual", "Friendly", "Communication aids"],
      medal: "badge", // Hypothetical gold medal
    },
    {
      commentID: "comment-12346",
      userID: "user-002",
      userName: "Alice Smith",
      userPhoto: "https://picsum.photos/400/400.jpg",
      starCount: 5,
      replyCount: 16,
      comment:
        "Excellent customer service and high-quality items. I will come back again!",
      photos: [
        "https://picsum.photos/1000/800",
        "https://picsum.photos/1000/800",
      ],
      postedAt: new Date("2024-12-06T12:30:00Z"),
      likeCount: 25,
      isLike: true,
      tags: ["Helpful", "Fast shipping", "Affordable"],
      medal: "gold", // Hypothetical gold medal
    },
    {
      commentID: "comment-12347",
      userID: "user-003",
      userName: "Michael Brown",
      userPhoto: "https://picsum.photos/400/400.jpg",
      starCount: 3,
      replyCount: 2,
      comment:
        "The product is good but it took longer to ship than I expected.",
      photos: [
        "https://picsum.photos/1000/800",
        "https://picsum.photos/1000/800",
      ],
      postedAt: new Date("2024-12-07T15:00:00Z"),
      likeCount: 8,
      isLike: false,
      tags: ["Slow delivery", "Quality product"],
      medal: "silver", // Hypothetical silver medal
    },
    {
      commentID: "comment-12348",
      userID: "user-004",
      userName: "Sarah Lee",
      userPhoto: "https://picsum.photos/400/400.jpg",
      starCount: 5,
      replyCount: 0,
      comment:
        "I love the variety of products they offer. Very satisfied with my purchase.",
      photos: [
        "https://picsum.photos/1000/800",
        "https://picsum.photos/1000/800",
      ],
      postedAt: new Date("2024-12-08T18:45:00Z"),
      likeCount: 40,
      isLike: true,
      tags: ["Variety", "Customer satisfaction", "High quality"],
      medal: "platinum", // Hypothetical platinum medal
    },
    {
      commentID: "comment-12349",
      userID: "user-005",
      userName: "David Green",
      userPhoto: "https://picsum.photos/400/400.jpg",
      starCount: 4,
      replyCount: 5,
      comment: "Good quality but the packaging could be better.",
      photos: ["https://picsum.photos/1000/800"],
      postedAt: new Date("2024-12-09T20:00:00Z"),
      likeCount: 12,
      isLike: true,
      tags: ["Good quality", "Packaging issues"],
      medal: "badge", // Hypothetical badge medal
    },
  ],
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
