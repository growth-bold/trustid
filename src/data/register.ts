/** Dữ liệu cho luồng đăng ký bảo hộ nhân dạng. */

export const stepMeta = {
  1: {
    label: "Tài khoản",
    title: "Tạo tài khoản & loại chủ thể",
    desc: "Mở tài khoản bằng email và số điện thoại, rồi cho chúng tôi biết bạn đăng ký với tư cách nào.",
  },
  2: {
    label: "Xác thực",
    title: "Xác thực danh tính",
    desc: "Định danh để nhân dạng của bạn có giá trị pháp lý và chống giả mạo. Giấy tờ được mã hoá.",
  },
  3: {
    label: "Hồ sơ",
    title: "Xây dựng hồ sơ nhân dạng",
    desc: "Chọn những yếu tố nhân dạng bạn muốn đưa vào bảo hộ. Bạn có thể thay đổi bất cứ lúc nào.",
  },
  4: {
    label: "Ủy quyền",
    title: "Thiết lập mặc định ủy quyền",
    desc: "Đặt quyền khai thác mặc định và giá gợi ý. Mỗi giấy phép cụ thể vẫn do bạn duyệt riêng.",
  },
  5: {
    label: "Đồng ý",
    title: "Xem lại & đồng ý pháp lý",
    desc: "Rà soát lần cuối và đồng ý minh thị. Hoàn tất sẽ mở Ví bản quyền của bạn.",
  },
};

export const subjectOptions = [
  { key: "canhan", icon: "user-circle-single", iconBg: "rgba(12,140,233,.1)", color: "#0c8ce9", secondary: "#bcdffb", title: "Cá nhân", desc: "Bảo hộ nhân dạng của chính bạn." },
  { key: "kol", icon: "user-feedback-heart", iconBg: "rgba(199,154,43,.14)", color: "#c79a2b", secondary: "#ecd9a3", title: "Nghệ sĩ · KOL", desc: "Có thương hiệu cá nhân, nhiều lượt khai thác." },
  { key: "tochuc", icon: "office-building-1", iconBg: "rgba(98,116,142,.14)", color: "#62748e", secondary: "#c3ccd8", title: "Đại diện tổ chức", desc: "Đăng ký thay cho nghệ sĩ/nhân sự thuộc tổ chức." },
];

export const profileElements = [
  { key: "portrait", icon: "user-circle-single", title: "Chân dung / khuôn mặt" },
  { key: "voice", icon: "voice-activation-check-validate", title: "Giọng nói" },
  { key: "style", icon: "user-feedback-heart", title: "Phong cách / cử chỉ" },
  { key: "brand", icon: "text-file", title: "Tên & thương hiệu cá nhân" },
];

export const authTypes = [
  { key: "ads", title: "Quảng cáo thương mại" },
  { key: "aicontent", title: "Nội dung do AI tạo" },
  { key: "dubbing", title: "Lồng tiếng / bản sao giọng" },
  { key: "campaign", title: "Chiến dịch thương hiệu dài hạn" },
];

export const prohibitedChips = [
  { key: "chinhtri", label: "Vận động chính trị" },
  { key: "tongiao", label: "Nội dung tôn giáo nhạy cảm" },
  { key: "canhtranh", label: "Đối thủ cạnh tranh trực tiếp" },
];

export const nextSteps = [
  { icon: "fingerprint-1", iconBg: "rgba(12,140,233,.1)", color: "#0c8ce9", secondary: "#bcdffb", title: "Bổ sung dữ liệu mẫu", desc: "Nâng chất lượng chân dung & giọng nói để định giá cao và chống giả mạo tốt hơn.", action: "Mở hồ sơ" },
  { icon: "coin-share", iconBg: "rgba(199,154,43,.14)", color: "#c79a2b", secondary: "#ecd9a3", title: "Bật hiển thị trên Sàn", desc: "Cho phép các bên khai thác tìm thấy bạn và gửi yêu cầu cấp phép hợp pháp.", action: "Thiết lập Sàn" },
  { icon: "security-umbrella", iconBg: "rgba(0,188,125,.12)", color: "#00bc7d", secondary: "#a7e8cf", title: "Rà soát quyền & điều cấm", desc: "Kiểm tra lại mặc định ủy quyền và danh sách điều cấm trước khi có yêu cầu đầu tiên.", action: "Xem quyền" },
];
