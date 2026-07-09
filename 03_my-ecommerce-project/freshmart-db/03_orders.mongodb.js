use("freshmart-db");

// clear existing data
db.orders.deleteMany({});

// insert sample orders
db.orders.insertMany([
  {
    _id: ObjectId("661c3d4e5f6a7b8c9d0c0a01"),
    userId: ObjectId("661a1b2c3d4e5f6a7b8c9d01"),
    items: [
      {
        productId: ObjectId("661b2c3d4e5f6a7b8c9d0a01"),
        productName: "ชุดชาบูหมูสไลด์",
        quantity: 2,
        price: 199.00
      },
      {
        productId: ObjectId("661b2c3d4e5f6a7b8c9d0a03"),
        productName: "เนื้อวัวออสเตรเลียสไลด์ 300g",
        quantity: 1,
        price: 299.00
      }
    ],
    totalAmount: 697.00,
    shippingAddress: {
      street: "123 ถนนสุขุมวิท",
      district: "วัฒนา",
      province: "กรุงเทพมหานคร",
      zipCode: "10110"
    },
    paymentMethod: "promptpay",
    status: "delivered",
    note: "ฝากไว้ที่หน้าห้องครับ",
    createdAt: new Date("2024-04-08T12:30:00Z"),
    updatedAt: new Date("2024-04-08T18:00:00Z")
  },
  {
    _id: ObjectId("661c3d4e5f6a7b8c9d0c0a02"),
    userId: ObjectId("661a1b2c3d4e5f6a7b8c9d02"),
    items: [
      {
        productId: ObjectId("661b2c3d4e5f6a7b8c9d0a02"),
        productName: "ผักสดรวมมิตร 500g",
        quantity: 3,
        price: 29.00
      }
    ],
    totalAmount: 87.00,
    shippingAddress: {
      street: "456 ถนนพหลโยธิน",
      district: "จตุจักร",
      province: "กรุงเทพมหานคร",
      zipCode: "10900"
    },
    paymentMethod: "credit_card",
    status: "shipping",
    note: "",
    createdAt: new Date("2024-04-10T09:15:00Z"),
    updatedAt: new Date("2024-04-10T14:00:00Z")
  },
  {
    _id: ObjectId("661c3d4e5f6a7b8c9d0c0a03"),
    userId: ObjectId("661a1b2c3d4e5f6a7b8c9d03"),
    items: [
      {
        productId: ObjectId("661b2c3d4e5f6a7b8c9d0a04"),
        productName: "กุ้งแม่น้ำเผา 500g",
        quantity: 2,
        price: 199.00
      },
      {
        productId: ObjectId("661b2c3d4e5f6a7b8c9d0a05"),
        productName: "ชุดส้มตำปูปลาร้า",
        quantity: 1,
        price: 149.00
      }
    ],
    totalAmount: 547.00,
    shippingAddress: {
      street: "789 ถนนเจริญกรุง",
      district: "บางรัก",
      province: "กรุงเทพมหานคร",
      zipCode: "10500"
    },
    paymentMethod: "bank_transfer",
    status: "confirmed",
    note: "โอนเงินแล้วครับ รอบิล",
    createdAt: new Date("2024-04-10T11:00:00Z"),
    updatedAt: new Date("2024-04-10T11:30:00Z")
  },
  {
    _id: ObjectId("661c3d4e5f6a7b8c9d0c0a04"),
    userId: ObjectId("661a1b2c3d4e5f6a7b8c9d04"),
    items: [
      {
        productId: ObjectId("661b2c3d4e5f6a7b8c9d0a01"),
        productName: "ชุดชาบูหมูสไลด์",
        quantity: 1,
        price: 199.00
      }
    ],
    totalAmount: 199.00,
    shippingAddress: {
      street: "321 ถนนพระราม 2",
      district: "บางขุนเทียน",
      province: "กรุงเทพมหานคร",
      zipCode: "10150"
    },
    paymentMethod: "cod",
    status: "pending",
    note: "",
    createdAt: new Date("2024-04-11T15:45:00Z"),
    updatedAt: new Date("2024-04-11T15:45:00Z")
  },
  {
    _id: ObjectId("661c3d4e5f6a7b8c9d0c0a05"),
    userId: ObjectId("661a1b2c3d4e5f6a7b8c9d05"),
    items: [
      {
        productId: ObjectId("661b2c3d4e5f6a7b8c9d0a02"),
        productName: "ผักสดรวมมิตร 500g",
        quantity: 1,
        price: 29.00
      },
      {
        productId: ObjectId("661b2c3d4e5f6a7b8c9d0a04"),
        productName: "กุ้งแม่น้ำเผา 500g",
        quantity: 1,
        price: 199.00
      },
      {
        productId: ObjectId("661b2c3d4e5f6a7b8c9d0a05"),
        productName: "ชุดส้มตำปูปลาร้า",
        quantity: 2,
        price: 149.00
      }
    ],
    totalAmount: 526.00,
    shippingAddress: {
      street: "654 ถนนรัชดาภิเษก",
      district: "ดินแดง",
      province: "กรุงเทพมหานคร",
      zipCode: "10400"
    },
    paymentMethod: "promptpay",
    status: "preparing",
    note: "ขอให้แพ็คแยกชุดชาบูกับส้มตำคนละถุงนะคะ",
    createdAt: new Date("2024-04-11T10:00:00Z"),
    updatedAt: new Date("2024-04-11T10:30:00Z")
  }
]);

// Find all
db.orders.find();