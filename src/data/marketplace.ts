/** Dữ liệu Sàn cấp phép nhân dạng (License). */

export const subjects = [
  {
    id: "ma", name: "Nguyễn M. A.", type: "kol", typeLabel: "Nghệ sĩ · KOL", initials: "MA", tint: "#0c8ce9",
    code: "TID-2026-0087", elements: ["portrait", "voice"], accepting: true, rating: "4.9", reviewsCount: 128,
    priceKind: "fixed", priceText: "8 – 15 tr ₫/lượt", priceNote: "Theo từng lượt khai thác", priceCaption: "Giá mỗi lượt",
    bio: "Ca sĩ – diễn viên hoạt động tại Việt Nam, mạnh về quảng cáo thương mại và campaign nhãn hàng tiêu dùng.",
    usageText: "Quảng cáo, nội dung AI, chiến dịch dài hạn", territory: "Toàn quốc + Đông Nam Á", maxTerm: "24 tháng",
    prohibited: ["Khiêu dâm hoá", "Bôi nhọ, phỉ báng", "Vận động chính trị", "Rượu bia & thuốc lá"],
    reviews: [
      { author: "Công ty CP Bình Minh", role: "Chiến dịch TVC 2025", rating: "5.0", text: "Quy trình cấp phép rõ ràng, phản hồi nhanh. Bằng chứng provenance giúp làm việc với đối tác truyền hình dễ hơn." },
      { author: "Agency Nhất Việt", role: "Campaign mạng xã hội", rating: "4.8", text: "Phạm vi minh bạch, chi phí hiển thị realtime nên duyệt ngân sách nhanh." },
    ],
  },
  {
    id: "tb", name: "Trần B.", type: "voice", typeLabel: "Diễn viên lồng tiếng", initials: "TB", tint: "#00bc7d",
    code: "TID-2026-0104", elements: ["voice"], accepting: true, rating: "4.8", reviewsCount: 64,
    priceKind: "fixed", priceText: "5 – 10 tr ₫/lượt", priceNote: "Theo từng dự án", priceCaption: "Giá mỗi dự án",
    bio: "Diễn viên lồng tiếng chuyên nội dung giáo dục, audiobook và quảng cáo. Có mẫu giọng đa phong cách.",
    usageText: "Lồng tiếng, nội dung AI, quảng cáo", territory: "Toàn quốc", maxTerm: "24 tháng",
    prohibited: ["Khiêu dâm hoá", "Bôi nhọ, phỉ báng", "Nội dung chính trị nhạy cảm"],
    reviews: [
      { author: "Nền tảng EduVoice", role: "Nội dung giáo dục", rating: "4.9", text: "Bản sao giọng chất lượng cao, giấy phép ghi rõ phạm vi lồng tiếng nên yên tâm triển khai." },
    ],
  },
  {
    id: "lc", name: "Lê C.", type: "kol", typeLabel: "Ca sĩ", initials: "LC", tint: "#c79a2b",
    code: "TID-2026-0131", elements: ["portrait", "voice", "name"], accepting: true, rating: "4.7", reviewsCount: 91,
    priceKind: "share", priceText: "% chia sẻ doanh thu", priceNote: "12 – 18% theo doanh thu", priceCaption: "Cơ chế",
    bio: "Ca sĩ có thương hiệu cá nhân mạnh, ưu tiên hợp tác chia sẻ doanh thu cho campaign dài hạn.",
    usageText: "Chiến dịch dài hạn, quảng cáo", territory: "Toàn quốc + Đông Nam Á", maxTerm: "36 tháng",
    prohibited: ["Khiêu dâm hoá", "Bôi nhọ, phỉ báng", "Vận động chính trị", "Cờ bạc & cá cược"],
    reviews: [
      { author: "Thương hiệu thời trang LUXE", role: "Đại sứ 12 tháng", rating: "4.7", text: "Cơ chế chia sẻ doanh thu giúp hai bên gắn kết. Đối soát rõ ràng theo quý." },
    ],
  },
  {
    id: "pd", name: "Phạm D.", type: "model", typeLabel: "Người mẫu", initials: "PD", tint: "#7c5cff",
    code: "TID-2026-0158", elements: ["portrait", "style"], accepting: true, rating: "4.9", reviewsCount: 47,
    priceKind: "fixed", priceText: "12 – 20 tr ₫/lượt", priceNote: "Theo bộ ảnh / chiến dịch", priceCaption: "Giá mỗi lượt",
    bio: "Người mẫu thời trang & thương mại, phù hợp campaign hình ảnh cao cấp và nội dung AI phong cách.",
    usageText: "Quảng cáo, nội dung AI, chiến dịch dài hạn", territory: "Toàn cầu", maxTerm: "18 tháng",
    prohibited: ["Khiêu dâm hoá", "Bôi nhọ, phỉ báng", "Chỉnh sửa vóc dáng gây hiểu lầm"],
    reviews: [
      { author: "Nhãn mỹ phẩm SORA", role: "KV chiến dịch", rating: "5.0", text: "Hình ảnh chuyên nghiệp, giấy phép phủ toàn cầu giúp chạy campaign đa thị trường." },
    ],
  },
  {
    id: "ve", name: "Vũ E.", type: "kol", typeLabel: "MC · Người dẫn chương trình", initials: "VE", tint: "#0c8ce9",
    code: "TID-2026-0176", elements: ["portrait", "voice", "name"], accepting: true, rating: "4.6", reviewsCount: 38,
    priceKind: "fixed", priceText: "10 tr ₫/lượt", priceNote: "Giá cố định", priceCaption: "Giá mỗi lượt",
    bio: "MC truyền hình và sự kiện, hình ảnh đáng tin cậy, phù hợp nội dung thương hiệu và giáo dục.",
    usageText: "Quảng cáo, lồng tiếng, nội dung AI", territory: "Toàn quốc", maxTerm: "12 tháng",
    prohibited: ["Khiêu dâm hoá", "Bôi nhọ, phỉ báng", "Sản phẩm tài chính rủi ro cao"],
    reviews: [
      { author: "Ngân hàng số Timo", role: "Video hướng dẫn", rating: "4.6", text: "Giọng & hình ảnh chuẩn mực, hợp với nội dung tài chính – giáo dục." },
    ],
  },
  {
    id: "df", name: "Đỗ F.", type: "athlete", typeLabel: "Vận động viên", initials: "DF", tint: "#fe9a00",
    code: "TID-2026-0192", elements: ["portrait", "name"], accepting: false, rating: "4.8", reviewsCount: 29,
    priceKind: "share", priceText: "% chia sẻ doanh thu", priceNote: "Tạm dừng nhận yêu cầu mới", priceCaption: "Cơ chế",
    bio: "Vận động viên chuyên nghiệp, thương hiệu gắn với thể thao & lối sống lành mạnh.",
    usageText: "Chiến dịch dài hạn, quảng cáo", territory: "Toàn quốc", maxTerm: "24 tháng",
    prohibited: ["Khiêu dâm hoá", "Bôi nhọ, phỉ báng", "Rượu bia & thuốc lá", "Cờ bạc & cá cược"],
    reviews: [
      { author: "Nhãn thể thao STRIDE", role: "Đại sứ mùa giải", rating: "4.8", text: "Hình ảnh tích cực, phù hợp giá trị thương hiệu thể thao." },
    ],
  },
];

export const ELEM_LABEL = { portrait: "Chân dung", voice: "Giọng nói", style: "Phong cách", name: "Tên & thương hiệu" };
export const USAGE_BASE = { ads: 12, ai: 8, dub: 6, campaign: 20 };
export const USAGE_LABEL = { ads: "Quảng cáo", ai: "Nội dung AI", dub: "Lồng tiếng", campaign: "Chiến dịch" };
export const TERR_MULT = { vn: 1, sea: 1.4, global: 1.8 };
export const TERR_LABEL = { vn: "Việt Nam", sea: "Đông Nam Á", global: "Toàn cầu" };

export const usageOptions = [
  { key: "ads", title: "Quảng cáo thương mại", desc: "TVC, banner, KV nhãn hàng" },
  { key: "ai", title: "Nội dung do AI tạo", desc: "Sinh hình ảnh/video bằng AI" },
  { key: "dub", title: "Lồng tiếng / bản sao giọng", desc: "Voice clone, đọc lời bình" },
  { key: "campaign", title: "Chiến dịch thương hiệu dài hạn", desc: "Đại sứ, hợp tác nhiều giai đoạn" },
];

export const operatorTypes = [
  { key: "dn", title: "Doanh nghiệp", desc: "Nhãn hàng, DN sản xuất" },
  { key: "agency", title: "Agency", desc: "Đại diện cho nhãn hàng" },
  { key: "platform", title: "Nền tảng", desc: "Sàn / nền tảng số" },
];

export const filterDefs = [
  {
    key: "subject", label: "Loại chủ thể",
    options: [["all", "Tất cả"], ["kol", "Nghệ sĩ · KOL"], ["actor", "Diễn viên"], ["voice", "Lồng tiếng"], ["model", "Người mẫu"], ["athlete", "VĐV thể thao"]],
  },
  {
    key: "usage", label: "Loại hình khai thác",
    options: [["all", "Tất cả"], ["ads", "Quảng cáo thương mại"], ["ai", "Nội dung AI tạo"], ["dub", "Lồng tiếng / voice clone"], ["campaign", "Chiến dịch dài hạn"]],
  },
  {
    key: "territory", label: "Lãnh thổ",
    options: [["all", "Mọi lãnh thổ"], ["vn", "Việt Nam"], ["sea", "Đông Nam Á"], ["global", "Toàn cầu"]],
  },
  {
    key: "budget", label: "Ngân sách",
    options: [["all", "Mọi mức"], ["lt10", "Dưới 10 tr"], ["10_20", "10 – 20 tr"], ["gt20", "Trên 20 tr"], ["share", "% chia sẻ"]],
  },
  {
    key: "element", label: "Yếu tố nhân dạng",
    options: [["all", "Tất cả"], ["portrait", "Chân dung"], ["voice", "Giọng nói"], ["style", "Phong cách"], ["name", "Tên & thương hiệu"]],
  },
];

export const operatorNames = {
  dn: "Công ty TNHH AEON Việt Nam",
  agency: "Agency Nhất Việt",
  platform: "Nền tảng số VietStream",
};

export const expiryByTerm = {
  3: "16/10/2026", 6: "16/01/2027", 9: "16/04/2027", 12: "16/07/2027",
  15: "16/10/2027", 18: "16/01/2028", 21: "16/04/2028", 24: "16/07/2028",
  27: "16/10/2028", 30: "16/01/2029", 33: "16/04/2029", 36: "16/07/2029",
};

export const postLicenseDuties = [
  { icon: "fingerprint-1", iconBg: "rgba(12,140,233,.1)", color: "#0c8ce9", secondary: "#bcdffb", title: "Gắn nhãn provenance", desc: "Tích hợp Watermark API để mọi nội dung khai thác đều truy vết được về giấy phép này." },
  { icon: "security-umbrella", iconBg: "rgba(0,188,125,.12)", color: "#00bc7d", secondary: "#a7e8cf", title: "Khai thác đúng phạm vi", desc: "Không dùng ngoài loại hình, yếu tố, kênh & lãnh thổ đã cấp phép." },
  { icon: "coin-share", iconBg: "rgba(199,154,43,.14)", color: "#c79a2b", secondary: "#ecd9a3", title: "Đối soát & thanh toán", desc: "Dòng tiền qua tài khoản tách bạch, đối soát định kỳ minh bạch với chủ thể." },
];
