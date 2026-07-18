/** Dữ liệu minh hoạ cho bảng điều khiển chủ thể (Dashboard). */

export const sidebarNav = [
  { icon: "dashboard-gauge-1", label: "Tổng quan", active: true },
  { icon: "wallet", label: "Ví bản quyền" },
  { icon: "text-file", label: "Hợp đồng ủy quyền" },
  { icon: "coin-share", label: "Doanh thu" },
  { icon: "fingerprint-1", label: "Lượt sử dụng" },
  { icon: "security-umbrella", label: "Đồng ý & Quyền riêng tư" },
];

export const metricCards = [
  {
    label: "Doanh thu kỳ này",
    icon: "coin-share",
    iconBg: "rgba(0,188,125,.12)",
    color: "#00bc7d",
    secondary: "#a7e8cf",
    value: "248,5",
    unit: "tr ₫",
    delta: "12,4%",
    line: "#00bc7d",
    path: "M2 20 L12 17 L22 19 L32 12 L42 14 L52 7 L62 9 L70 3",
    area: "M2 20 L12 17 L22 19 L32 12 L42 14 L52 7 L62 9 L70 3 L70 26 L2 26 Z",
    areaFill: "rgba(0,188,125,.1)",
  },
  {
    label: "Lượt sử dụng nhân dạng",
    icon: "fingerprint-1",
    iconBg: "rgba(12,140,233,.1)",
    color: "#0c8ce9",
    secondary: "#bcdffb",
    value: "1.842",
    delta: "6,1%",
    line: "#0c8ce9",
    path: "M2 18 L12 20 L22 13 L32 15 L42 10 L52 12 L62 6 L70 8",
    area: "M2 18 L12 20 L22 13 L32 15 L42 10 L52 12 L62 6 L70 8 L70 26 L2 26 Z",
    areaFill: "rgba(12,140,233,.1)",
  },
];

export const allocation = [
  { label: "Quảng cáo", color: "#0c8ce9", value: "42%", dash: "42 58", offset: 0 },
  { label: "Nội dung AI", color: "#c79a2b", value: "28%", dash: "28 72", offset: -42 },
  { label: "Bản sao hội thoại", color: "#00bc7d", value: "18%", dash: "18 82", offset: -70 },
  { label: "Nền tảng Aeon", color: "#62748e", value: "12%", dash: "12 88", offset: -88 },
];

export const topExploiters = [
  { name: "Aeon Studio", amount: "86,2 tr ₫" },
  { name: "VietAd Group", amount: "61,4 tr ₫" },
  { name: "Mira AI Labs", amount: "44,9 tr ₫" },
];

export const activityFeed = [
  {
    icon: "coin-share",
    iconBg: "rgba(0,188,125,.12)",
    color: "#00bc7d",
    secondary: "#a7e8cf",
    body: "revenue",
    code: "TX-8f3a…c21",
    meta: "Băm SHA-256 · đã neo thời gian",
    time: "09:42 · 16/07",
  },
  {
    icon: "text-file",
    iconBg: "rgba(254,154,0,.14)",
    color: "#fe9a00",
    secondary: "#ffe1b0",
    body: "request",
    code: "RQ-2026-0231",
    pill: { label: "Chờ duyệt", color: "#8a5000", bg: "#fff3dd" },
    time: "08:15 · 16/07",
  },
  {
    icon: "fingerprint-1",
    iconBg: "rgba(12,140,233,.1)",
    color: "#0c8ce9",
    secondary: "#bcdffb",
    body: "provenance",
    code: "PRV-1d90…a7",
    meta: "Tra cứu công khai",
    time: "21:30 · 15/07",
  },
  {
    icon: "text-file",
    iconBg: "rgba(199,154,43,.14)",
    color: "#c79a2b",
    secondary: "#ecd9a3",
    body: "license",
    code: "GP-2026-0175",
    pill: { label: "Hiệu lực", color: "#007a55", bg: "#d6f7ea" },
    time: "14:07 · 15/07",
  },
];
