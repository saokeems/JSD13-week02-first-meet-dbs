use("freshmart-db");

// clear existing data
db.products.deleteMany({});

// insert sample products
db.products.insertMany([
  {
    _id: ObjectId("661b2c3d4e5f6a7b8c9d0a01"),
    name: "ชุดชาบูหมูสไลด์",
    description: "เซ็ตชาบูหมูสไลด์พร้อมปรุง ประกอบด้วย หมูสไลด์ 200g, น้ำซุปชาบู, ผักสดเซ็ต, น้ำจิ้มชาบู",
    price: 199.00,
    discountPrice: null,
    category: "ready-to-cook",
    quantity: 50,
    expiryDate: new Date("2024-04-20T00:00:00Z"),
    image: "https://example.com/images/chabu-set.jpg",
    restaurantId: ObjectId("661c3d4e5f6a7b8c9d0b0a01"),
    isFlashSale: false,
    createdAt: new Date("2024-04-08T08:00:00Z"),
    updatedAt: new Date("2024-04-08T08:00:00Z")
  },
  {
    _id: ObjectId("661b2c3d4e5f6a7b8c9d0a02"),
    name: "ผักสดรวมมิตร 500g",
    description: "ผักสดคัดพิเศษจากร้านอาหาร แครอท กะหล่ำปลี บรอกโคลี ผักกาดขาว",
    price: 59.00,
    discountPrice: 29.00,
    category: "vegetables",
    quantity: 20,
    expiryDate: new Date("2024-04-11T00:00:00Z"),
    image: "https://example.com/images/mixed-veggies.jpg",
    restaurantId: ObjectId("661c3d4e5f6a7b8c9d0b0a02"),
    isFlashSale: true,
    createdAt: new Date("2024-04-10T06:00:00Z"),
    updatedAt: new Date("2024-04-10T06:00:00Z")
  },
  {
    _id: ObjectId("661b2c3d4e5f6a7b8c9d0a03"),
    name: "เนื้อวัวออสเตรเลียสไลด์ 300g",
    description: "เนื้อวัวออสเตรเลียสไลด์บาง สำหรับทำสุกี้หรือชาบู คุณภาพพรีเมียม",
    price: 299.00,
    discountPrice: null,
    category: "meat",
    quantity: 30,
    expiryDate: new Date("2024-04-18T00:00:00Z"),
    image: "https://example.com/images/beef-slice.jpg",
    restaurantId: ObjectId("661c3d4e5f6a7b8c9d0b0a01"),
    isFlashSale: false,
    createdAt: new Date("2024-04-09T10:30:00Z"),
    updatedAt: new Date("2024-04-09T10:30:00Z")
  },
  {
    _id: ObjectId("661b2c3d4e5f6a7b8c9d0a04"),
    name: "กุ้งแม่น้ำเผา 500g",
    description: "กุ้งแม่น้ำสด ขนาดใหญ่ จากร้านอาหารทะเล เหลือจากการบริการลูกค้า ยังสดใหม่",
    price: 450.00,
    discountPrice: 199.00,
    category: "seafood",
    quantity: 10,
    expiryDate: new Date("2024-04-11T00:00:00Z"),
    image: "https://example.com/images/prawns.jpg",
    restaurantId: ObjectId("661c3d4e5f6a7b8c9d0b0a02"),
    isFlashSale: true,
    createdAt: new Date("2024-04-10T07:00:00Z"),
    updatedAt: new Date("2024-04-10T07:00:00Z")
  },
  {
    _id: ObjectId("661b2c3d4e5f6a7b8c9d0a05"),
    name: "ชุดส้มตำปูปลาร้า",
    description: "เซ็ตส้มตำปูปลาร้าพร้อมตำ ประกอบด้วย ปูดอง 3 ตัว, มะละกอสับ, มะเขือเทศ, ถั่วฝักยาว, น้ำปลาร้า",
    price: 149.00,
    discountPrice: null,
    category: "ready-to-cook",
    quantity: 25,
    expiryDate: new Date("2024-04-15T00:00:00Z"),
    image: "https://example.com/images/somtum-set.jpg",
    restaurantId: ObjectId("661c3d4e5f6a7b8c9d0b0a03"),
    isFlashSale: false,
    createdAt: new Date("2024-04-08T09:00:00Z"),
    updatedAt: new Date("2024-04-08T09:00:00Z")
  }
]);

// Find all
db.products.find();