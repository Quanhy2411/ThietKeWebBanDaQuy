// assets/js/data.js
const products = [
  // --- NHẪN ---
  {
    id: 1,
    name: "Nhẫn Kim Cương Vàng 18K TPL",
    price: 25000000,
    image: "images/DsTrangSuc/timGiHomNay/nhankimcuong.png",
    category: "nhan",
    description: "Thiết kế sang trọng với kim cương tự nhiên đạt chuẩn.",
  },
  {
    id: 2,
    name: "Nhẫn Cưới Kim Cương Vàng Trắng",
    price: 15800000,
    image: "images/DsTrangSuc/timGiHomNay/nhan_cuoi.png",
    category: "nhan",
    description: "Biểu tượng của tình yêu vĩnh cửu, chất liệu vàng trắng 14K.",
  },
  {
    id: 3,
    name: "Nhẫn Cầu Hôn Solitaire",
    price: 32000000,
    image: "images/DsTrangSuc/timGiHomNay/nhan_cau_hon.png",
    category: "nhan",
    description: "Thiết kế tối giản làm nổi bật viên kim cương chủ.",
  },

  // --- BÔNG TAI ---
  {
    id: 4,
    name: "Bông tai Vàng trắng đính đá ECZ",
    price: 5400000,
    image: "images/DsTrangSuc/timGiHomNay/bong_tai_ecz.png",
    category: "bong-tai",
    description: "Lấp lánh mọi góc nhìn với đá ECZ cao cấp.",
  },
  {
    id: 5,
    name: "Bông tai Magnétique Citine",
    price: 13441000,
    image: "images/DsTrangSuc/spDaXem/sp1.png",
    category: "bong-tai",
    description: "Đá Citine mang lại năng lượng tích cực và may mắn.",
  },

  // --- DÂY CHUYỀN ---
  {
    id: 6,
    name: "Dây chuyền Vàng 18K TPL Classic",
    price: 8900000,
    image: "images/DsTrangSuc/timGiHomNay/day_chuyen_vang.png",
    category: "day-chuyen",
    description: "Mắt xích tinh tế, bền bỉ theo thời gian.",
  },

  // --- ĐỒNG HỒ ---
  {
    id: 7,
    name: "Đồng hồ Kim cương Nữ TPL Watch",
    price: 45000000,
    image: "images/DsTrangSuc/timGiHomNay/dong_ho_kim_cuong.png",
    category: "dong-ho",
    description: "Sự kết hợp hoàn hảo giữa trang sức và thời gian.",
  },

  // --- TRANG SỨC BẠC/NAM/MAY MẮN ---
  {
    id: 8,
    name: "Nhẫn Nam Mạnh Mẽ Onyx",
    price: 7200000,
    image: "images/DsTrangSuc/timGiHomNay/trang_suc_nam.jpg",
    category: "trang-suc-nam",
    description: "Thiết kế nam tính, đính đá Onyx đen quyền lực.",
  },
  {
    id: 9,
    name: "Lắc tay bạc Ý S925",
    price: 1200000,
    image: "images/DsTrangSuc/timGiHomNay/trang_suc_bac.jpg",
    category: "trang-suc-bac",
    description: "Chất liệu bạc cao cấp chống xỉn màu.",
  },
  {
    id: 10,
    name: "Mặt dây chuyền Tỳ Hưu May Mắn",
    price: 3500000,
    image: "images/DsTrangSuc/timGiHomNay/trang_suc_may_man.jpg",
    category: "may-man",
    description: "Vật phẩm phong thủy mang lại tài lộc.",
  },
  {
    id: 11,
    name: "Bộ trang sức cưới Truyền Thống",
    price: 120000000,
    image: "images/DsTrangSuc/timGiHomNay/trangsuccuoi.png",
    category: "cuoi",
    description: "Vàng 24K nguyên chất cho ngày trọng đại.",
  },
  {
    id: 12,
    name: "Nhẫn Kim Cương Moissanite",
    price: 12500000,
    image: "images/DsTrangSuc/timGiHomNay/kim_cuong.png",
    category: "nhan",
    description: "Vẻ đẹp của kim cương với mức giá tối ưu.",
  },
  {
    id: 13,
    name: "Nhẫn Vàng 18K đính đá Citrine TPL",
    price: 18500000,
    image: "images/DaQuy/GNCTXMY000209.png",
    category: "nhan",
    description:
      "Sắc vàng rực rỡ từ đá Citrine thiên nhiên kết hợp cùng vỏ vàng 18K mang lại sự thịnh vượng.",
  },
  {
    id: 14,
    name: "Nhẫn Vàng Hồng 14K đính đá Garnet",
    price: 12500000,
    image: "images/DaQuy/GNGNXMX000001_copy.png",
    category: "nhan",
    description:
      "Sự kết hợp hoàn hảo giữa đá Garnet đỏ nồng nàn và chất liệu vàng hồng quyến rũ.",
  },
  {
    id: 15,
    name: "Nhẫn Vàng Hồng 14K đính đá Moonstone",
    price: 11200000,
    image: "images/DaQuy/GNMOXMH000011.png",
    category: "nhan",
    description:
      "Vẻ đẹp huyền bí của đá mặt trăng (Moonstone) trên nền vàng hồng tinh tế.",
  },
  {
    id: 16,
    name: "Nhẫn Bạc đính đá Peridot TPL",
    price: 4500000,
    image: "images/DaQuy/GNNPXMW000025.png",
    category: "nhan",
    description:
      "Màu xanh olive đặc trưng của đá Peridot giúp tôn vinh vẻ đẹp trẻ trung, năng động.",
  },
  {
    id: 17,
    name: "Nhẫn Vàng 18K đính đá Ruby Quý Phái",
    price: 32000000,
    image: "images/DaQuy/GNRBXMY000540_copy.png",
    category: "nhan",
    description:
      "Viên Ruby đỏ huyết rực rỡ bao quanh bởi kim cương tấm đạt chuẩn quốc tế.",
  },
  {
    id: 18,
    name: "Nhẫn Vàng Trắng 14K đính đá Sapphire",
    price: 28500000,
    image: "images/DaQuy/GNSPXMW000050.png",
    category: "nhan",
    description:
      "Sắc xanh thẳm của Sapphire đại diện cho lòng trung thành và sự quyền quý.",
  },
  {
    id: 19,
    name: "Nhẫn Vàng Trắng 14K đính đá Topaz Blue",
    price: 15800000,
    image: "images/DaQuy/GNTPXMW000279.png",
    category: "nhan",
    description:
      "Đá Topaz xanh nước biển tinh khôi mang lại cảm giác bình yên và thư thái.",
  },
  {
    id: 20,
    name: "Bông tai Vàng trắng đính đá Citrine",
    price: 8500000,
    image: "images/DsTrangSuc/spDaXem/sp1.png",
    category: "bongtai",
    description:
      "Đôi bông tai dáng dài thanh lịch, điểm xuyết đá Citrine vàng rực rỡ trên nền vàng trắng cao cấp.",
  },
  {
    id: 21,
    name: "Bông tai Vàng đính đá Ruby Asymmetry",
    price: 9200000,
    image: "images/DsTrangSuc/spDaXem/sp2.png",
    category: "bongtai",
    description:
      "Thiết kế bất đối xứng độc đáo với sắc đỏ Ruby, mang lại vẻ ngoài cá tính và hiện đại cho phái đẹp.",
  },
  {
    id: 22,
    name: "Dây chuyền Vàng trắng Trái tim Kim cương",
    price: 18900000,
    image: "images/DsTrangSuc/spDaXem/sp3.png",
    category: "daychuyen",
    description:
      "Mặt dây chuyền hình trái tim tinh khôi đính kim cương tấm, biểu tượng của tình yêu vĩnh cửu.",
  },
  {
    id: 23,
    name: "Mặt dây chuyền Vàng trắng đính đá Citrine",
    price: 5600000,
    image: "images/DsTrangSuc/spDaXem/sp4.png",
    category: "matdaychuyen",
    description:
      "Thiết kế mặt dây nhỏ nhắn, tinh tế với sự kết hợp giữa đá Citrine và đá tấm lấp lánh.",
  },
  {
    id: 24,
    name: "Nhẫn Nam Vàng 18K Kim Tiền Ruby",
    price: 22500000,
    image: "images/DsTrangSuc/spDaXem/sp5.png",
    category: "nhan",
    description:
      "Nhẫn nam thiết kế họa tiết kim tiền mang ý nghĩa tài lộc, trung tâm là viên Ruby đỏ quyền lực.",
  },
];
