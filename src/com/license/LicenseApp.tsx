"use client";

import { useState } from "react";
import {
  IconSearch,
  IconArrowRight,
  IconArrowLeft,
  IconStarFilled,
  IconCheck,
  IconLock,
  IconInfoCircle,
  IconShieldCheck,
  IconWritingSign,
  IconDownload,
  IconShield,
} from "@tabler/icons-react";
import { Seal } from "@/com/brand/Seal";
import { DuotoneIcon } from "@/com/icon/duotone";
import { cn } from "@/lib/cn";
import {
  subjects as SUBJECTS,
  ELEM_LABEL,
  USAGE_BASE,
  USAGE_LABEL,
  TERR_MULT,
  TERR_LABEL,
  usageOptions,
  operatorTypes,
  filterDefs,
  operatorNames,
  expiryByTerm,
  postLicenseDuties,
} from "@/data/marketplace";

const OK = "#00bc7d";

const Switch = ({ on }) => (
  <span
    className={cn(
      "relative h-[25px] w-11 shrink-0 rounded-full transition-colors",
      on ? "bg-[#00bc7d]" : "bg-[#cfd6e0]",
    )}
  >
    <span
      className={cn(
        "absolute top-[2.5px] h-5 w-5 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,.28)] transition-[left]",
        on ? "left-[21px]" : "left-[2.5px]",
      )}
    />
  </span>
);

const RadioDot = ({ on }) => (
  <span
    className={cn(
      "box-border h-5 w-5 shrink-0 rounded-full bg-white transition",
      on ? "border-[6px] border-blue" : "border-2 border-[#cfd6e0]",
    )}
  />
);

const inputCls =
  "box-border w-full rounded-[11px] border border-line bg-white p-[12px_14px] text-[14.5px] text-ink shadow-[0_1px_2px_rgba(15,23,43,.05)] outline-none focus:border-blue";

export const LicenseApp = () => {
  const [view, setView] = useState("market"); // market | detail | config | issued
  const [tab, setTab] = useState("market"); // market | direct
  const [q, setQ] = useState("");
  const [f, setF] = useState({
    subject: "all",
    usage: "all",
    territory: "all",
    budget: "all",
    element: "all",
  });
  const [selected, setSelected] = useState("ma");
  const [cstep, setCstep] = useState(1);
  const [opType, setOpType] = useState("dn");
  const [usage, setUsage] = useState({
    ads: true,
    ai: false,
    dub: false,
    campaign: false,
  });
  const [elements, setElements] = useState({
    portrait: true,
    voice: false,
    style: false,
    name: false,
  });
  const [cfg, setCfg] = useState({
    channel: "social",
    territory: "vn",
    term: 12,
    propose: 20,
  });
  const [priceModel, setPriceModel] = useState("fixed");
  const [comp, setComp] = useState({
    provenance: false,
    scope: false,
    dlcn: false,
    takedown: false,
  });
  const [signed, setSigned] = useState(false);
  const [payMethod, setPayMethod] = useState("bank");

  const d = SUBJECTS.find((s) => s.id === selected) || SUBJECTS[0];
  const toggleUsage = (k) => setUsage((s) => ({ ...s, [k]: !s[k] }));
  const toggleElem = (k) => setElements((s) => ({ ...s, [k]: !s[k] }));

  // ----- Tính chi phí -----
  const usageKeys = ["ads", "ai", "dub", "campaign"].filter((k) => usage[k]);
  const usageBase = usageKeys.reduce((sum, k) => sum + USAGE_BASE[k], 0);
  const elemCount = ["portrait", "voice", "style", "name"].filter(
    (k) => elements[k],
  ).length;
  const elemMult = elemCount <= 1 ? 1 : 1 + 0.25 * (elemCount - 1);
  const terrMult = TERR_MULT[cfg.territory] || 1;
  const termMult = cfg.term / 12;
  const total = Math.round(usageBase * elemMult * terrMult * termMult);

  const usageSummary = usageKeys.length
    ? usageKeys.map((k) => USAGE_LABEL[k]).join(", ")
    : "Chưa chọn";
  const enabledElems = ["portrait", "voice", "style", "name"].filter(
    (k) => elements[k],
  );
  const elementSummary = enabledElems.length
    ? enabledElems.map((k) => ELEM_LABEL[k]).join(", ")
    : "Chưa chọn";
  const termLabel = `${cfg.term} tháng`;
  const scopeSummary = `${TERR_LABEL[cfg.territory] || ""} · ${termLabel}`;
  const priceModelLabel =
    priceModel === "fixed"
      ? "Giá cố định"
      : priceModel === "share"
        ? "Chia sẻ doanh thu 15%"
        : `Đề xuất ${cfg.propose} tr ₫`;

  let totalValue, totalSubcaption, totalLabel;
  if (priceModel === "share") {
    totalValue = "15% doanh thu";
    totalSubcaption = "Đối soát theo quý qua tài khoản tách bạch";
    totalLabel = "Cơ chế chia sẻ";
  } else if (priceModel === "propose") {
    totalValue = `${cfg.propose} tr ₫`;
    totalSubcaption = "Mức đề xuất — chờ chủ thể duyệt";
    totalLabel = "Giá đề xuất";
  } else {
    totalValue = total > 0 ? `${total} tr ₫` : "—";
    totalSubcaption =
      total > 0
        ? `Trọn gói ${termLabel} · đã gồm phí bảo chứng`
        : "Chọn loại hình để tính chi phí";
    totalLabel = "Tổng tạm tính";
  }

  const costLines = [
    {
      label: `Loại hình (${usageKeys.length})`,
      value: usageBase > 0 ? `${usageBase} tr ₫` : "—",
    },
    {
      label: `Yếu tố nhân dạng (${elemCount})`,
      value: `×${elemMult.toFixed(2)}`,
    },
    {
      label: `Lãnh thổ ${TERR_LABEL[cfg.territory] || ""}`,
      value: `×${terrMult.toFixed(1)}`,
    },
    { label: `Thời hạn ${termLabel}`, value: `×${termMult.toFixed(2)}` },
  ];

  const opName = operatorNames[opType];
  const licenseCode = `GP-${d.code.replace("TID-", "")}-K12`;
  const expiryDate = expiryByTerm[cfg.term] || "16/07/2027";

  const contractBlocks = [
    {
      n: "1",
      title: "Các bên",
      value: `${operatorTypes.find((o) => o.key === opType).title} ↔ ${d.name}`,
    },
    { n: "2", title: "Đối tượng", value: `Nhân dạng ${elementSummary}` },
    { n: "3", title: "Phạm vi", value: usageSummary },
    { n: "4", title: "Lãnh thổ & thời hạn", value: scopeSummary },
    {
      n: "5",
      title: "Điều cấm",
      value: `${d.prohibited.length} điều khoản khoá`,
    },
    { n: "6", title: "Tài chính", value: priceModelLabel },
    { n: "7", title: "Provenance", value: "Bắt buộc gắn nhãn" },
    { n: "8", title: "Chấm dứt", value: "Gỡ nhanh khi tranh chấp" },
  ];

  const shared = {
    d,
    usageSummary,
    elementSummary,
    scopeSummary,
    priceModelLabel,
    totalValue,
    totalSubcaption,
    totalLabel,
    costLines,
    contractBlocks,
    operatorName: opName,
    licenseCode,
    expiryDate,
  };

  return (
    <div className="min-h-screen bg-ivory font-sans">
      {view === "market" && (
        <Marketplace
          tab={tab}
          setTab={setTab}
          q={q}
          setQ={setQ}
          f={f}
          setF={setF}
          onOpen={(id) => {
            setSelected(id);
            setView("detail");
          }}
        />
      )}
      {view === "detail" && (
        <SubjectDetail
          d={d}
          onBack={() => {
            setView("market");
            setTab("market");
          }}
          onConfig={() => {
            setView("config");
            setCstep(1);
          }}
        />
      )}
      {view === "config" && (
        <ConfigWizard
          {...shared}
          cstep={cstep}
          setCstep={setCstep}
          opType={opType}
          setOpType={setOpType}
          usage={usage}
          toggleUsage={toggleUsage}
          elements={elements}
          toggleElem={toggleElem}
          cfg={cfg}
          setCfg={setCfg}
          priceModel={priceModel}
          setPriceModel={setPriceModel}
          comp={comp}
          setComp={setComp}
          signed={signed}
          setSigned={setSigned}
          payMethod={payMethod}
          setPayMethod={setPayMethod}
          onBack={() => setView("detail")}
          onIssue={() => signed && setView("issued")}
        />
      )}
      {view === "issued" && (
        <LicenseIssued
          {...shared}
          onBackToMarket={() => {
            setView("market");
            setTab("market");
          }}
        />
      )}

      <footer className="border-t border-line bg-white px-8 py-5">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 text-[12.5px] text-[#9aa6b6]">
          <span>© 2026 TrustID · Giấy phép hoạt động số 0123/GP-HHBCND</span>
          <span className="inline-flex flex-wrap items-center gap-3.5">
            <span>
              Căn cứ: Luật 91/2025/QH15 · NĐ 356/2025/NĐ-CP · NĐ 69/2024/NĐ-CP
            </span>
            <a href="#">Chính sách dữ liệu</a>
            <a href="#">Điều khoản</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

/* ================= MARKETPLACE ================= */

const Marketplace = ({ tab, setTab, q, setQ, f, setF, onOpen }) => {
  const list = SUBJECTS.filter((s) => {
    if (f.subject !== "all" && s.type !== f.subject) return false;
    if (f.element !== "all" && !s.elements.includes(f.element)) return false;
    if (f.budget === "share" && s.priceKind !== "share") return false;
    const qv = q.trim().toLowerCase();
    if (qv && !`${s.name} ${s.typeLabel}`.toLowerCase().includes(qv))
      return false;
    return true;
  });

  return (
    <div data-reveal>
      {/* HERO */}
      <section
        className="relative overflow-hidden text-[#eaf0f8]"
        style={{
          background:
            "radial-gradient(1100px 560px at 82% -20%, #23385a 0%, var(--tid-navy) 50%, var(--tid-navy-2) 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-70px] top-2.5 opacity-[.06]"
        >
          <svg width="440" height="440" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="95"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
            />
            <circle
              cx="100"
              cy="100"
              r="76"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
            />
            <circle
              cx="100"
              cy="100"
              r="57"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="relative mx-auto max-w-[1200px] px-8 pb-[30px] pt-[46px]">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-[640px]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(224,182,74,.35)] bg-[rgba(199,154,43,.14)] px-[15px] py-2 text-[13px] font-semibold text-gold-2">
                <IconShieldCheck size={15} stroke={1.5} />
                Sàn cấp phép được hiệp hội bảo chứng
              </span>
              <h1 className="mt-[18px] text-balance font-serif text-[38px] font-bold leading-[1.16] text-white">
                Tìm chủ thể, cấu hình phạm vi, ký &amp; nhận giấy phép minh
                bạch.
              </h1>
              <p className="mt-3.5 text-base leading-[1.65] text-[#c3cede]">
                Dành cho doanh nghiệp, agency và nền tảng cần khai thác hình
                ảnh, giọng nói hay thương hiệu cá nhân một cách hợp pháp — mọi
                giấy phép đều có bằng chứng bất biến.
              </p>
            </div>
            <div className="shrink-0">
              <Seal size={88} />
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-[26px] inline-flex gap-1 rounded-[13px] border border-white/[.12] bg-white/[.07] p-1">
            {[
              ["market", "Sàn cấp phép"],
              ["direct", "Yêu cầu trực tiếp"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={cn(
                  "rounded-[10px] px-[18px] py-2.5 text-sm font-semibold transition",
                  tab === key
                    ? "bg-white text-navy shadow-[0_2px_8px_rgba(0,0,0,.15)]"
                    : "text-[#c3cede]",
                )}
              >
                {label}
              </button>
            ))}
          </div>

          {tab === "market" && (
            <>
              {/* Search */}
              <div
                data-reveal
                className="mt-3.5 flex flex-wrap items-center gap-2.5 rounded-2xl bg-white p-3.5 shadow-[0_24px_54px_rgba(0,0,0,.32)]"
              >
                <div className="flex min-w-[260px] flex-1 items-center gap-2.5 px-3.5">
                  <IconSearch
                    size={20}
                    stroke={1.6}
                    className="shrink-0 text-mute"
                  />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Tìm theo tên chủ thể, loại hình, ngành hàng…"
                    className="min-w-0 flex-1 border-none bg-transparent py-3.5 text-[15.5px] text-ink outline-none"
                  />
                </div>
                <button className="w-full md:w-fit shrink-0 rounded-xl bg-blue px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_6px_16px_rgba(12,140,233,.3)]">
                  Tìm chủ thể
                </button>
              </div>

              {/* Filters */}
              <div className="mt-3 grid grid-cols-1 gap-2.5 min-[720px]:grid-cols-2 min-[1080px]:grid-cols-5">
                {filterDefs.map((def) => (
                  <label key={def.key} className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-semibold tracking-[0.02em] text-[#9fb0c8]">
                      {def.label}
                    </span>
                    <select
                      value={f[def.key]}
                      onChange={(e) =>
                        setF((s) => ({ ...s, [def.key]: e.target.value }))
                      }
                      className="box-border w-full cursor-pointer rounded-[11px] border-none bg-white p-[11px_13px] text-[13.5px] font-medium text-navy shadow-[0_2px_6px_rgba(0,0,0,.18)]"
                    >
                      {def.options.map(([v, l]) => (
                        <option key={v} value={v}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </label>
                ))}
              </div>

              <div className="mt-3.5 flex items-center gap-2.5 rounded-[11px] border border-white/[.12] bg-white/[.05] p-[10px_15px] text-[12.5px] text-[#9fb0c8]">
                <IconShieldCheck
                  size={16}
                  stroke={1.5}
                  className="shrink-0 text-gold-2"
                />
                Mọi giấy phép được Hiệp hội bảo chứng, có{" "}
                <b className="font-semibold text-[#c3cede]">
                  bằng chứng bất biến
                </b>{" "}
                (tem thời gian + mã băm) và tra cứu công khai bất cứ lúc nào.
              </div>
            </>
          )}
        </div>
      </section>

      {/* DIRECT REQUEST */}
      {tab === "direct" && (
        <main data-reveal className="mx-auto max-w-[760px] px-8 pb-[60px] pt-9">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_6px_18px_rgba(15,23,43,.05)]">
            <div className="px-7 pb-1.5 pt-6">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                Yêu cầu trực tiếp
              </div>
              <h2 className="mt-1.5 font-serif text-[24px] font-bold text-navy">
                Gửi yêu cầu tới một chủ thể cụ thể
              </h2>
              <p className="mt-2 text-sm leading-[1.6] text-mute">
                Đã biết chủ thể cần khai thác? Nhập mã bảo hộ hoặc tên để gửi
                yêu cầu cấp phép trực tiếp. Chủ thể sẽ nhận, duyệt và phản hồi
                qua kênh bảo chứng.
              </p>
            </div>
            <div className="flex flex-col gap-4 px-7 pb-[26px] pt-[18px]">
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-ink">
                  Mã bảo hộ hoặc tên chủ thể
                </label>
                <input
                  placeholder="Ví dụ: TID-2026-0087 · Nguyễn M. A."
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-ink">
                  Mô tả nhu cầu khai thác
                </label>
                <textarea
                  rows={4}
                  placeholder="Loại hình, phạm vi, thời hạn, ngân sách dự kiến…"
                  className={cn(inputCls, "resize-y")}
                />
              </div>
              <div className="flex items-start gap-3 rounded-[11px] border border-[#cfe6fb] bg-[#eef7ff] p-[13px_15px] text-[13px] leading-[1.55] text-[#2a6699]">
                <IconInfoCircle
                  size={17}
                  stroke={1.6}
                  className="mt-px shrink-0 text-blue"
                />
                Gửi yêu cầu <b>không</b> tạo nghĩa vụ tài chính. Chi phí chỉ
                hình thành khi hai bên ký hợp đồng điện tử.
              </div>
              <button
                onClick={() => setTab("market")}
                className="self-start rounded-[11px] bg-blue px-[26px] py-3.5 text-[14.5px] font-bold text-white shadow-[0_6px_16px_rgba(12,140,233,.28)]"
              >
                Gửi yêu cầu cấp phép
              </button>
            </div>
          </div>
        </main>
      )}

      {/* GRID */}
      {tab === "market" && (
        <main className="mx-auto max-w-[1200px] px-8 pb-16 pt-8">
          <div className="mb-[18px] flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-serif text-[22px] font-bold text-navy">
              Chủ thể đang nhận cấp phép
            </h2>
            <span className="text-[13.5px] text-mute">
              {list.length > 0 ? `${list.length} chủ thể phù hợp` : "0 chủ thể"}
            </span>
          </div>

          {list.length > 0 ? (
            <div className="grid grid-cols-1 gap-[18px] min-[720px]:grid-cols-2 min-[1080px]:grid-cols-3">
              {list.map((s) => (
                <SubjectCard key={s.id} s={s} onOpen={() => onOpen(s.id)} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#cfd6e0] bg-white p-11 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-[14px] bg-ivory">
                <IconSearch size={28} stroke={1.5} className="text-mute" />
              </div>
              <div className="mt-3.5 text-[17px] font-bold text-navy">
                Không có chủ thể nào khớp bộ lọc
              </div>
              <div className="mx-auto mt-1.5 max-w-[440px] text-sm leading-[1.55] text-mute">
                Thử nới lỏng loại chủ thể, ngân sách hoặc yếu tố nhân dạng —
                hoặc gửi yêu cầu trực tiếp tới chủ thể bạn đã biết.
              </div>
              <div className="mt-[18px] flex justify-center gap-2.5">
                <button
                  onClick={() =>
                    setF({
                      subject: "all",
                      usage: "all",
                      territory: "all",
                      budget: "all",
                      element: "all",
                    })
                  }
                  className="rounded-[11px] bg-blue px-[22px] py-2.5 text-sm font-semibold text-white"
                >
                  Xoá bộ lọc
                </button>
                <button
                  onClick={() => setTab("direct")}
                  className="rounded-[11px] border-[1.5px] border-line bg-white px-[22px] py-2.5 text-sm font-semibold text-navy"
                >
                  Yêu cầu trực tiếp
                </button>
              </div>
            </div>
          )}
        </main>
      )}
    </div>
  );
};

const SubjectCard = ({ s, onOpen }) => (
  <div className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-[0_6px_18px_rgba(15,23,43,.05)] transition hover:-translate-y-[3px] hover:border-[#cfe0f2] hover:shadow-[0_14px_34px_rgba(15,23,43,.12)]">
    <div className="flex items-center gap-[13px]">
      <span
        className="inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full font-serif text-[21px] font-bold"
        style={{
          color: s.tint,
          background: `${s.tint}1f`,
          border: `1px solid ${s.tint}44`,
        }}
      >
        {s.initials}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-base font-bold leading-[1.25] text-navy">
          {s.name}
        </div>
        <div className="mt-0.5 text-[12.5px] text-mute">{s.typeLabel}</div>
      </div>
      <span
        className={cn(
          "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold",
          s.accepting
            ? "bg-[#d6f7ea] text-[#007a55]"
            : "bg-[#fff3dd] text-[#8a5000]",
        )}
      >
        {s.accepting ? "Đang nhận" : "Tạm dừng"}
      </span>
    </div>
    <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#8a93a3]">
      Yếu tố cấp phép
    </div>
    <div className="mt-2 flex flex-wrap gap-1.5">
      {s.elements.map((k) => (
        <span
          key={k}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-ivory px-2.5 py-[5px] text-xs font-medium text-navy"
        >
          {ELEM_LABEL[k]}
        </span>
      ))}
    </div>
    <div className="mt-4 flex items-end justify-between gap-2.5 border-t border-line pt-3.5">
      <div>
        <div className="text-[11px] text-[#8a93a3]">{s.priceCaption}</div>
        <div className="mt-px font-serif text-[18px] font-bold text-navy">
          {s.priceText}
        </div>
      </div>
      <div className="inline-flex items-center gap-1.5 text-[12.5px] text-mute">
        <IconStarFilled size={13} className="text-gold-2" />
        <b className="font-semibold text-navy">{s.rating}</b>
      </div>
    </div>
    <button
      onClick={onOpen}
      className="mt-4 w-full rounded-[11px] border-[1.5px] border-[#bcdffb] bg-white p-3 text-sm font-semibold text-blue-2 transition hover:border-blue hover:bg-[#eef7ff]"
    >
      Xem gói &amp; xin phép
    </button>
  </div>
);

/* ================= SUBJECT DETAIL ================= */

const KickerLabel = ({ children }) => (
  <div className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
    {children}
  </div>
);

const SubjectDetail = ({ d, onBack, onConfig }) => (
  <main data-reveal className="mx-auto max-w-[1080px] px-8 pb-16 pt-[26px]">
    <button
      onClick={onBack}
      className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-mute"
    >
      <IconArrowLeft size={15} stroke={1.8} />
      Quay lại Sàn
    </button>

    <div className="mt-3 grid grid-cols-1 items-center gap-[22px] rounded-[18px] border border-line bg-white p-[26px_28px] shadow-[0_6px_18px_rgba(15,23,43,.05)] min-[720px]:grid-cols-[auto_1fr_auto]">
      <span
        className="inline-flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full font-serif text-[34px] font-bold"
        style={{
          color: d.tint,
          background: `${d.tint}1f`,
          border: `1px solid ${d.tint}44`,
        }}
      >
        {d.initials}
      </span>
      <div>
        <div className="flex flex-wrap items-center gap-2.5">
          <h1 className="font-serif text-[28px] font-bold text-navy">
            {d.name}
          </h1>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d6f7ea] px-2.5 py-1 text-xs font-semibold text-[#007a55]">
            <IconCheck size={13} stroke={1.9} />
            Nhân dạng đã bảo hộ
          </span>
        </div>
        <div className="mt-1 text-[14.5px] text-mute">
          {d.typeLabel} · Mã bảo hộ{" "}
          <b className="font-mono text-navy">{d.code}</b>
        </div>
        <div className="mt-2.5 inline-flex items-center gap-2 text-[13.5px] text-navy">
          <IconStarFilled size={15} className="text-gold-2" />
          <b className="font-bold">{d.rating}</b>
          <span className="font-medium text-mute">
            · {d.reviewsCount} đánh giá uy tín
          </span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-[11px] uppercase tracking-[0.04em] text-[#8a93a3]">
          Chính sách giá
        </div>
        <div className="mt-0.5 font-serif text-[22px] font-bold text-navy">
          {d.priceText}
        </div>
        <div className="mt-0.5 text-xs text-mute">{d.priceNote}</div>
      </div>
    </div>

    <div className="mt-6 grid grid-cols-1 items-start gap-6 min-[1080px]:grid-cols-[1fr_340px]">
      <div className="flex flex-col gap-[18px]">
        <div className="rounded-2xl border border-line bg-white p-[22px_24px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
          <KickerLabel>Hồ sơ công khai</KickerLabel>
          <p className="mt-2.5 text-[14.5px] leading-[1.65] text-ink">
            {d.bio}
          </p>

          <div className="mt-5 text-[13px] font-semibold text-ink">
            Yếu tố cho phép cấp phép
          </div>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {d.elements.map((k) => (
              <span
                key={k}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#cfe6fb] bg-[#eef7ff] px-3 py-[7px] text-[13px] font-semibold text-[#0b5c9c]"
              >
                <IconCheck size={13} stroke={1.9} />
                {ELEM_LABEL[k]}
              </span>
            ))}
          </div>

          <div className="mt-5 text-[13px] font-semibold text-ink">
            Điều cấm — không bao giờ cấp phép cho
          </div>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {d.prohibited.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#ffccce] bg-[#fff2f2] px-3 py-[7px] text-[13px] font-semibold text-[#9f0712]"
              >
                <IconLock size={12} stroke={1.7} />
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white p-[22px_24px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
          <KickerLabel>Điều kiện khai thác</KickerLabel>
          <div className="mt-3.5 grid grid-cols-2 gap-x-6 gap-y-4">
            {[
              ["Loại hình cho phép", d.usageText],
              ["Lãnh thổ", d.territory],
              ["Thời hạn tối đa", d.maxTerm],
              ["Chính sách giá", d.priceText],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#8a93a3]">
                  {k}
                </div>
                <div className="mt-[3px] text-[14.5px] font-medium text-navy">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white p-[22px_24px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
          <KickerLabel>Đánh giá uy tín</KickerLabel>
          <div className="mt-3.5 flex flex-col gap-3.5">
            {d.reviews.map((r, i) => (
              <div
                key={i}
                className="rounded-xl border border-line bg-ivory p-[14px_16px]"
              >
                <div className="flex items-center justify-between gap-2.5">
                  <div className="text-[13.5px] font-semibold text-navy">
                    {r.author}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[12.5px] text-gold">
                    <IconStarFilled size={12} />
                    <b>{r.rating}</b>
                  </div>
                </div>
                <div className="mt-px text-[11.5px] text-mute">{r.role}</div>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-ink">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="sticky top-24 flex flex-col gap-4">
        <div
          className="rounded-[18px] p-[22px] text-[#eaf0f8] shadow-[0_16px_38px_rgba(15,23,43,.22)]"
          style={{
            background:
              "linear-gradient(160deg,var(--tid-navy),var(--tid-navy-2))",
          }}
        >
          <div className="flex items-center gap-[11px] border-b border-white/[.12] pb-3.5">
            <Seal size={42} />
            <div>
              <div className="text-[15px] font-bold text-white">
                Cấp phép được bảo chứng
              </div>
              <div className="mt-px text-xs text-[#8ea0ba]">
                Hợp đồng điện tử · bằng chứng bất biến
              </div>
            </div>
          </div>
          <div className="mt-3.5 text-[13.5px] leading-[1.6] text-[#c3cede]">
            Cấu hình phạm vi khai thác theo đúng ranh giới chủ thể cho phép. Chi
            phí hiển thị realtime trước khi bạn ký.
          </div>
          <button
            onClick={onConfig}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue p-[15px] text-[15.5px] font-bold text-white shadow-[0_10px_24px_rgba(12,140,233,.4)]"
          >
            Cấu hình giấy phép
            <IconArrowRight size={17} stroke={1.8} />
          </button>
        </div>
        <div className="rounded-2xl border border-line bg-white p-[18px_20px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
          <div className="flex items-start gap-2.5">
            <IconCheck
              size={17}
              stroke={1.8}
              style={{ color: OK }}
              className="mt-px shrink-0"
            />
            <span className="text-[13px] leading-[1.5] text-ink">
              Chủ thể có thể{" "}
              <b className="font-semibold">rút uỷ quyền tức thì</b>; hệ thống hỗ
              trợ gỡ nhanh khi tranh chấp.
            </span>
          </div>
          <div className="mt-2.5 flex items-start gap-2.5">
            <IconCheck
              size={17}
              stroke={1.8}
              style={{ color: OK }}
              className="mt-px shrink-0"
            />
            <span className="text-[13px] leading-[1.5] text-ink">
              Mọi nội dung khai thác được gắn nhãn{" "}
              <b className="font-semibold">provenance</b>.
            </span>
          </div>
        </div>
      </aside>
    </div>
  </main>
);

/* ================= CONFIG WIZARD ================= */

const cStepLabels = [
  "Bên khai thác",
  "Phạm vi",
  "Báo giá",
  "Tuân thủ",
  "Ký & thanh toán",
];
const cTitles = {
  1: "Thông tin bên khai thác",
  2: "Chọn phạm vi khai thác",
  3: "Cơ chế tài chính & báo giá",
  4: "Nghĩa vụ tuân thủ",
  5: "Ký hợp đồng & thanh toán",
};
const cDescs = {
  1: "Cho biết bạn là ai và mục đích khai thác. Thông tin pháp nhân được đối chiếu trước khi cấp phép.",
  2: "Cấu hình phạm vi trong đúng ranh giới chủ thể cho phép. Điều cấm bắt buộc không thể bỏ.",
  3: "Chọn cơ chế chi trả. Chi phí cập nhật realtime ở cột bên phải.",
  4: "Cam kết các nghĩa vụ để giữ giấy phép hợp lệ trong suốt vòng đời khai thác.",
  5: "Rà soát hợp đồng, ký số và khởi tạo yêu cầu thanh toán. Hệ thống không tự chuyển tiền.",
};

const ConfigWizard = (props) => {
  const {
    d,
    cstep,
    setCstep,
    opType,
    setOpType,
    usage,
    toggleUsage,
    elements,
    toggleElem,
    cfg,
    setCfg,
    priceModel,
    setPriceModel,
    comp,
    setComp,
    signed,
    setSigned,
    payMethod,
    setPayMethod,
    onBack,
    onIssue,
    costLines,
    totalLabel,
    totalValue,
    totalSubcaption,
    usageSummary,
    elementSummary,
    scopeSummary,
    priceModelLabel,
    contractBlocks,
  } = props;

  const termLabel = `${cfg.term} tháng`;
  const cstatus = (n) => (cstep > n ? "done" : cstep === n ? "active" : "todo");

  return (
    <main data-reveal className="mx-auto max-w-[1200px] px-8 pb-16 pt-[26px]">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-mute"
      >
        <IconArrowLeft size={15} stroke={1.8} />
        Quay lại hồ sơ chủ thể
      </button>

      <div className="mt-2.5 grid grid-cols-1 items-start gap-7 min-[1080px]:grid-cols-[1fr_372px]">
        <div>
          {/* Stepper */}
          <div className="mb-5 rounded-2xl border border-line bg-white p-[20px_22px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
            <div className="flex items-center justify-between gap-2">
              {cStepLabels.map((label, i) => {
                const n = i + 1;
                const status = cstatus(n);
                return (
                  <div key={n} className="contents">
                    <div className="flex flex-col items-center gap-[7px]">
                      <span
                        className={cn(
                          "flex h-[34px] w-[34px] items-center justify-center rounded-full text-sm font-bold",
                          status === "done" &&
                            "bg-blue text-white shadow-[0_2px_8px_rgba(12,140,233,.35)]",
                          status === "active" &&
                            "border-2 border-blue bg-white text-blue shadow-[0_0_0_4px_rgba(12,140,233,.14)]",
                          status === "todo" &&
                            "border-[1.5px] border-line bg-ivory text-[#9aa6b6]",
                        )}
                      >
                        {n}
                      </span>
                      <span
                        className={cn(
                          "whitespace-nowrap text-xs max-[720px]:hidden",
                          status === "todo"
                            ? "font-medium text-[#9aa6b6]"
                            : "font-semibold text-navy",
                        )}
                      >
                        {label}
                      </span>
                    </div>
                    {n < 5 && (
                      <span
                        className={cn(
                          "h-0.5 min-w-[12px] flex-1 rounded-sm",
                          cstep > n ? "bg-blue" : "bg-line",
                        )}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_6px_18px_rgba(15,23,43,.05)]">
            <div className="px-7 pb-2 pt-6">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                Bước {cstep} / 5 · cấu hình cho {d.name}
              </div>
              <h2 className="mt-1.5 font-serif text-[24px] font-bold leading-[1.2] text-navy">
                {cTitles[cstep]}
              </h2>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-mute">
                {cDescs[cstep]}
              </p>
            </div>

            <div className="px-7 pb-1 pt-[18px]">
              {cstep === 1 && (
                <ConfigStep1 opType={opType} setOpType={setOpType} />
              )}
              {cstep === 2 && (
                <ConfigStep2
                  usage={usage}
                  toggleUsage={toggleUsage}
                  elements={elements}
                  toggleElem={toggleElem}
                  cfg={cfg}
                  setCfg={setCfg}
                  d={d}
                  termLabel={termLabel}
                />
              )}
              {cstep === 3 && (
                <ConfigStep3
                  priceModel={priceModel}
                  setPriceModel={setPriceModel}
                  cfg={cfg}
                  setCfg={setCfg}
                  costLines={costLines}
                  totalLabel={totalLabel}
                  totalValue={totalValue}
                />
              )}
              {cstep === 4 && <ConfigStep4 comp={comp} setComp={setComp} />}
              {cstep === 5 && (
                <ConfigStep5
                  contractBlocks={contractBlocks}
                  signed={signed}
                  setSigned={setSigned}
                  payMethod={payMethod}
                  setPayMethod={setPayMethod}
                />
              )}
            </div>

            <div className="mt-3.5 flex items-center justify-between gap-3 border-t border-line px-7 pb-[22px] pt-[18px]">
              <button
                onClick={() => (cstep > 1 ? setCstep(cstep - 1) : onBack())}
                className="inline-flex items-center gap-2 rounded-[11px] border-[1.5px] border-line bg-white px-5 py-3 text-[14.5px] font-semibold text-navy"
              >
                <IconArrowLeft size={15} stroke={1.8} />
                Quay lại
              </button>
              {cstep < 5 ? (
                <button
                  onClick={() => setCstep(Math.min(5, cstep + 1))}
                  className="inline-flex items-center gap-2 rounded-[11px] bg-blue px-6 py-3 text-[14.5px] font-bold text-white shadow-[0_3px_10px_rgba(12,140,233,.28)]"
                >
                  Tiếp tục
                  <IconArrowRight size={15} stroke={1.8} />
                </button>
              ) : (
                <button
                  onClick={onIssue}
                  disabled={!signed}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-[11px] px-[22px] py-3 text-[14.5px] font-bold transition",
                    signed
                      ? "cursor-pointer bg-navy text-white shadow-[0_6px_16px_rgba(25,40,61,.3)]"
                      : "cursor-not-allowed bg-[#e7ebf1] text-[#a2adbd]",
                  )}
                >
                  <IconShieldCheck size={16} stroke={1.9} />
                  Ký &amp; khởi tạo cấp phép
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="sticky top-24 flex flex-col gap-4">
          <div
            className="relative overflow-hidden rounded-2xl p-[20px_22px] text-[#eaf0f8] shadow-[0_16px_38px_rgba(15,23,43,.22)]"
            style={{
              background:
                "linear-gradient(160deg,var(--tid-navy),var(--tid-navy-2))",
            }}
          >
            <div
              aria-hidden
              className="absolute -right-[30px] -top-[30px] opacity-10"
            >
              <svg width="160" height="160" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <div className="relative flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-gold-2">
                <DuotoneIcon
                  name="text-file"
                  size={16}
                  color="#e0b64a"
                  secondaryColor="#ecd9a3"
                />
                Tóm tắt giấy phép
              </span>
              <span className="text-[11px] text-[#8ea0ba]">Bước {cstep}/5</span>
            </div>
            <div className="mt-3.5 font-serif text-[19px] font-bold text-white">
              {d.name}
            </div>
            <div className="mt-0.5 text-[12.5px] text-[#9fb0c8]">
              {d.typeLabel}
            </div>
            <div className="mt-4 flex flex-col gap-2.5 border-t border-dashed border-white/[.16] pt-3.5">
              {[
                ["Loại hình", usageSummary],
                ["Yếu tố", elementSummary],
                ["Lãnh thổ · thời hạn", scopeSummary],
                ["Cơ chế", priceModelLabel],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-3 text-[12.5px]"
                >
                  <span className="text-[#8ea0ba]">{k}</span>
                  <span className="text-right font-medium text-white">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-[18px_20px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
            <div className="flex items-center justify-between">
              <span className="text-[14.5px] font-bold text-navy">
                Chi phí tạm tính
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-blue">
                <span className="h-[7px] w-[7px] rounded-full bg-blue" />
                Realtime
              </span>
            </div>
            <div className="mt-2 font-serif text-[30px] font-bold text-navy">
              {totalValue}
            </div>
            <div className="mt-0.5 text-[12.5px] text-mute">
              {totalSubcaption}
            </div>
            <div className="mt-3.5 h-1.5 overflow-hidden rounded-full bg-ivory">
              <span
                className="block h-full rounded-full transition-[width]"
                style={{
                  width: `${(cstep / 5) * 100}%`,
                  background: "linear-gradient(90deg,var(--tid-blue),#0b6fbb)",
                }}
              />
            </div>
            <div className="mt-2 text-[11.5px] text-mute">
              Đã hoàn thành {cstep}/5 bước cấu hình
            </div>
          </div>

          <div className="flex items-center gap-[11px] rounded-2xl border border-line bg-white p-[16px_18px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
            <Seal size={40} />
            <div className="text-[12.5px] leading-[1.5] text-mute">
              Giao dịch được Hiệp hội bảo chứng. Chủ thể giữ quyền{" "}
              <b className="text-navy">rút uỷ quyền tức thì</b>.
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

const ConfigStep1 = ({ opType, setOpType }) => (
  <div data-reveal className="flex flex-col gap-4">
    <div>
      <div className="mb-2.5 text-[13px] font-semibold text-ink">
        Loại bên khai thác
      </div>
      <div className="grid grid-cols-1 gap-2.5 min-[560px]:grid-cols-3">
        {operatorTypes.map((o) => (
          <button
            key={o.key}
            onClick={() => setOpType(o.key)}
            className={cn(
              "w-full rounded-[13px] border-[1.5px] p-[13px_15px] text-left transition",
              opType === o.key
                ? "border-blue bg-[#f2f8ff]"
                : "border-line bg-white",
            )}
          >
            <span className="block text-sm font-semibold text-navy">
              {o.title}
            </span>
            <span className="mt-[3px] block text-xs text-mute">{o.desc}</span>
          </button>
        ))}
      </div>
    </div>
    <div>
      <label className="mb-1.5 block text-[13px] font-semibold text-ink">
        Tên pháp nhân
      </label>
      <input
        placeholder="Ví dụ: Công ty TNHH AEON Việt Nam"
        className={inputCls}
      />
    </div>
    <div className="grid grid-cols-1 gap-3 min-[560px]:grid-cols-2">
      <div>
        <label className="mb-1.5 block text-[13px] font-semibold text-ink">
          Mã số thuế (MST)
        </label>
        <input placeholder="0100000000" className={inputCls} />
      </div>
      <div>
        <label className="mb-1.5 block text-[13px] font-semibold text-ink">
          Người đại diện
        </label>
        <input placeholder="Họ tên người ký" className={inputCls} />
      </div>
    </div>
    <div>
      <label className="mb-1.5 block text-[13px] font-semibold text-ink">
        Mục đích khai thác
      </label>
      <textarea
        rows={3}
        placeholder="Mô tả ngắn gọn chiến dịch / sản phẩm sẽ sử dụng nhân dạng…"
        className={cn(inputCls, "resize-y")}
      />
    </div>
    <div className="flex items-start gap-3 rounded-xl border border-[#cfe6fb] border-l-4 border-l-blue bg-[#eef7ff] p-[15px_17px]">
      <DuotoneIcon
        name="justice-scale-1"
        size={22}
        color="#0c8ce9"
        secondaryColor="#bcdffb"
      />
      <div>
        <div className="text-[13.5px] font-semibold text-[#0b5c9c]">
          Nghĩa vụ của bên khai thác
        </div>
        <div className="mt-0.5 text-[13px] leading-[1.55] text-[#2a6699]">
          Theo Nghị định <b>356/2025/NĐ-CP</b>, mọi khai thác hình ảnh, giọng
          nói, danh tính người khác phải có sự đồng ý minh thị và giấy phép hợp
          lệ. Thông tin pháp nhân sẽ được đối chiếu trước khi cấp phép.
        </div>
      </div>
    </div>
  </div>
);

const ConfigStep2 = ({
  usage,
  toggleUsage,
  elements,
  toggleElem,
  cfg,
  setCfg,
  d,
  termLabel,
}) => (
  <div data-reveal className="flex flex-col gap-[18px]">
    <div>
      <div className="mb-2.5 text-[13px] font-semibold text-ink">
        Loại hình khai thác{" "}
        <span className="font-medium text-mute">
          · chọn nhiều — khớp Phụ lục C
        </span>
      </div>
      <div className="flex flex-col gap-2.5">
        {usageOptions.map((u) => (
          <button
            key={u.key}
            onClick={() => toggleUsage(u.key)}
            className={cn(
              "flex w-full items-center gap-3.5 rounded-[13px] border-[1.5px] p-[14px_16px] text-left transition",
              usage[u.key]
                ? "border-blue bg-[#f2f8ff]"
                : "border-line bg-white",
            )}
          >
            <span className="flex-1">
              <span className="block text-[14.5px] font-semibold text-navy">
                {u.title}
              </span>
              <span className="mt-0.5 block text-xs text-mute">{u.desc}</span>
            </span>
            <Switch on={usage[u.key]} />
          </button>
        ))}
      </div>
    </div>

    <div>
      <div className="mb-1 text-[13px] font-semibold text-ink">
        Yếu tố nhân dạng{" "}
        <span className="font-medium text-mute">
          · chỉ hiện yếu tố chủ thể cho phép
        </span>
      </div>
      <div className="mt-2 flex flex-wrap gap-2.5">
        {["portrait", "voice", "style", "name"]
          .filter((k) => d.elements.includes(k))
          .map((k) => {
            const on = elements[k];
            return (
              <button
                key={k}
                onClick={() => toggleElem(k)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border-[1.5px] px-3.5 py-2 text-[13px] font-semibold transition",
                  on
                    ? "border-blue bg-[#eef7ff] text-[#0b5c9c]"
                    : "border-line bg-white text-mute",
                )}
              >
                {on && <IconCheck size={13} stroke={1.9} />}
                {ELEM_LABEL[k]}
              </button>
            );
          })}
      </div>
    </div>

    <div className="grid grid-cols-1 gap-3 min-[560px]:grid-cols-2">
      <div>
        <label className="mb-1.5 block text-[13px] font-semibold text-ink">
          Kênh phát hành
        </label>
        <select
          value={cfg.channel}
          onChange={(e) => setCfg((s) => ({ ...s, channel: e.target.value }))}
          className={inputCls}
        >
          <option value="social">Mạng xã hội</option>
          <option value="tv">Truyền hình / OOH</option>
          <option value="digital">Nền tảng số</option>
          <option value="all">Đa kênh</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-[13px] font-semibold text-ink">
          Lãnh thổ
        </label>
        <select
          value={cfg.territory}
          onChange={(e) => setCfg((s) => ({ ...s, territory: e.target.value }))}
          className={inputCls}
        >
          <option value="vn">Việt Nam</option>
          <option value="sea">Đông Nam Á</option>
          <option value="global">Toàn cầu</option>
        </select>
      </div>
    </div>

    <div>
      <label className="mb-1.5 flex justify-between text-[13px] font-semibold text-ink">
        Thời hạn khai thác <b className="text-blue-2">{termLabel}</b>
      </label>
      <input
        type="range"
        min="3"
        max="36"
        step="3"
        value={cfg.term}
        onChange={(e) =>
          setCfg((s) => ({ ...s, term: parseInt(e.target.value, 10) }))
        }
        className="h-1.5 w-full accent-blue"
      />
      <div className="mt-1 flex justify-between text-[11.5px] text-mute">
        <span>3 tháng</span>
        <span>Tối đa {d.maxTerm}</span>
        <span>36 tháng</span>
      </div>
    </div>

    <div>
      <div className="mb-2 text-[13px] font-semibold text-ink">
        Điều cấm bắt buộc của chủ thể{" "}
        <span className="font-medium text-mute">· khoá, không thể bỏ</span>
      </div>
      <div className="overflow-hidden rounded-xl border border-[#ffd0d2]">
        {d.prohibited.map((p, i) => (
          <div
            key={p}
            className={cn(
              "flex items-center gap-[11px] bg-[#fff8f8] p-[12px_15px]",
              i > 0 && "border-t border-[#ffe0e1]",
            )}
          >
            <IconLock
              size={15}
              stroke={1.7}
              className="shrink-0 text-[#9f0712]"
            />
            <span className="flex-1 text-[13.5px] font-medium text-[#7a2226]">
              {p}
            </span>
            <span className="rounded-full bg-[#ffe2e2] px-2.5 py-[3px] text-[11px] font-bold text-[#9f0712]">
              Khoá
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ConfigStep3 = ({
  priceModel,
  setPriceModel,
  cfg,
  setCfg,
  costLines,
  totalLabel,
  totalValue,
}) => {
  const models = [
    {
      key: "fixed",
      title: "Giá cố định",
      desc: "Trả trọn gói theo phạm vi & thời hạn.",
    },
    {
      key: "share",
      title: "Chia sẻ doanh thu (%)",
      desc: "Chi trả theo tỷ lệ doanh thu khai thác, đối soát định kỳ.",
    },
    {
      key: "propose",
      title: "Đề xuất giá của bạn",
      desc: "Gửi mức giá thương lượng để chủ thể duyệt.",
    },
  ];
  return (
    <div data-reveal className="flex flex-col gap-4">
      <div>
        <div className="mb-2.5 text-[13px] font-semibold text-ink">
          Cơ chế tài chính
        </div>
        <div className="flex flex-col gap-2.5">
          {models.map((m) => (
            <button
              key={m.key}
              onClick={() => setPriceModel(m.key)}
              className={cn(
                "flex w-full items-center gap-3 rounded-[13px] border-[1.5px] p-[14px_16px] text-left transition",
                priceModel === m.key
                  ? "border-blue bg-[#f2f8ff]"
                  : "border-line bg-white",
              )}
            >
              <span className="flex-1">
                <span className="block text-[14.5px] font-semibold text-navy">
                  {m.title}
                </span>
                <span className="mt-0.5 block text-[12.5px] text-mute">
                  {m.desc}
                </span>
              </span>
              <RadioDot on={priceModel === m.key} />
            </button>
          ))}
        </div>
      </div>

      {priceModel === "propose" && (
        <div data-reveal>
          <label className="mb-1.5 flex justify-between text-[13px] font-semibold text-ink">
            Mức đề xuất <b className="text-blue-2">{cfg.propose} tr ₫</b>
          </label>
          <input
            type="range"
            min="3"
            max="80"
            value={cfg.propose}
            onChange={(e) =>
              setCfg((s) => ({ ...s, propose: parseInt(e.target.value, 10) }))
            }
            className="h-1.5 w-full accent-blue"
          />
        </div>
      )}

      <div className="overflow-hidden rounded-[14px] border border-line">
        <div className="flex items-center justify-between bg-ivory p-[12px_18px] text-xs font-bold uppercase tracking-[0.05em] text-mute">
          Báo giá tạm tính
          <span className="inline-flex items-center gap-1.5 text-[11px] normal-case tracking-normal text-blue">
            <span className="h-[7px] w-[7px] rounded-full bg-blue" />
            Cập nhật realtime
          </span>
        </div>
        <div className="flex flex-col gap-2.5 p-[16px_18px]">
          {costLines.map((c) => (
            <div
              key={c.label}
              className="flex justify-between gap-3 text-[13.5px]"
            >
              <span className="text-mute">{c.label}</span>
              <b className="text-navy">{c.value}</b>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-3 border-t border-dashed border-line pt-3">
            <span className="text-sm font-bold text-navy">{totalLabel}</span>
            <span className="font-serif text-[26px] font-bold text-navy">
              {totalValue}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2.5 rounded-[10px] border border-line bg-ivory p-[11px_14px] text-xs text-mute">
        <IconInfoCircle size={15} stroke={1.6} className="shrink-0 text-blue" />
        Bao gồm phí bảo chứng &amp; thu hộ của Hiệp hội. Thanh toán chỉ thực
        hiện sau khi hai bên ký.
      </div>
    </div>
  );
};

const ConfigStep4 = ({ comp, setComp }) => {
  const items = [
    {
      key: "provenance",
      node: (
        <>
          Tôi cam kết <b>gắn nhãn provenance</b> lên mọi nội dung tạo ra từ nhân
          dạng được cấp phép (nguồn gốc + mã giấy phép có thể kiểm chứng).
        </>
      ),
    },
    {
      key: "scope",
      node: (
        <>
          Tôi <b>không sử dụng ngoài phạm vi</b> đã cấu hình (loại hình, yếu tố,
          kênh, lãnh thổ, thời hạn).
        </>
      ),
    },
    {
      key: "dlcn",
      node: (
        <>
          Tôi tuân thủ pháp luật <b>Bảo vệ dữ liệu cá nhân</b> (Luật
          91/2025/QH15) trong toàn bộ quá trình khai thác.
        </>
      ),
    },
    {
      key: "takedown",
      node: (
        <>
          Tôi chấp nhận <b>gỡ nhanh</b> nội dung khi có tranh chấp hoặc chủ thể
          rút uỷ quyền.
        </>
      ),
    },
  ];
  return (
    <div data-reveal className="flex flex-col gap-[13px]">
      {items.map((it) => (
        <label
          key={it.key}
          className={cn(
            "flex cursor-pointer items-start gap-3 rounded-xl border-[1.5px] p-[14px_16px] transition",
            comp[it.key] ? "border-blue bg-[#f2f8ff]" : "border-line bg-white",
          )}
        >
          <input
            type="checkbox"
            checked={comp[it.key]}
            onChange={(e) =>
              setComp((s) => ({ ...s, [it.key]: e.target.checked }))
            }
            className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-blue"
          />
          <span className="text-[13.5px] leading-[1.55] text-ink">
            {it.node}
          </span>
        </label>
      ))}
      <div
        className="mt-1 flex items-start gap-3 rounded-[13px] p-[17px_19px] text-[#eaf0f8]"
        style={{
          background:
            "linear-gradient(180deg,var(--tid-navy),var(--tid-navy-2))",
        }}
      >
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[rgba(199,154,43,.16)]">
          <DuotoneIcon
            name="fingerprint-1"
            size={22}
            color="#e0b64a"
            secondaryColor="#ecd9a3"
          />
        </span>
        <div>
          <div className="text-sm font-bold text-white">
            Provenance &amp; Watermark API
          </div>
          <div className="mt-[3px] text-[13px] leading-[1.55] text-[#c3cede]">
            Tích hợp API để tự động chèn watermark bất khả kiến &amp; ghi nguồn
            gốc vào từng nội dung — bằng chứng khai thác hợp pháp cho toàn bộ
            vòng đời giấy phép.
          </div>
          <a
            href="#"
            className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-gold-2"
          >
            Xem tài liệu tích hợp
            <IconArrowRight size={12} stroke={1.7} />
          </a>
        </div>
      </div>
    </div>
  );
};

const ConfigStep5 = ({
  contractBlocks,
  signed,
  setSigned,
  payMethod,
  setPayMethod,
}) => (
  <div data-reveal className="flex flex-col gap-4">
    <div className="overflow-hidden rounded-[13px] border border-line">
      <div className="bg-ivory p-[11px_16px] text-xs font-bold uppercase tracking-[0.04em] text-mute">
        Hợp đồng cấp phép điện tử · 8 khối
      </div>
      <div className="grid grid-cols-1 min-[560px]:grid-cols-2">
        {contractBlocks.map((b) => (
          <div
            key={b.n}
            className="flex items-start gap-2.5 border-t border-line p-[12px_16px]"
          >
            <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[7px] bg-[#eef7ff] text-[11px] font-bold text-blue-2">
              {b.n}
            </span>
            <div>
              <div className="text-[13px] font-semibold text-navy">
                {b.title}
              </div>
              <div className="mt-px text-xs text-mute">{b.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <button
      onClick={() => setSigned((v) => !v)}
      className={cn(
        "flex w-full items-center gap-3.5 rounded-[13px] border-[1.5px] p-[14px_16px] text-left transition",
        signed ? "border-blue bg-[#f2f8ff]" : "border-line bg-white",
      )}
    >
      <span className="inline-flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[11px] bg-[rgba(12,140,233,.1)]">
        {signed ? (
          <IconCheck size={22} stroke={1.8} style={{ color: OK }} />
        ) : (
          <IconWritingSign size={22} stroke={1.6} className="text-blue" />
        )}
      </span>
      <span className="flex-1">
        <span className="block text-[15px] font-semibold text-navy">
          {signed ? "Đã ký số hợp đồng" : "Ký hợp đồng điện tử"}
        </span>
        <span className="mt-0.5 block text-[13px] text-mute">
          Ký số bằng chữ ký điện tử của pháp nhân.
        </span>
      </span>
      <span className="shrink-0 text-[13px] font-semibold text-blue-2">
        {signed ? "Ký lại" : "Ký ngay"}
      </span>
    </button>

    <div>
      <div className="mb-2 text-[13px] font-semibold text-ink">
        Phương thức thanh toán
      </div>
      <div className="grid grid-cols-1 gap-2.5 min-[560px]:grid-cols-2">
        {[
          ["bank", "Chuyển khoản đối soát", "Qua tài khoản tách bạch"],
          ["escrow", "Ký quỹ (escrow)", "Giải ngân theo mốc"],
        ].map(([key, title, desc]) => (
          <button
            key={key}
            onClick={() => setPayMethod(key)}
            className={cn(
              "w-full rounded-[13px] border-[1.5px] p-[13px_15px] text-left transition",
              payMethod === key
                ? "border-blue bg-[#f2f8ff]"
                : "border-line bg-white",
            )}
          >
            <span className="block text-sm font-semibold text-navy">
              {title}
            </span>
            <span className="mt-0.5 block text-xs text-mute">{desc}</span>
          </button>
        ))}
      </div>
    </div>

    <div className="flex items-start gap-3 rounded-xl border border-[#f5e2b8] border-l-4 border-l-gold bg-[#fff8ec] p-[14px_16px]">
      <IconShield size={18} stroke={1.7} className="mt-px shrink-0 text-gold" />
      <div className="text-[13px] leading-[1.55] text-[#7a5a10]">
        Hệ thống <b>chỉ khởi tạo yêu cầu thanh toán</b> — không tự động chuyển
        tiền. Dòng tiền được giải ngân qua tài khoản tách bạch sau khi giấy phép
        ghi nhận thành công.
      </div>
    </div>

    <div className="flex items-center gap-2.5 rounded-[10px] border border-line bg-ivory p-[11px_14px] text-xs text-mute">
      <IconInfoCircle size={15} stroke={1.6} className="shrink-0 text-blue" />
      Khi hoàn tất, hệ thống ghi{" "}
      <b className="font-semibold text-navy">tem thời gian</b> &amp;{" "}
      <b className="font-semibold text-navy">mã băm SHA-256</b> của hợp đồng vào
      nhật ký bất biến.
    </div>
  </div>
);

/* ================= LICENSE ISSUED ================= */

const LicenseIssued = ({
  d,
  licenseCode,
  operatorName,
  usageSummary,
  elementSummary,
  scopeSummary,
  priceModelLabel,
  totalValue,
  expiryDate,
  onBackToMarket,
}) => (
  <section
    data-reveal
    className="relative overflow-hidden text-[#eaf0f8]"
    style={{
      background:
        "radial-gradient(1200px 600px at 50% -20%, #23385a 0%, var(--tid-navy) 52%, var(--tid-navy-2) 100%)",
    }}
  >
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 -top-[60px] -translate-x-1/2 opacity-[.06]"
    >
      <svg width="620" height="620" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
        />
        <circle
          cx="100"
          cy="100"
          r="74"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
        />
        <circle
          cx="100"
          cy="100"
          r="53"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
        />
      </svg>
    </div>
    <div className="relative mx-auto max-w-[820px] px-8 pb-[30px] pt-16 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,188,125,.4)] bg-[rgba(0,188,125,.14)] px-[15px] py-[7px] text-[13px] font-semibold text-[#5ee6ac]">
        <span className="h-[7px] w-[7px] rounded-full bg-current" />
        Giấy phép đã được cấp &amp; ghi vào sổ đăng bạ
      </span>
      <h1 className="mt-[18px] text-balance font-serif text-[36px] font-bold leading-[1.16] text-white">
        Bạn đã được cấp phép khai thác hợp pháp
      </h1>
      <p className="mx-auto mt-3.5 max-w-[560px] text-base leading-[1.65] text-[#c3cede]">
        Giấy phép có hiệu lực trong phạm vi đã cấu hình, kèm bằng chứng bất
        biến. Tra cứu công khai bất cứ lúc nào.
      </p>
    </div>

    <div className="relative mx-auto max-w-[820px] px-8 pb-[30px]">
      <div
        className="overflow-hidden rounded-2xl border border-[#e3ddca] shadow-[0_30px_70px_rgba(0,0,0,.4)]"
        style={{ background: "linear-gradient(180deg,#fdfbf5,#f7f2e6)" }}
      >
        <div className="flex items-start justify-between gap-4 border-b border-dashed border-[#d8cfb4] p-[24px_28px]">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
              Giấy phép khai thác nhân dạng số
            </div>
            <div className="mt-[5px] font-serif text-[24px] font-bold tracking-[0.04em] text-navy">
              {licenseCode}
            </div>
            <div className="mt-1 text-[12.5px] text-[#8a7a4e]">
              Cấp cho <b className="text-navy">{operatorName}</b> · khai thác
              nhân dạng của <b className="text-navy">{d.name}</b>
            </div>
          </div>
          <div className="shrink-0">
            <Seal size={76} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-7 gap-y-[18px] p-[22px_28px] min-[560px]:grid-cols-2">
          {[
            ["Phạm vi", `${usageSummary} · ${elementSummary}`],
            ["Lãnh thổ · Thời hạn", scopeSummary],
            ["Cơ chế tài chính", `${priceModelLabel} · ${totalValue}`],
            ["Hiệu lực", `16/07/2026 → ${expiryDate}`],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#8a93a3]">
                {k}
              </div>
              <div className="mt-[3px] text-[14.5px] font-medium leading-[1.5] text-navy">
                {v}
              </div>
            </div>
          ))}
          <div className="col-span-full flex flex-wrap items-center gap-2.5 border-t border-dashed border-[#d8cfb4] pt-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#bcdffb] bg-[rgba(12,140,233,.1)] px-[13px] py-[7px] text-[12.5px] font-semibold text-[#0b5c9c]">
              <DuotoneIcon
                name="fingerprint-1"
                size={15}
                color="#0c8ce9"
                secondaryColor="#bcdffb"
              />
              Provenance · <span className="font-mono">0x7f3a…c214</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e3ddca] bg-white px-[13px] py-[7px] text-[12.5px] text-[#8a7a4e]">
              <IconInfoCircle size={14} stroke={1.5} />
              Tem thời gian 16/07/2026 · 09:42
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2.5 border-t border-dashed border-[#d8cfb4] bg-[rgba(25,40,61,.04)] p-[16px_28px] text-[12.5px] text-[#5b6b82]">
          <IconShieldCheck size={15} stroke={1.5} className="text-gold" />
          Ghi nhận trong sổ đăng bạ của Hiệp hội bảo chứng nhân dạng số · bằng
          chứng bất biến.
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button className="inline-flex items-center gap-2 rounded-xl bg-blue px-7 py-3.5 text-[15.5px] font-bold text-white shadow-[0_12px_30px_rgba(12,140,233,.4)]">
          <IconDownload size={17} stroke={1.8} />
          Tải giấy phép (PDF)
        </button>
        <a
          href="/#tracuu"
          className="inline-flex items-center gap-2 rounded-xl border border-white/[.24] px-6 py-3.5 text-[15px] font-semibold text-[#eaf0f8]"
        >
          <IconSearch size={16} stroke={1.7} />
          Tra cứu công khai
        </a>
      </div>
    </div>

    <div className="bg-ivory px-8 pb-[60px] pt-12">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-[26px] text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Nghĩa vụ sau cấp phép
          </div>
          <h2 className="mt-2 font-serif text-[24px] font-bold text-navy">
            Giữ giấy phép luôn hợp lệ
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {postLicenseDuties.map((duty) => (
            <div
              key={duty.title}
              className="flex flex-col gap-3 rounded-[14px] border border-line bg-white p-[22px] shadow-[0_6px_18px_rgba(15,23,43,.05)]"
            >
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: duty.iconBg }}
              >
                <DuotoneIcon
                  name={duty.icon}
                  size={24}
                  color={duty.color}
                  secondaryColor={duty.secondary}
                />
              </span>
              <div className="text-[15.5px] font-semibold text-navy">
                {duty.title}
              </div>
              <div className="text-[13.5px] leading-[1.55] text-mute">
                {duty.desc}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[26px] text-center">
          <button
            onClick={onBackToMarket}
            className="rounded-[11px] border-[1.5px] border-line bg-white px-[26px] py-3.5 text-[14.5px] font-semibold text-navy"
          >
            Xin thêm giấy phép khác
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default LicenseApp;
