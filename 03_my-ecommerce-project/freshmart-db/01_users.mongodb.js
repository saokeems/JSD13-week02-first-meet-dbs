use("freshmart-db");

// clear existing data
db.users.deleteMany({});

// insert sample data
db.users.insertMany([
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9d01"),
    name: "สมหญิง ใจดี",
    email: "somying@email.com",
    password: "$2b$10$hashedpassword123",
    phone: "081-234-5678",
    address: {
      street: "123 ถนนสุขุมวิท",
      district: "วัฒนา",
      province: "กรุงเทพมหานคร",
      zipCode: "10110",
    },
    createdAt: new Date("2024-04-01T08:30:00Z"),
    updatedAt: new Date("2024-04-10T12:00:00Z"),
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9d02"),
    name: "สมชาย เรียนดี",
    email: "somchai@email.com",
    password: "$2b$10$hashedpassword456",
    phone: "082-345-6789",
    address: {
      street: "456 ถนนพหลโยธิน",
      district: "จตุจักร",
      province: "กรุงเทพมหานคร",
      zipCode: "10900",
    },
    createdAt: new Date("2024-04-02T10:15:00Z"),
    updatedAt: new Date("2024-04-11T09:45:00Z"),
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9d03"),
    name: "มานี มีสุข",
    email: "manee@email.com",
    password: "$2b$10$hashedpassword789",
    phone: "083-456-7890",
    address: {
      street: "789 ถนนเจริญกรุง",
      district: "บางรัก",
      province: "กรุงเทพมหานคร",
      zipCode: "10500",
    },
    createdAt: new Date("2024-04-03T14:20:00Z"),
    updatedAt: new Date("2024-04-12T08:30:00Z"),
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9d04"),
    name: "วิชัย รักดี",
    email: "wichai@email.com",
    password: "$2b$10$hashedpassword101",
    phone: "084-567-8901",
    address: {
      street: "321 ถนนพระราม 2",
      district: "บางขุนเทียน",
      province: "กรุงเทพมหานคร",
      zipCode: "10150",
    },
    createdAt: new Date("2024-04-05T16:45:00Z"),
    updatedAt: new Date("2024-04-13T11:20:00Z"),
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9d05"),
    name: "สุดา รวยทรัพย์",
    email: "suda@email.com",
    password: "$2b$10$hashedpassword202",
    phone: "085-678-9012",
    address: {
      street: "654 ถนนรัชดาภิเษก",
      district: "ดินแดง",
      province: "กรุงเทพมหานคร",
      zipCode: "10400",
    },
    createdAt: new Date("2024-04-07T09:00:00Z"),
    updatedAt: new Date("2024-04-14T15:10:00Z"),
  },
]);

// Find all
db.users.find();
