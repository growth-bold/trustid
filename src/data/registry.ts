/** Sổ đăng bạ công khai — dữ liệu minh hoạ cho tính năng tra cứu mã uỷ quyền. */

export const registryDb = {
  "TID-2025-0042": {
    code: "TID-2025-0042",
    status: "Còn hiệu lực",
    statusKind: "active",
    updated: "02/07/2026",
    fields: [
      { label: "Chủ thể được bảo hộ", value: "Nguyễn M. A. (Nghệ sĩ · KOL)" },
      { label: "Bên được cấp phép", value: "Công ty CP Truyền thông Bình Minh" },
      { label: "Phạm vi khai thác", value: "Giọng nói · Quảng cáo TVC nội địa" },
      { label: "Hiệu lực từ", value: "12/03/2026" },
      { label: "Hết hiệu lực", value: "12/03/2027" },
      { label: "Cơ chế thu hộ", value: "Tài khoản tách bạch · đối soát theo quý" },
    ],
  },
  "TID-2025-0117": {
    code: "TID-2025-0117",
    status: "Còn hiệu lực",
    statusKind: "active",
    updated: "28/06/2026",
    fields: [
      { label: "Chủ thể được bảo hộ", value: "Trần B. (Diễn viên lồng tiếng)" },
      { label: "Bên được cấp phép", value: "Nền tảng học trực tuyến EduVoice" },
      { label: "Phạm vi khai thác", value: "Khuôn mặt + Giọng nói · Nội dung giáo dục" },
      { label: "Hiệu lực từ", value: "05/05/2026" },
      { label: "Hết hiệu lực", value: "05/05/2028" },
      { label: "Cơ chế thu hộ", value: "Tài khoản tách bạch · đối soát theo tháng" },
    ],
  },
  "TID-2024-9003": {
    code: "TID-2024-9003",
    status: "Đã thu hồi (chủ thể rút uỷ quyền)",
    statusKind: "revoked",
    updated: "19/01/2026",
    fields: [
      { label: "Chủ thể được bảo hộ", value: "Lê C. (Ca sĩ)" },
      { label: "Bên được cấp phép", value: "Công ty TNHH Giải trí Sao Việt" },
      { label: "Phạm vi khai thác", value: "Giọng nói · Đã chấm dứt hiệu lực" },
      { label: "Ngày cấp", value: "10/08/2024" },
      { label: "Ngày thu hồi", value: "19/01/2026" },
      { label: "Ghi chú", value: "Chủ thể thực hiện quyền rút uỷ quyền minh thị." },
    ],
  },
};

export const registrySamples = [
  { code: "TID-2025-0042", label: "TID-2025-0042" },
  { code: "TID-2025-0117", label: "TID-2025-0117" },
  { code: "TID-2024-9003", label: "TID-2024-9003 (đã thu hồi)" },
];

export const statusColor = {
  active: { color: "#007a55", background: "#d0fae5" },
  revoked: { color: "#9f0712", background: "#ffe2e2" },
  pending: { color: "#bb4d00", background: "#fef3c6" },
};
