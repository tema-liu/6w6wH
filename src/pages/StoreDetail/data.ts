const storeReview = {
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

const mockStoreDetailData = {
  statusCode: 200,
  status: true,
  message: "Successfully fetched store data.",
  data: {
    advertise: {
      photo: "https://picsum.photos/1000/800",
      url: "https://example.com",
      title: "Celebrate Eid Al Fitr Offers",
      slogan: "40% off for four people , 20% off for two people ！",
    },
    starCount: 3,
    tags: [
      { tagName: "Multilingual", count: 12 },
      { tagName: "Friendly", count: 9 },
      { tagName: "Food", count: 5 },
      { tagName: "Communication aids", count: 3 },
    ],
    isFavorited: true,
    placeId: "ChIJJ9NrOfgFbjQRqofGxIWkhIo",
    location: {
      lat: 22.636547721078667,
      lng: 120.30326733558186,
    },
    displayName: "Left Bank Rendezvous Cafe 南國人文美食坊",
    photos: [
      "https://picsum.photos/1000/800",
      "https://picsum.photos/1000/800",
    ],
    address: "高雄市新興區河南一路118號一樓",
    enAddress:
      "800, Kaohsiung City, Sinsing District, Henan 1st Rd, No.118, 1F",
    Book: "https://example.com/book-now",
    budget: "NTD200~400 / Rp1500～3000",
    phone: "0983387594",
    url: "https://sunnycafe.example.com",
    opening_hours: {
      Monday: "08:00–18:00",
      Tuesday: "08:00–18:00",
      Wednesday: "08:00–18:00",
      Thursday: "08:00–18:00",
      Friday: "08:00–20:00",
      Saturday: "09:00–20:00",
      Sunday: "closed",
    },
  },
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

export const storeResultApi = async (url: string): Promise<any> => {
  if (url === "/api/items") {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockStoreDetailData);
      }, 1000); // 模擬延遲 1s
    });
  } else {
    throw new Error("API route not found");
  }
};
