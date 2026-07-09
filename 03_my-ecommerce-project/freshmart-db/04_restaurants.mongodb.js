use("freshmart-db");

// clear existing data
db.restaurants.deleteMany({});

// insert sample restaurants
db.restaurants.insertMany([
  {
    _id: ObjectId("661c3d4e5f6a7b8c9d0b0a01"),
    name: "ร้านชาบูวันพีซ",
    description: "ร้านชาบูสไตล์ญี่ปุ่น วัตถุดิบคุณภาพพรีเมียม",
    address: {
      street: "100/1 ถนนประดิษฐ์มนูธรรม",
      district: "ลาดพร้าว",
      province: "กรุงเทพมหานคร",
      zipCode: "10230"
    },
    phone: "02-123-4567",
    email: "shabupi@restaurant.com",
    rating: 4.5,
    image: "https://example.com/images/shabu-one-piece.jpg",
    createdAt: new Date("2024-03-01T08:00:00Z"),
    updatedAt: new Date("2024-04-10T12:00:00Z")
  },
  {
    _id: ObjectId("661c3d4e5f6a7b8c9d0b0a02"),
    name: "ครัวทะเลเผา",
    description: "ร้านอาหารทะเลสด ราคากันเอง ปรุงสดใหม่ทุกวัน",
    address: {
      street: "200 หมู่ 5 ถนนบางนา-ตราด",
      district: "บางนา",
      province: "กรุงเทพมหานคร",
      zipCode: "10260"
    },
    phone: "02-234-5678",
    email: "seafood@restaurant.com",
    rating: 4.2,
    image: "https://example.com/images/kitchen-seafood.jpg",
    createdAt: new Date("2024-02-15T09:00:00Z"),
    updatedAt: new Date("2024-04-09T15:30:00Z")
  },
  {
    _id: ObjectId("661c3d4e5f6a7b8c9d0b0a03"),
    name: "ส้มตำป้าสอน",
    description: "ร้านอาหารอีสานแท้ ส้มตำ ส้มตำ ปิ้งย่าง สไตล์อีสาน",
    address: {
      street: "55/2 ถนนรามคำแหง",
      district: "มีนบุรี",
      province: "กรุงเทพมหานคร",
      zipCode: "10510"
    },
    phone: "02-345-6789",
    email: "somsomtum@restaurant.com",
    rating: 4.8,
    image: "https://example.com/images/somtum-pa-sorn.jpg",
    createdAt: new Date("2024-01-20T10:00:00Z"),
    updatedAt: new Date("2024-04-11T08:00:00Z")
  },
  {
    _id: ObjectId("661c3d4e5f6a7b8c9d0b0a04"),
    name: "ข้าวต้มปลาเด็ด",
    description: "ข้าวต้มปลากราย ปลาสด เนื้อนุ่ม เปิด 24 ชั่วโมง",
    address: {
      street: "999 ถนนเจริญนคร",
      district: "คลองสาน",
      province: "กรุงเทพมหานคร",
      zipCode: "10600"
    },
    phone: "02-456-7890",
    email: "porridge@restaurant.com",
    rating: 4.0,
    image: "https://example.com/images/porridge.jpg",
    createdAt: new Date("2024-03-10T07:00:00Z"),
    updatedAt: new Date("2024-04-08T16:00:00Z")
  },
  {
    _id: ObjectId("661c3d4e5f6a7b8c9d0b0a05"),
    name: "พิซซ่าฮาวาย",
    description: "ร้านพิซซ่าและอาหารอิตาเลียน วัตถุดิบนำเข้าจากต่างประเทศ",
    address: {
      street: "77/7 ถนนสีลม",
      district: "บางรัก",
      province: "กรุงเทพมหานคร",
      zipCode: "10500"
    },
    phone: "02-567-8901",
    email: "pizzahawai@restaurant.com",
    rating: 4.3,
    image: "https://example.com/images/pizza-hawaii.jpg",
    createdAt: new Date("2024-03-05T08:30:00Z"),
    updatedAt: new Date("2024-04-10T10:00:00Z")
  }
]);

// Find all
db.restaurants.find()
