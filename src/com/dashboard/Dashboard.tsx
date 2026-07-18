"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowUpRight, IconBell, IconShield, IconPlayerPause } from "@tabler/icons-react";
import { Seal } from "@/com/brand/Seal";
import { DuotoneIcon } from "@/com/icon/duotone";
import { Button } from "@/com/ui/Button";
import { cn } from "@/lib/cn";
import {
  sidebarNav,
  metricCards,
  allocation,
  topExploiters,
  activityFeed,
} from "@/data/dashboard";

const UpTrend = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 13V3M4 7l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Dashboard = () => {
  const [consent, setConsent] = useState("allow"); // allow | pause | revoke
  const [period, setPeriod] = useState("thang");
  const [onSale, setOnSale] = useState(true);

  const pausedAny = consent !== "allow";
  const consentText =
    consent === "allow"
      ? "Tất cả yếu tố nhân dạng đang được phép khai thác theo giấy phép hiệu lực."
      : consent === "pause"
        ? "Đã tạm dừng toàn bộ khai thác mới. Giấy phép hiện có bị treo cho tới khi bạn kích hoạt lại."
        : "Bạn đã thu hồi đồng ý. Mọi khai thác phải chấm dứt — các bên liên quan đang được thông báo.";

  const segColors = { allow: "#00bc7d", pause: "#fe9a00", revoke: "#fb2c36" };

  return (
    <div className="flex min-h-screen bg-ivory font-sans">
      {/* SIDEBAR */}
      <aside className="sticky top-0 hidden h-screen w-[262px] shrink-0 flex-col bg-navy text-[#c3cede] min-[1100px]:flex">
        <div className="flex items-center gap-3 border-b border-white/[.08] p-[20px_20px_18px]">
          <Seal size={42} />
          <div className="leading-[1.15]">
            <div className="font-serif text-[18px] font-bold text-white">TrustID</div>
            <div className="mt-0.5 text-[10.5px] text-[#8ea0ba]">Bảng điều khiển chủ thể</div>
          </div>
        </div>
        <nav className="flex flex-1 flex-col gap-[3px] overflow-y-auto p-[16px_12px]">
          <div className="p-[6px_12px_8px] text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#6f81a0]">
            Quản trị nhân dạng
          </div>
          {sidebarNav.map((item) => (
            <a
              key={item.label}
              href="#"
              className={cn(
                "flex items-center gap-3 rounded-[10px] p-[10px_12px] text-sm transition",
                item.active
                  ? "border-l-[3px] border-blue bg-[rgba(12,140,233,.16)] font-semibold text-white"
                  : "font-medium text-[#c3cede] hover:bg-white/[.05] hover:text-white"
              )}
            >
              <DuotoneIcon
                name={item.icon}
                size={19}
                color={item.active ? "#7fc0f5" : "#8ea0ba"}
                secondaryColor={item.active ? "#0c8ce9" : "#b9c6d9"}
              />
              <span className="flex-1">{item.label}</span>
              {item.label === "Hợp đồng ủy quyền" && (
                <span className="rounded-full bg-[#fe9a00] px-2 py-px text-[11px] font-bold text-[#3a2400]">
                  3
                </span>
              )}
            </a>
          ))}
          <div className="mx-3 my-3 h-px bg-white/[.08]" />
          <a
            href="#"
            className="flex items-center gap-3 rounded-[10px] p-[10px_12px] text-sm font-medium text-[#c3cede] transition hover:bg-white/[.05] hover:text-white"
          >
            <DuotoneIcon name="cog" size={19} color="#8ea0ba" secondaryColor="#b9c6d9" />
            Cài đặt
          </a>
        </nav>
        <div className="border-t border-white/[.08] p-3.5">
          <div className="flex items-center gap-[11px] rounded-xl border border-white/10 bg-white/[.05] p-[11px_12px]">
            <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--tid-blue),#0b6fbb)] text-sm font-bold text-white">
              MA
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[13.5px] font-semibold text-white">Nguyễn M. A.</div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#8ea0ba]">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-2" />
                Định danh mức 3
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN COLUMN */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* TOPBAR */}
        <header className="sticky top-0 z-40 flex items-center gap-[18px] border-b border-line bg-white/[.92] p-[12px_28px] backdrop-blur-[10px] backdrop-saturate-150">
          <div className="flex max-w-[420px] flex-1 items-center gap-2.5 rounded-[10px] border border-line bg-white p-[9px_13px] shadow-[0_1px_2px_rgba(15,23,43,.05)]">
            <DuotoneIcon name="magnifier" size={16} color="#62748e" secondaryColor="#c3ccd8" />
            <input
              placeholder="Tìm giấy phép, bên khai thác, mã xác thực…"
              className="w-full border-none bg-transparent text-sm text-ink outline-none"
            />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <button
              onClick={() => setOnSale((v) => !v)}
              className="flex items-center gap-2.5 rounded-full border border-line bg-transparent p-[6px_8px_6px_14px]"
            >
              <span className="text-[12.5px] font-semibold text-mute">Hiển thị trên Sàn</span>
              <span
                className={cn(
                  "relative h-[22px] w-10 rounded-full transition-colors",
                  onSale ? "bg-[#00bc7d]" : "bg-[#cfd6e0]"
                )}
              >
                <span
                  className={cn(
                    "absolute top-0.5 h-[18px] w-[18px] rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,.28)] transition-[left]",
                    onSale ? "left-5" : "left-0.5"
                  )}
                />
              </span>
            </button>
            <span className="h-[26px] w-px bg-line" />
            <button className="relative flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-line bg-white">
              <DuotoneIcon name="bell" size={18} color="#62748e" secondaryColor="#c3ccd8" />
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full border-2 border-white bg-[#fb2c36] px-1 text-[10px] font-bold text-white">
                3
              </span>
            </button>
            <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--tid-blue),#0b6fbb)] text-[13.5px] font-bold text-white">
              MA
            </span>
          </div>
        </header>

        {/* CONTENT */}
        <main className="box-border w-full max-w-[1400px] flex-1 p-[26px_28px_40px]">
          {/* Banner khi tạm dừng / thu hồi */}
          {pausedAny && (
            <div className="mb-5 flex items-center gap-4 rounded-xl border-[1.5px] border-[#ffe1b0] border-l-4 border-l-[#fe9a00] bg-[#fff8ec] p-[16px_22px]">
              <DuotoneIcon name="security-umbrella" size={24} color="#fe9a00" secondaryColor="#ffe1b0" />
              <div className="flex-1">
                <div className="text-[15px] font-bold text-[#8a5000]">
                  Hồ sơ đang ở trạng thái {consent === "revoke" ? "thu hồi" : "tạm dừng"}
                </div>
                <div className="mt-0.5 text-[13.5px] text-[#8a6a2e]">
                  Mọi khai thác mới đã bị treo. Giấy phép hiện có tạm ngưng cho tới khi bạn kích hoạt
                  lại.
                </div>
              </div>
              <button
                onClick={() => setConsent("allow")}
                className="rounded-xl bg-blue px-4 py-2.5 text-[13.5px] font-bold text-white"
              >
                Kích hoạt lại
              </button>
            </div>
          )}

          {/* PAGE HEADER */}
          <div className="mb-[22px] flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Tổng quan</div>
              <h1 className="mt-1.5 font-serif text-[29px] font-bold leading-[1.15] text-navy">
                Xin chào, Nguyễn M. A.
              </h1>
              <p className="mt-1.5 text-[14.5px] text-mute">
                Bức tranh toàn cảnh về tài sản nhân dạng số của bạn — kỳ tháng 7, 2026.
              </p>
            </div>
            <div className="flex gap-2.5">
              <Button variant="secondary" size="md" className="hui-btn">
                Xuất báo cáo
              </Button>
              <Button variant="primary" size="md" className="hui-btn">
                Tạo giấy phép mới
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {/* ROW 1 — METRIC CARDS */}
            <div className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 min-[1100px]:grid-cols-4">
              {metricCards.map((m) => (
                <MetricCard key={m.label} {...m} />
              ))}
              {/* Giấy phép đang hiệu lực */}
              <div className="rounded-[14px] border border-line bg-white p-[18px_20px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-mute">Giấy phép đang hiệu lực</span>
                  <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-[rgba(199,154,43,.14)]">
                    <DuotoneIcon name="text-file" size={18} color="#c79a2b" secondaryColor="#ecd9a3" />
                  </span>
                </div>
                <div className="mt-3 font-serif text-[30px] font-bold leading-none text-navy">24</div>
                <div className="mt-3.5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff3dd] px-2.5 py-[3px] text-xs font-semibold text-[#8a5000]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#fe9a00]" />3 chờ duyệt
                  </span>
                  <span className="text-xs text-mute">2 sắp hết hạn</span>
                </div>
              </div>
              {/* Phiên bản AI */}
              <div className="rounded-[14px] border border-line bg-white p-[18px_20px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-mute">Phiên bản AI đang hoạt động</span>
                  <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-[rgba(98,116,142,.14)]">
                    <DuotoneIcon name="fingerprint-1" size={18} color="#62748e" secondaryColor="#c3ccd8" />
                  </span>
                </div>
                <div className="mt-3 font-serif text-[30px] font-bold leading-none text-navy">5</div>
                <div className="mt-3.5 flex items-center justify-between">
                  <span className="text-xs text-mute">Chân dung · Giọng · Hội thoại</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00bc7d]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00bc7d]" />
                    Giám sát
                  </span>
                </div>
              </div>
            </div>

            {/* ROW 2 — CONTROL & HEALTH */}
            <div className="grid grid-cols-1 gap-4 min-[1100px]:grid-cols-[1.15fr_1fr_1fr]">
              {/* Consent control */}
              <div className="flex flex-col rounded-[14px] border border-line bg-white p-5 shadow-[0_6px_18px_rgba(15,23,43,.05)]">
                <div className="flex items-center gap-2.5">
                  <DuotoneIcon name="security-umbrella" size={20} color="#0c8ce9" secondaryColor="#bcdffb" />
                  <span className="text-[15.5px] font-bold text-navy">Kiểm soát đồng ý</span>
                </div>
                <div className="mt-4 flex gap-1 rounded-xl border border-line bg-ivory p-1">
                  {[
                    ["allow", "Đang cho phép"],
                    ["pause", "Tạm dừng"],
                    ["revoke", "Đã thu hồi"],
                  ].map(([key, label]) => {
                    const active = consent === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setConsent(key)}
                        className={cn(
                          "flex-1 rounded-[9px] p-[9px_6px] text-center text-[12.5px] transition",
                          active ? "font-bold text-white" : "font-semibold text-mute"
                        )}
                        style={active ? { background: segColors[key], boxShadow: `0 2px 6px ${segColors[key]}55` } : undefined}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-3.5 text-[13.5px] leading-[1.55] text-mute">{consentText}</p>
                <div className="flex-1" />
                <div className="mt-4">
                  {consent === "allow" ? (
                    <>
                      <button
                        onClick={() => setConsent("pause")}
                        className="flex w-full items-center justify-center gap-2 rounded-[11px] bg-[#fb2c36] p-3 text-[14.5px] font-bold text-white shadow-[0_3px_10px_rgba(251,44,54,.28)]"
                      >
                        <IconPlayerPause size={15} stroke={2} />
                        Tạm dừng toàn bộ khai thác
                      </button>
                      <button
                        onClick={() => setConsent("revoke")}
                        className="mt-0.5 w-full p-2.5 text-[13px] font-semibold text-[#fb2c36]"
                      >
                        Rút lại đồng ý vĩnh viễn
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setConsent("allow")}
                      className="w-full rounded-[11px] bg-[#00bc7d] p-3 text-[14.5px] font-bold text-white shadow-[0_3px_10px_rgba(0,188,125,.28)]"
                    >
                      Kích hoạt lại đồng ý
                    </button>
                  )}
                </div>
              </div>

              {/* Identity profile */}
              <div className="rounded-[14px] border border-line bg-white p-5 shadow-[0_6px_18px_rgba(15,23,43,.05)]">
                <div className="flex items-center justify-between">
                  <span className="text-[15.5px] font-bold text-navy">Hồ sơ nhân dạng</span>
                  <Seal size={34} />
                </div>
                <div className="mt-4 flex flex-col gap-2.5">
                  {[
                    { icon: "user-circle-single", label: "Chân dung", on: true },
                    { icon: "voice-activation-check-validate", label: "Giọng nói", on: true },
                    { icon: "text-file", label: "Tên & định danh", on: false },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center justify-between rounded-[10px] bg-ivory p-[10px_12px]">
                      <span className="flex items-center gap-2.5 text-[13.5px] font-medium text-ink">
                        <DuotoneIcon
                          name={r.icon}
                          size={17}
                          color={r.on ? "#0c8ce9" : "#62748e"}
                          secondaryColor={r.on ? "#bcdffb" : "#c3ccd8"}
                        />
                        {r.label}
                      </span>
                      {r.on ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d6f7ea] px-2.5 py-0.5 text-[11.5px] font-semibold text-[#00bc7d]">
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />
                          Đang bật
                        </span>
                      ) : (
                        <span className="rounded-full bg-[#eef0f3] px-2.5 py-0.5 text-[11.5px] font-semibold text-[#62748e]">
                          Chỉ chọn lọc
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-3.5 flex items-center justify-between border-t border-dashed border-line pt-3.5">
                  <div>
                    <div className="text-[11px] text-mute">Mức định danh</div>
                    <div className="mt-px text-sm font-bold text-navy">Mức 3 · KYC đầy đủ</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(199,154,43,.12)] px-2.5 py-1 text-[11.5px] font-bold text-gold">
                    <IconShield size={12} stroke={1.6} />
                    Đã bảo chứng
                  </span>
                </div>
              </div>

              {/* Compliance alerts */}
              <div className="flex flex-col rounded-[14px] border border-line bg-white p-5 shadow-[0_6px_18px_rgba(15,23,43,.05)]">
                <div className="flex items-center justify-between">
                  <span className="text-[15.5px] font-bold text-navy">Cảnh báo tuân thủ</span>
                  <span className="flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-[#fb2c36] px-[7px] text-xs font-bold text-white">
                    2
                  </span>
                </div>
                <div className="mt-3.5 flex items-start gap-2.5 rounded-[11px] border border-[#ffccce] bg-[#fff2f2] p-[13px_14px]">
                  <DuotoneIcon name="warning-diamond" size={20} color="#fb2c36" secondaryColor="#ffc9cb" />
                  <div>
                    <div className="text-[13.5px] font-semibold leading-[1.35] text-[#9f0712]">
                      Nghi vấn dùng ngoài phạm vi
                    </div>
                    <div className="mt-0.5 text-[12.5px] text-[#7a2226]">GP-2026-0188 · Bright Media</div>
                  </div>
                </div>
                <div className="mt-2.5 flex items-start gap-2.5 rounded-[11px] border border-[#ffe1b0] bg-[#fff8ec] p-[13px_14px]">
                  <DuotoneIcon name="text-file" size={20} color="#fe9a00" secondaryColor="#ffe1b0" />
                  <div>
                    <div className="text-[13.5px] font-semibold leading-[1.35] text-[#8a5000]">
                      2 giấy phép sắp hết hạn
                    </div>
                    <div className="mt-0.5 text-[12.5px] text-[#8a6a2e]">Trong vòng 14 ngày tới</div>
                  </div>
                </div>
                <div className="flex-1" />
                <button className="mt-4 w-full rounded-[11px] bg-blue p-2.5 text-[14px] font-bold text-white">
                  Xem &amp; xử lý
                </button>
              </div>
            </div>

            {/* ROW 3 — ANALYTICS */}
            <div className="grid grid-cols-1 gap-4 min-[1100px]:grid-cols-[1.5fr_1fr]">
              {/* Revenue line chart */}
              <div className="rounded-[14px] border border-line bg-white p-5 shadow-[0_6px_18px_rgba(15,23,43,.05)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-[15.5px] font-bold text-navy">
                      Doanh thu bản quyền theo thời gian
                    </div>
                    <div className="mt-0.5 text-[12.5px] text-mute">Đã phân phối về chủ thể · triệu ₫</div>
                  </div>
                  <div className="flex gap-[3px] rounded-[10px] border border-line bg-ivory p-[3px]">
                    {[
                      ["thang", "Theo tháng"],
                      ["quy", "Theo quý"],
                    ].map(([key, label]) => (
                      <button
                        key={key}
                        onClick={() => setPeriod(key)}
                        className={cn(
                          "rounded-lg p-[6px_13px] text-[12.5px] font-semibold transition",
                          period === key ? "bg-navy text-white" : "bg-transparent text-mute"
                        )}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-[18px]">
                  <svg viewBox="0 0 620 240" width="100%" className="block overflow-visible">
                    <defs>
                      <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(12,140,233,.22)" />
                        <stop offset="100%" stopColor="rgba(12,140,233,0)" />
                      </linearGradient>
                    </defs>
                    <g stroke="#eef1f5" strokeWidth="1">
                      <line x1="40" y1="30" x2="620" y2="30" />
                      <line x1="40" y1="80" x2="620" y2="80" />
                      <line x1="40" y1="130" x2="620" y2="130" />
                      <line x1="40" y1="180" x2="620" y2="180" />
                    </g>
                    <g fill="#9aa6b6" fontSize="11" textAnchor="end">
                      <text x="32" y="34">320</text>
                      <text x="32" y="84">240</text>
                      <text x="32" y="134">160</text>
                      <text x="32" y="184">80</text>
                    </g>
                    <path
                      d="M60 168 L112 150 L164 158 L216 120 L268 132 L320 96 L372 104 L424 70 L476 86 L528 52 L580 60"
                      fill="none"
                      stroke="#0c8ce9"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M60 168 L112 150 L164 158 L216 120 L268 132 L320 96 L372 104 L424 70 L476 86 L528 52 L580 60 L580 190 L60 190 Z"
                      fill="url(#revFill)"
                    />
                    <circle cx="528" cy="52" r="8" fill="rgba(12,140,233,.16)" />
                    <circle cx="528" cy="52" r="4" fill="#0c8ce9" />
                    <g fill="#9aa6b6" fontSize="11" textAnchor="middle">
                      <text x="60" y="208">T9</text>
                      <text x="164" y="208">T10</text>
                      <text x="268" y="208">T11</text>
                      <text x="372" y="208">T12</text>
                      <text x="476" y="208">T1</text>
                      <text x="580" y="208">T7</text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Donut allocation */}
              <div className="rounded-[14px] border border-line bg-white p-5 shadow-[0_6px_18px_rgba(15,23,43,.05)]">
                <div className="text-[15.5px] font-bold text-navy">Phân bổ theo loại hình</div>
                <div className="mt-3.5 flex items-center gap-[18px]">
                  <svg width="120" height="120" viewBox="0 0 42 42" className="shrink-0 -rotate-90">
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#eef1f5" strokeWidth="7" />
                    {allocation.map((a) => (
                      <circle
                        key={a.label}
                        cx="21"
                        cy="21"
                        r="15.9"
                        fill="none"
                        stroke={a.color}
                        strokeWidth="7"
                        strokeDasharray={a.dash}
                        strokeDashoffset={a.offset}
                      />
                    ))}
                  </svg>
                  <div className="flex flex-1 flex-col gap-2.5">
                    {allocation.map((a) => (
                      <div key={a.label} className="flex items-center justify-between text-[12.5px]">
                        <span className="flex items-center gap-2 text-ink">
                          <span className="h-[9px] w-[9px] rounded-[3px]" style={{ background: a.color }} />
                          {a.label}
                        </span>
                        <b className="text-navy">{a.value}</b>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 border-t border-dashed border-line pt-3.5">
                  <div className="mb-2.5 text-xs font-semibold text-mute">Top bên khai thác</div>
                  <div className="flex flex-col gap-2.5">
                    {topExploiters.map((t) => (
                      <div key={t.name} className="flex items-center justify-between text-[12.5px]">
                        <span className="text-ink">{t.name}</span>
                        <b className="text-navy">{t.amount}</b>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 4 — ACTIVITY FEED */}
            <div className="rounded-[14px] border border-line bg-white p-[20px_22px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-[15.5px] font-bold text-navy">Nhật ký hoạt động</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef0f3] px-2.5 py-[3px] text-[11px] font-semibold text-[#62748e]">
                    <IconShield size={11} stroke={1.7} />
                    Không thể chỉnh sửa
                  </span>
                </div>
                <Link href="#" className="text-[13px] font-semibold">
                  Xem tất cả
                </Link>
              </div>
              <div className="flex flex-col">
                {activityFeed.map((a, i) => (
                  <div
                    key={i}
                    className={cn(
                      "grid grid-cols-[34px_1fr_auto] gap-3.5 py-[15px]",
                      i < activityFeed.length - 1 && "border-b border-line"
                    )}
                  >
                    <span
                      className="flex h-[34px] w-[34px] items-center justify-center rounded-full"
                      style={{ background: a.iconBg }}
                    >
                      <DuotoneIcon name={a.icon} size={17} color={a.color} secondaryColor={a.secondary} />
                    </span>
                    <div>
                      <div className="text-sm text-ink">
                        <ActivityBody body={a.body} />
                      </div>
                      <div className="mt-[7px] flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#cfe6fb] bg-[#eef7ff] px-2 py-[3px] font-mono text-[11.5px] text-blue-2">
                          {a.code}
                          <IconArrowUpRight size={11} stroke={1.6} />
                        </span>
                        {a.meta && <span className="text-[11.5px] text-[#9aa6b6]">{a.meta}</span>}
                        {a.pill && (
                          <span
                            className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                            style={{ color: a.pill.color, background: a.pill.bg }}
                          >
                            {a.pill.label}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="whitespace-nowrap text-xs text-[#9aa6b6]">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line bg-white p-[16px_28px] text-xs text-[#9aa6b6]">
          <span>© 2026 TrustID · Giấy phép hoạt động số 0123/GP-HHBCND</span>
          <span className="inline-flex flex-wrap items-center gap-3.5">
            <span>Căn cứ: Luật 91/2025/QH15 · NĐ 356/2025/NĐ-CP</span>
            <Link href="#">Điều khoản</Link>
            <Link href="#">Chính sách dữ liệu</Link>
            <Link href="#">Kênh khiếu nại</Link>
          </span>
        </footer>
      </div>
    </div>
  );
};

const MetricCard = ({ label, icon, iconBg, color, secondary, value, unit = undefined, delta, line, path, area, areaFill }: any) => (
  <div className="rounded-[14px] border border-line bg-white p-[18px_20px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
    <div className="flex items-center justify-between">
      <span className="text-[13px] font-medium text-mute">{label}</span>
      <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px]" style={{ background: iconBg }}>
        <DuotoneIcon name={icon} size={18} color={color} secondaryColor={secondary} />
      </span>
    </div>
    <div className="mt-3 font-serif text-[30px] font-bold leading-none text-navy">
      {value}
      {unit && <span className="ml-[3px] text-[15px] font-semibold text-mute">{unit}</span>}
    </div>
    <div className="mt-3 flex items-center justify-between">
      <span className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#00bc7d]">
        <UpTrend />
        {delta}
      </span>
      <svg width="72" height="26" viewBox="0 0 72 26" fill="none">
        <path d={path} stroke={line} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={area} fill={areaFill} />
      </svg>
    </div>
  </div>
);

const ActivityBody = ({ body }) => {
  if (body === "revenue")
    return (
      <>
        Thanh toán bản quyền <b className="text-[#00bc7d]">+12,8 tr ₫</b> từ{" "}
        <b className="text-navy">Aeon Studio</b>
      </>
    );
  if (body === "request")
    return (
      <>
        Yêu cầu cấp phép mới cần duyệt từ <b className="text-navy">VietAd Group</b>
      </>
    );
  if (body === "provenance") return <>Nội dung được gắn nhãn nguồn gốc &amp; xác thực provenance</>;
  return (
    <>
      Giấy phép <b className="text-navy">GP-2026-0175</b> cấp cho <b className="text-navy">Mira AI Labs</b>
    </>
  );
};

export default Dashboard;
