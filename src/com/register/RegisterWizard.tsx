"use client";

import { useRef, useState } from "react";
import {
  IconShieldCheck,
  IconArrowRight,
  IconArrowLeft,
  IconClock,
  IconLock,
  IconMail,
  IconUpload,
  IconCheck,
  IconInfoCircle,
  IconMessageChatbot,
} from "@tabler/icons-react";
import { Seal } from "@/com/brand/Seal";
import { DuotoneIcon } from "@/com/icon/duotone";
import { cn } from "@/lib/cn";
import {
  stepMeta,
  subjectOptions,
  profileElements,
  authTypes,
  prohibitedChips,
  nextSteps,
} from "@/data/register";

const OK = "#00bc7d";

/* ---------- Thành phần phụ ---------- */

const Switch = ({ on }) => (
  <span
    className={cn(
      "relative h-[25px] w-11 shrink-0 rounded-full transition-colors",
      on ? "bg-[#00bc7d]" : "bg-[#cfd6e0]"
    )}
  >
    <span
      className={cn(
        "absolute top-[2.5px] h-5 w-5 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,.28)] transition-[left]",
        on ? "left-[21px]" : "left-[2.5px]"
      )}
    />
  </span>
);

const RadioDot = ({ on }) => (
  <span
    className={cn(
      "box-border h-5 w-5 shrink-0 rounded-full bg-white transition",
      on ? "border-[6px] border-blue" : "border-2 border-[#cfd6e0]"
    )}
  />
);

const ToggleCard = ({ on, onClick, children }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex w-full items-center gap-3.5 rounded-[13px] border-[1.5px] p-[14px_16px] text-left transition",
      on ? "border-blue bg-[#f2f8ff]" : "border-line bg-white"
    )}
  >
    {children}
  </button>
);

/* ---------- Wizard ---------- */

export const RegisterWizard = () => {
  const [step, setStep] = useState(1);
  const [subject, setSubject] = useState("canhan");
  const [otpSent, setOtpSent] = useState(false);
  const [idLevel, setIdLevel] = useState(2);
  const [vneid, setVneid] = useState(false);
  const [cccdUploaded, setCccdUploaded] = useState(false);
  const [selfieDone, setSelfieDone] = useState(false);
  const [profile, setProfile] = useState({ portrait: true, voice: false, style: false, brand: false });
  const [auth, setAuth] = useState({ ads: true, aicontent: false, dubbing: false, campaign: false });
  const [price, setPrice] = useState(8);
  const [prohibited, setProhibited] = useState([]);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const wizRef = useRef(null);

  const toggleGroup = (setter, key) => setter((s) => ({ ...s, [key]: !s[key] }));
  const toggleProhibited = (key) =>
    setProhibited((p) => (p.includes(key) ? p.filter((k) => k !== key) : [...p, key]));

  const profileCount = profileElements.filter((e) => profile[e.key]).length;
  const authCount = authTypes.filter((a) => auth[a.key]).length;
  const prohibitedCount = 2 + prohibited.length;
  const agreed = agree1 && agree2;

  const subjectLabel = { canhan: "Cá nhân", kol: "Nghệ sĩ · KOL", tochuc: "Đại diện tổ chức" }[subject];
  const subjectShort = { canhan: "Cá nhân", kol: "KOL", tochuc: "Tổ chức" }[subject];
  const levelLabel = idLevel === 2 ? "Mức 2 · KYC đầy đủ" : "Mức 1 · Cơ bản";
  const levelShort = idLevel === 2 ? "Định danh Mức 2" : "Định danh Mức 1";
  const certName = subject === "tochuc" ? "[Tên chủ thể được đại diện]" : "Nguyễn M. A.";

  const profLabels = { portrait: "Chân dung", voice: "Giọng nói", style: "Phong cách", brand: "Tên & thương hiệu" };
  const enabledProfiles = profileElements.filter((e) => profile[e.key]).map((e) => profLabels[e.key]);
  const profileSummary = enabledProfiles.length ? enabledProfiles.join(", ") : "Chưa chọn";

  const profileHint = {
    portrait: profile.portrait ? "Chất lượng dữ liệu: Tốt · sẵn sàng định giá cao" : "Đang tắt · bật để bổ sung mẫu chân dung",
    voice: profile.voice ? "Chất lượng dữ liệu: Khá · nên thêm mẫu ghi âm" : "Đang tắt · tối thiểu hoá dữ liệu",
    style: profile.style ? "Chất lượng dữ liệu: Chưa đủ · cần bổ sung" : "Đang tắt · tối thiểu hoá dữ liệu",
    brand: profile.brand ? "Chất lượng dữ liệu: Tốt · tên & logo đã có" : "Đang tắt · tối thiểu hoá dữ liệu",
  };

  const stepStatus = (n) => (step > n ? "done" : step === n ? "active" : "todo");

  const startNow = () => {
    if (wizRef.current) {
      window.scrollTo({ top: window.scrollY + wizRef.current.getBoundingClientRect().top - 80, behavior: "smooth" });
    }
  };
  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));
  const complete = () => agreed && setStep(6);
  const restart = () => {
    setStep(1);
    setAgree1(false);
    setAgree2(false);
  };

  if (step === 6) return <SuccessScreen restart={restart} />;

  return (
    <>
      <RegisterHero startNow={startNow} certName={certName} subjectLabel={subjectLabel} levelShort={levelShort} />

      <main ref={wizRef} className="mx-auto max-w-[1200px] px-8 pb-16 pt-10">
        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_372px]">
          {/* LEFT: Stepper + nội dung bước */}
          <div>
            <Stepper stepStatus={stepStatus} step={step} />

            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_6px_18px_rgba(15,23,43,.05)]">
              <div className="px-7 pb-2 pt-[26px]">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                  Bước {step} / 5
                </div>
                <h2 className="mt-1.5 font-serif text-[25px] font-bold leading-[1.2] text-navy">
                  {stepMeta[step].title}
                </h2>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-mute">{stepMeta[step].desc}</p>
              </div>

              <div className="px-7 pb-1 pt-5">
                {step === 1 && (
                  <Step1
                    subject={subject}
                    setSubject={setSubject}
                    otpSent={otpSent}
                    sendOtp={() => setOtpSent(true)}
                  />
                )}
                {step === 2 && (
                  <Step2
                    idLevel={idLevel}
                    setIdLevel={setIdLevel}
                    cccdUploaded={cccdUploaded}
                    setCccdUploaded={setCccdUploaded}
                    vneid={vneid}
                    setVneid={setVneid}
                    selfieDone={selfieDone}
                    setSelfieDone={setSelfieDone}
                  />
                )}
                {step === 3 && (
                  <Step3 profile={profile} toggle={(k) => toggleGroup(setProfile, k)} hint={profileHint} />
                )}
                {step === 4 && (
                  <Step4
                    auth={auth}
                    toggleAuth={(k) => toggleGroup(setAuth, k)}
                    price={price}
                    setPrice={setPrice}
                    prohibited={prohibited}
                    toggleProhibited={toggleProhibited}
                    skipAuth={() => setStep(5)}
                  />
                )}
                {step === 5 && (
                  <Step5
                    subjectLabel={subjectLabel}
                    levelLabel={levelLabel}
                    profileSummary={profileSummary}
                    price={price}
                    agree1={agree1}
                    setAgree1={setAgree1}
                    agree2={agree2}
                    setAgree2={setAgree2}
                  />
                )}
              </div>

              {/* Điều hướng bước */}
              <div className="mt-3.5 flex items-center justify-between gap-3 border-t border-line px-7 pb-[22px] pt-[18px]">
                <button
                  onClick={back}
                  disabled={step <= 1}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-[11px] border-[1.5px] border-line bg-white px-5 py-3 text-[14.5px] font-semibold text-navy transition",
                    step <= 1 ? "cursor-not-allowed opacity-40" : "cursor-pointer"
                  )}
                >
                  <IconArrowLeft size={15} stroke={1.8} />
                  Quay lại
                </button>
                {step < 5 ? (
                  <button
                    onClick={next}
                    className="inline-flex items-center gap-2 rounded-[11px] bg-blue px-6 py-3 text-[14.5px] font-bold text-white shadow-[0_3px_10px_rgba(12,140,233,.28)]"
                  >
                    Tiếp tục
                    <IconArrowRight size={15} stroke={1.8} />
                  </button>
                ) : (
                  <button
                    onClick={complete}
                    disabled={!agreed}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-[11px] px-[22px] py-3 text-[14.5px] font-bold transition",
                      agreed
                        ? "cursor-pointer bg-navy text-white shadow-[0_6px_16px_rgba(25,40,61,.3)]"
                        : "cursor-not-allowed bg-[#e7ebf1] text-[#a2adbd]"
                    )}
                  >
                    <IconShieldCheck size={16} stroke={1.9} />
                    Hoàn tất &amp; Mở Ví bản quyền
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: Tóm tắt trực tiếp */}
          <SummarySidebar
            certName={certName}
            subjectLabel={subjectLabel}
            subjectShort={subjectShort}
            levelShort={levelShort}
            profileCount={profileCount}
            authCount={authCount}
            prohibitedCount={prohibitedCount}
            price={price}
            step={step}
            stepStatus={stepStatus}
            agreed={agreed}
          />
        </div>
      </main>
    </>
  );
};

/* ---------- Hero ---------- */

const heroPoints = [
  { icon: "shield-1", bg: "rgba(12,140,233,.16)", color: "#7fc0f5", secondary: "#0c8ce9", bold: "Chống lạm dụng & deepfake", rest: " — mọi bản sao trái phép đều truy vết được." },
  { icon: "coin-share", bg: "rgba(199,154,43,.18)", color: "#e0b64a", secondary: "#ecd9a3", bold: "Kiếm tiền có kiểm soát", rest: " — cấp phép & thu hộ minh bạch qua tài khoản tách bạch." },
  { icon: "security-umbrella", bg: "rgba(0,188,125,.16)", color: "#5ee6ac", secondary: "#a7e8cf", bold: "Toàn quyền bật/tắt & rút lại", rest: " — đồng ý là của bạn, tức thời, bất cứ lúc nào." },
];

const RegisterHero = ({ startNow, certName, subjectLabel, levelShort }) => (
  <section
    className="relative overflow-hidden text-[#eaf0f8]"
    style={{ background: "radial-gradient(1100px 560px at 82% -20%, #23385a 0%, var(--tid-navy) 50%, var(--tid-navy-2) 100%)" }}
  >
    <div aria-hidden className="pointer-events-none absolute right-[-70px] top-5 opacity-[.06]">
      <svg width="460" height="460" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="95" fill="none" stroke="#fff" strokeWidth="1" />
        <circle cx="100" cy="100" r="76" fill="none" stroke="#fff" strokeWidth="1" />
        <circle cx="100" cy="100" r="57" fill="none" stroke="#fff" strokeWidth="1" />
      </svg>
    </div>
    <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-8 pb-[58px] pt-14 lg:grid-cols-[1.1fr_.9fr]">
      <div data-reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(224,182,74,.35)] bg-[rgba(199,154,43,.14)] px-[15px] py-2 text-[13px] font-semibold text-gold-2">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 1.5l5 2v3.5c0 3-2 5.2-5 6.5-3-1.3-5-3.5-5-6.5V3.5z" />
            <path d="M6 8l1.4 1.4L10.4 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Cửa vào hệ sinh thái bảo hộ nhân dạng
        </span>
        <h1 className="mt-5 text-balance font-serif text-[34px] font-bold leading-[1.15] text-white md:text-[44px]">
          Đăng ký bảo hộ nhân dạng số — trong vài phút, dưới một định chế được bảo chứng.
        </h1>
        <p className="mt-[18px] max-w-[540px] text-[17px] leading-[1.66] text-[#c3cede]">
          Hoàn tất 5 bước để định danh, xây hồ sơ nhân dạng và thiết lập quyền khai thác. Kết thúc, Ví
          bản quyền của bạn được mở ngay.
        </p>
        <div className="mt-[26px] flex flex-col gap-3">
          {heroPoints.map((p) => (
            <div key={p.icon} className="flex items-center gap-3">
              <span
                className="inline-flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px]"
                style={{ background: p.bg }}
              >
                <DuotoneIcon name={p.icon} size={19} color={p.color} secondaryColor={p.secondary} />
              </span>
              <span className="text-[15px] text-[#eaf0f8]">
                <b className="font-semibold">{p.bold}</b>
                {p.rest}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <button
            onClick={startNow}
            className="inline-flex items-center gap-2 rounded-xl bg-blue px-7 py-3.5 text-base font-bold text-white shadow-[0_10px_26px_rgba(12,140,233,.36)]"
          >
            Bắt đầu đăng ký
            <IconArrowRight size={17} stroke={1.8} />
          </button>
          <span className="inline-flex items-center gap-2 text-[13px] text-[#9fb0c8]">
            <IconClock size={14} stroke={1.6} />
            Ước tính 3–5 phút
          </span>
        </div>
        <div className="mt-5 inline-flex items-center gap-2 rounded-[10px] border border-white/[.12] bg-white/[.05] px-[13px] py-2 text-[12.5px] text-[#9fb0c8]">
          <IconLock size={14} stroke={1.5} className="text-gold-2" />
          Dữ liệu lưu trong nước, tuân thủ Luật Bảo vệ dữ liệu cá nhân số{" "}
          <b className="font-semibold text-[#c3cede]">91/2025/QH15</b>
        </div>
      </div>

      <div data-reveal className="relative">
        <div
          className="rounded-xl border border-[#e6dcbf] p-[24px_24px_20px] shadow-[0_30px_70px_rgba(0,0,0,.4)]"
          style={{ background: "linear-gradient(180deg,#fdfbf5,#f4eeddff)", transform: "rotate(-1.2deg)" }}
        >
          <div className="flex items-start justify-between gap-3.5 border-b border-dashed border-[#d8cfb4] pb-3.5">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                Chứng nhận bảo hộ nhân dạng số
              </div>
              <div className="mt-1 font-serif text-[19px] font-bold text-navy">
                Digital Identity Protection
              </div>
            </div>
            <Seal size={58} />
          </div>
          <div className="flex flex-col gap-[11px] pt-3.5">
            <div>
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.05em] text-[#8a93a3]">
                Chủ thể được bảo hộ
              </div>
              <div className="mt-0.5 font-serif text-base font-semibold text-navy">{certName}</div>
            </div>
            <div className="flex gap-6">
              <div>
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.05em] text-[#8a93a3]">
                  Loại chủ thể
                </div>
                <div className="mt-[3px] text-[13.5px] font-semibold text-navy">{subjectLabel}</div>
              </div>
              <div>
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.05em] text-[#8a93a3]">
                  Mức định danh
                </div>
                <div className="mt-[3px] text-[13.5px] font-semibold text-navy">{levelShort}</div>
              </div>
            </div>
            <div className="mt-0.5 flex items-end justify-between border-t border-dashed border-[#d8cfb4] pt-3">
              <div className="text-[11px] italic text-[#8a7a4e]">Sẽ ghi vào sổ đăng bạ khi hoàn tất</div>
              <svg width="80" height="28" viewBox="0 0 86 30" fill="none" stroke="var(--tid-navy)" strokeWidth="1.3">
                <path d="M2 22c6-14 9 6 14-2s7-12 12-4 8 10 13-2 8 4 13-3 8 6 13 0" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Stepper ---------- */

const stepLabels = ["Tài khoản", "Xác thực", "Hồ sơ", "Ủy quyền", "Đồng ý"];

const Stepper = ({ stepStatus, step }) => (
  <div className="mb-5 rounded-2xl border border-line bg-white p-[20px_22px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
    <div className="flex items-center justify-between gap-2">
      {stepLabels.map((label, i) => {
        const n = i + 1;
        const status = stepStatus(n);
        return (
          <div key={n} className="contents">
            <div className="flex flex-none flex-col items-center gap-[7px]">
              <span
                className={cn(
                  "flex h-[34px] w-[34px] items-center justify-center rounded-full text-sm font-bold transition",
                  status === "done" && "bg-blue text-white shadow-[0_2px_8px_rgba(12,140,233,.35)]",
                  status === "active" &&
                    "border-2 border-blue bg-white text-blue shadow-[0_0_0_4px_rgba(12,140,233,.14)]",
                  status === "todo" && "border-[1.5px] border-line bg-ivory text-[#9aa6b6]"
                )}
              >
                {n}
              </span>
              <span
                className={cn(
                  "whitespace-nowrap text-xs max-[720px]:hidden",
                  status === "todo" ? "font-medium text-[#9aa6b6]" : "font-semibold text-navy"
                )}
              >
                {label}
              </span>
            </div>
            {n < 5 && (
              <span
                className={cn(
                  "h-0.5 min-w-[14px] flex-1 rounded-sm transition",
                  step > n ? "bg-blue" : "bg-line"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  </div>
);

/* ---------- Bước 1 ---------- */

const Step1 = ({ subject, setSubject, otpSent, sendOtp }) => (
  <div data-reveal className="flex flex-col gap-4">
    <div>
      <label className="mb-1.5 block text-[13px] font-semibold text-ink">Email</label>
      <input
        placeholder="ban@email.com"
        className="box-border w-full rounded-[11px] border border-line bg-white p-[12px_14px] text-[14.5px] text-ink shadow-[0_1px_2px_rgba(15,23,43,.05)] outline-none focus:border-blue"
      />
    </div>
    <div>
      <label className="mb-1.5 block text-[13px] font-semibold text-ink">Số điện thoại</label>
      <div className="flex gap-2.5">
        <input
          placeholder="09xx xxx xxx"
          className="box-border min-w-0 flex-1 rounded-[11px] border border-line bg-white p-[12px_14px] text-[14.5px] text-ink shadow-[0_1px_2px_rgba(15,23,43,.05)] outline-none focus:border-blue"
        />
        <button
          onClick={sendOtp}
          className="shrink-0 rounded-[11px] border-[1.5px] border-[#bcdffb] bg-white px-[18px] text-[13.5px] font-semibold text-blue-2"
        >
          {otpSent ? "Gửi lại" : "Gửi OTP"}
        </button>
      </div>
      {otpSent && (
        <div data-reveal className="mt-2.5 flex items-center gap-2.5 rounded-[11px] border border-[#cfe6fb] bg-[#eef7ff] p-[12px_14px]">
          <IconMail size={16} stroke={1.6} className="text-blue" />
          <span className="text-[13px] text-[#0b5c9c]">Đã gửi mã tới điện thoại của bạn.</span>
          <div className="ml-auto flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <input
                key={i}
                maxLength={1}
                className="h-[38px] w-[34px] rounded-[9px] border border-line text-center text-base font-semibold outline-none focus:border-blue"
              />
            ))}
          </div>
        </div>
      )}
    </div>

    <div className="mt-1">
      <div className="mb-2.5 text-[13px] font-semibold text-ink">Bạn đăng ký với tư cách</div>
      <div className="flex flex-col gap-[11px]">
        {subjectOptions.map((o) => {
          const on = subject === o.key;
          return (
            <button
              key={o.key}
              onClick={() => setSubject(o.key)}
              className={cn(
                "flex w-full items-center gap-[13px] rounded-[13px] border-[1.5px] p-[15px_17px] text-left transition",
                on ? "border-blue bg-[#f2f8ff] shadow-[0_4px_14px_rgba(12,140,233,.14)]" : "border-line bg-white shadow-[0_1px_2px_rgba(15,23,43,.04)]"
              )}
            >
              <span
                className="inline-flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[11px]"
                style={{ background: o.iconBg }}
              >
                <DuotoneIcon name={o.icon} size={22} color={o.color} secondaryColor={o.secondary} />
              </span>
              <span className="flex-1">
                <span className="block text-[15px] font-semibold text-navy">{o.title}</span>
                <span className="mt-0.5 block text-[13px] text-mute">{o.desc}</span>
              </span>
              <RadioDot on={on} />
            </button>
          );
        })}
      </div>
    </div>
  </div>
);

/* ---------- Bước 2 ---------- */

const Step2 = ({ idLevel, setIdLevel, cccdUploaded, setCccdUploaded, vneid, setVneid, selfieDone, setSelfieDone }) => (
  <div data-reveal className="flex flex-col gap-4">
    <ToggleCard on={cccdUploaded} onClick={() => setCccdUploaded((v) => !v)}>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] bg-[rgba(12,140,233,.1)]">
        {cccdUploaded ? (
          <IconCheck size={22} stroke={1.8} style={{ color: OK }} />
        ) : (
          <IconUpload size={22} stroke={1.6} className="text-blue" />
        )}
      </span>
      <span className="flex-1 text-left">
        <span className="block text-[15px] font-semibold text-navy">
          {cccdUploaded ? "Đã tải lên: cccd_mattruoc.jpg" : "Tải lên CCCD / Hộ chiếu"}
        </span>
        <span className="mt-0.5 block text-[13px] text-mute">
          {cccdUploaded ? "Đã nhận · đang đối chiếu tự động" : "Ảnh mặt trước & sau, rõ nét, còn hạn."}
        </span>
      </span>
      <span className="shrink-0 text-[13px] font-semibold text-blue-2">
        {cccdUploaded ? "Thay ảnh" : "Chọn tệp"}
      </span>
    </ToggleCard>

    <div className="flex items-center gap-3.5 rounded-xl border border-line bg-ivory p-[14px_16px]">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-line bg-white text-xs font-bold text-[#c0392b]">
        VNeID
      </span>
      <div className="flex-1">
        <div className="text-[14.5px] font-semibold text-navy">
          Liên kết VNeID <span className="font-medium text-mute">· tuỳ chọn</span>
        </div>
        <div className="mt-px text-[12.5px] text-mute">Xác thực nhanh qua định danh điện tử quốc gia.</div>
      </div>
      <button
        onClick={() => setVneid((v) => !v)}
        className={cn(
          "shrink-0 rounded-[10px] px-[15px] py-[9px] text-[13px] font-semibold transition",
          vneid ? "border border-[#a7e8cf] bg-[#d6f7ea] text-[#007a55]" : "border-[1.5px] border-[#bcdffb] bg-white text-blue-2"
        )}
      >
        {vneid ? "Đã liên kết" : "Liên kết"}
      </button>
    </div>

    <ToggleCard on={selfieDone} onClick={() => setSelfieDone((v) => !v)}>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] bg-[rgba(199,154,43,.14)]">
        {selfieDone ? (
          <IconCheck size={22} stroke={1.8} style={{ color: OK }} />
        ) : (
          <DuotoneIcon name="fingerprint-1" size={22} color="#c79a2b" secondaryColor="#ecd9a3" />
        )}
      </span>
      <span className="flex-1 text-left">
        <span className="block text-[15px] font-semibold text-navy">
          {selfieDone ? "Xác thực khuôn mặt thành công" : "Xác thực khuôn mặt (selfie liveness)"}
        </span>
        <span className="mt-0.5 block text-[13px] text-mute">
          Kiểm tra khuôn mặt sống (liveness) chống giả mạo.
        </span>
      </span>
      <span className="shrink-0 text-[13px] font-semibold text-gold">
        {selfieDone ? "Làm lại" : "Bắt đầu"}
      </span>
    </ToggleCard>

    <div className="mt-0.5">
      <div className="mb-2.5 text-[13px] font-semibold text-ink">Chọn mức định danh</div>
      <div className="grid grid-cols-1 gap-[11px] min-[720px]:grid-cols-2">
        <button
          onClick={() => setIdLevel(1)}
          className={cn(
            "w-full rounded-[13px] border-[1.5px] p-[15px_16px] text-left transition",
            idLevel === 1 ? "border-blue bg-[#f2f8ff]" : "border-line bg-white"
          )}
        >
          <span className="flex items-center justify-between">
            <span className="text-[15px] font-bold text-navy">Mức 1</span>
            <RadioDot on={idLevel === 1} />
          </span>
          <span className="mt-1.5 block text-[12.5px] leading-[1.5] text-mute">
            Định danh cơ bản qua giấy tờ. Đủ cho khai thác phạm vi hẹp.
          </span>
        </button>
        <button
          onClick={() => setIdLevel(2)}
          className={cn(
            "w-full rounded-[13px] border-[1.5px] p-[15px_16px] text-left transition",
            idLevel === 2 ? "border-blue bg-[#f2f8ff]" : "border-line bg-white"
          )}
        >
          <span className="flex items-center justify-between">
            <span className="text-[15px] font-bold text-navy">
              Mức 2{" "}
              <span className="rounded-full bg-[rgba(199,154,43,.12)] px-[7px] py-0.5 text-[11px] font-semibold text-gold">
                Khuyến nghị
              </span>
            </span>
            <RadioDot on={idLevel === 2} />
          </span>
          <span className="mt-1.5 block text-[12.5px] leading-[1.5] text-mute">
            KYC đầy đủ + liveness. Định giá cao, chống giả mạo tối đa.
          </span>
        </button>
      </div>
    </div>

    <div className="flex items-start gap-3 rounded-xl border border-[#cfe6fb] border-l-4 border-l-blue bg-[#eef7ff] p-[15px_17px]">
      <DuotoneIcon name="justice-scale-1" size={22} color="#0c8ce9" secondaryColor="#bcdffb" />
      <div>
        <div className="text-[13.5px] font-semibold text-[#0b5c9c]">Căn cứ pháp lý về định danh điện tử</div>
        <div className="mt-0.5 text-[13px] leading-[1.55] text-[#2a6699]">
          Việc xác thực danh tính tuân thủ Nghị định <b>69/2024/NĐ-CP</b> về định danh và xác thực
          điện tử. Giấy tờ của bạn được mã hoá và chỉ dùng cho mục đích xác thực.
        </div>
      </div>
    </div>
  </div>
);

/* ---------- Bước 3 ---------- */

const Step3 = ({ profile, toggle, hint }) => (
  <div data-reveal className="flex flex-col gap-[13px]">
    <div className="flex items-start gap-3 rounded-xl border border-line bg-ivory p-[13px_15px]">
      <IconLock size={18} stroke={1.6} className="mt-px shrink-0 text-mute" />
      <div className="text-[13px] leading-[1.55] text-mute">
        Mặc định <b className="text-navy">tối thiểu hoá dữ liệu</b>: chỉ chân dung được bật. Bật thêm
        yếu tố nào là quyền của bạn — mỗi yếu tố đều có thể tắt hoặc rút lại về sau.
      </div>
    </div>
    {profileElements.map((e) => (
      <ToggleCard key={e.key} on={profile[e.key]} onClick={() => toggle(e.key)}>
        <span className="inline-flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[11px] bg-[rgba(12,140,233,.1)]">
          <DuotoneIcon name={e.icon} size={22} color="#0c8ce9" secondaryColor="#bcdffb" />
        </span>
        <span className="flex-1">
          <span className="block text-[15px] font-semibold text-navy">{e.title}</span>
          <span className="mt-[3px] block text-[12.5px] text-mute">{hint[e.key]}</span>
        </span>
        <Switch on={profile[e.key]} />
      </ToggleCard>
    ))}
  </div>
);

/* ---------- Bước 4 ---------- */

const Step4 = ({ auth, toggleAuth, price, setPrice, prohibited, toggleProhibited, skipAuth }) => (
  <div data-reveal className="flex flex-col gap-[18px]">
    <div>
      <div className="mb-2.5 text-[13px] font-semibold text-ink">
        Cho phép loại hình khai thác nào theo mặc định
      </div>
      <div className="flex flex-col gap-2.5">
        {authTypes.map((a) => (
          <ToggleCard key={a.key} on={auth[a.key]} onClick={() => toggleAuth(a.key)}>
            <span className="flex-1 text-left text-[14.5px] font-semibold text-navy">{a.title}</span>
            <Switch on={auth[a.key]} />
          </ToggleCard>
        ))}
      </div>
    </div>

    <div className="rounded-[13px] border border-line bg-ivory p-[18px_20px]">
      <div className="flex items-baseline justify-between">
        <span className="text-[13px] font-semibold text-ink">Giá gợi ý mỗi lượt khai thác</span>
        <span className="font-serif text-[22px] font-bold text-navy">{price} tr ₫</span>
      </div>
      <input
        type="range"
        min="1"
        max="50"
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value, 10))}
        className="mt-3.5 h-1.5 w-full accent-blue"
      />
      <div className="mt-1 flex justify-between text-[11.5px] text-mute">
        <span>1 tr ₫</span>
        <span>Có thể thương lượng từng giấy phép</span>
        <span>50 tr ₫</span>
      </div>
    </div>

    <div>
      <div className="mb-1.5 text-[13px] font-semibold text-ink">
        Điều cấm — nhân dạng của bạn <span className="text-[#fb2c36]">không bao giờ</span> được dùng cho
      </div>
      <div className="flex flex-wrap gap-2.5">
        <LockedChip label="Khiêu dâm hoá" />
        <LockedChip label="Bôi nhọ, phỉ báng" />
        {prohibitedChips.map((c) => {
          const on = prohibited.includes(c.key);
          return (
            <button
              key={c.key}
              onClick={() => toggleProhibited(c.key)}
              className={cn(
                "inline-flex items-center gap-[7px] rounded-full border-[1.5px] px-3.5 py-2 text-[13px] font-semibold transition",
                on ? "border-[#ffccce] bg-[#fff2f2] text-[#9f0712]" : "border-line bg-white text-mute"
              )}
            >
              {c.label}
            </button>
          );
        })}
      </div>
      <div className="mt-2 text-xs text-mute">
        Hai điều cấm đầu là ranh giới đạo đức bắt buộc của định chế, không thể tắt.
      </div>
    </div>

    <button
      onClick={skipAuth}
      className="self-start text-[13.5px] font-semibold text-blue-2 underline"
    >
      Bỏ qua, thiết lập sau trong Dashboard
    </button>
  </div>
);

const LockedChip = ({ label }) => (
  <span className="inline-flex items-center gap-[7px] rounded-full border-[1.5px] border-[#ffccce] bg-[#fff2f2] px-3.5 py-2 text-[13px] font-semibold text-[#9f0712]">
    <IconLock size={13} stroke={1.7} />
    {label} <span className="text-[10.5px] text-[#c0464c]">· khoá</span>
  </span>
);

/* ---------- Bước 5 ---------- */

const Step5 = ({ subjectLabel, levelLabel, profileSummary, price, agree1, setAgree1, agree2, setAgree2 }) => (
  <div data-reveal className="flex flex-col gap-4">
    <div className="overflow-hidden rounded-[13px] border border-line">
      <div className="bg-ivory p-[11px_16px] text-xs font-bold uppercase tracking-[0.04em] text-mute">
        Tóm tắt hồ sơ đăng ký
      </div>
      <div className="flex flex-col">
        {[
          ["Loại chủ thể", subjectLabel],
          ["Mức định danh", levelLabel],
          ["Yếu tố bảo hộ", profileSummary],
          ["Giá gợi ý", `${price} tr ₫`],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-3 border-t border-line p-[12px_16px] text-[13.5px]">
            <span className="text-mute">{k}</span>
            <b className="text-right text-navy">{v}</b>
          </div>
        ))}
      </div>
    </div>

    <div
      className="rounded-[14px] p-[20px_22px] text-[#eaf0f8]"
      style={{ background: "linear-gradient(180deg,var(--tid-navy),var(--tid-navy-2))" }}
    >
      <div className="flex items-center gap-[11px] border-b border-white/[.12] pb-3.5">
        <Seal size={38} />
        <div>
          <div className="text-[15px] font-bold text-white">Xác nhận đồng ý xử lý dữ liệu</div>
          <div className="mt-px text-xs text-[#8ea0ba]">Consent Confirmation</div>
        </div>
      </div>
      <div className="mt-3.5 flex flex-col gap-[11px] text-[13px]">
        <div className="flex justify-between gap-3">
          <span className="text-[#8ea0ba]">Bên kiểm soát dữ liệu</span>
          <b className="text-white">Vietnam TrustID</b>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-[#8ea0ba]">Mục đích</span>
          <span className="text-right text-[#eaf0f8]">Bảo hộ · cấp phép · thu hộ nhân dạng</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-[#8ea0ba]">Cơ sở pháp lý</span>
          <span className="text-right text-[#eaf0f8]">Luật 91/2025 · NĐ 69/2024</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-[#8ea0ba]">Quyền rút lại</span>
          <b className="text-[#5ee6ac]">Bất cứ lúc nào</b>
        </div>
      </div>
    </div>

    <label className="flex cursor-pointer items-start gap-3 rounded-xl border-[1.5px] border-line bg-white p-[14px_16px]">
      <input
        type="checkbox"
        checked={agree1}
        onChange={(e) => setAgree1(e.target.checked)}
        className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-blue"
      />
      <span className="text-[13.5px] leading-[1.55] text-ink">
        Tôi <b>đồng ý minh thị</b> để TrustID bảo hộ, cấp phép và thu hộ nhân dạng số của tôi theo phạm
        vi &amp; điều cấm đã thiết lập ở trên.
      </span>
    </label>
    <label className="flex cursor-pointer items-start gap-3 rounded-xl border-[1.5px] border-line bg-white p-[14px_16px]">
      <input
        type="checkbox"
        checked={agree2}
        onChange={(e) => setAgree2(e.target.checked)}
        className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-blue"
      />
      <span className="text-[13.5px] leading-[1.55] text-ink">
        Tôi đã đọc &amp; hiểu <a href="#">Chính sách dữ liệu cá nhân</a> và{" "}
        <a href="#">Điều khoản ủy quyền</a>, và xác nhận mình đủ 18 tuổi.
      </span>
    </label>

    <div className="flex items-center gap-2.5 rounded-[10px] border border-line bg-ivory p-[11px_14px] text-xs text-mute">
      <IconInfoCircle size={15} stroke={1.6} className="text-blue" />
      Khi hoàn tất, hệ thống ghi <b className="font-semibold text-navy">tem thời gian</b> và{" "}
      <b className="font-semibold text-navy">mã băm SHA-256</b> vào nhật ký bất biến — bằng chứng đồng
      ý không thể sửa đổi.
    </div>
  </div>
);

/* ---------- Sidebar tóm tắt ---------- */

const SummarySidebar = ({
  certName,
  subjectLabel,
  subjectShort,
  levelShort,
  profileCount,
  authCount,
  prohibitedCount,
  price,
  step,
  stepStatus,
  agreed,
}) => {
  const rows = [
    { label: "Tài khoản & loại chủ thể", value: subjectShort, n: 1 },
    { label: "Xác thực danh tính", value: levelShort, n: 2 },
    { label: "Hồ sơ nhân dạng", value: `${profileCount} yếu tố`, n: 3 },
    { label: "Mặc định ủy quyền", value: `${price} tr ₫`, n: 4 },
    { label: "Đồng ý pháp lý", value: null, n: 5 },
  ];
  return (
    <aside className="sticky top-24 flex flex-col gap-4">
      {/* Ví bản quyền */}
      <div
        className="relative overflow-hidden rounded-2xl p-[20px_22px] text-[#eaf0f8] shadow-[0_16px_38px_rgba(15,23,43,.22)]"
        style={{ background: "linear-gradient(160deg,var(--tid-navy),var(--tid-navy-2))" }}
      >
        <div aria-hidden className="absolute -right-[30px] -top-[30px] opacity-10">
          <svg width="160" height="160" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="95" fill="none" stroke="#fff" strokeWidth="1" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="#fff" strokeWidth="1" />
          </svg>
        </div>
        <div className="relative flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-gold-2">
            <DuotoneIcon name="wallet" size={16} color="#e0b64a" secondaryColor="#ecd9a3" />
            Ví bản quyền
          </span>
          <span className="text-[11px] text-[#8ea0ba]">Bản xem trước</span>
        </div>
        <div className="mt-3.5 font-serif text-[19px] font-bold text-white">{certName}</div>
        <div className="mt-0.5 text-[12.5px] text-[#9fb0c8]">
          {subjectLabel} · {levelShort}
        </div>
        <div className="mt-4 flex gap-5 border-t border-dashed border-white/[.16] pt-3.5">
          <div>
            <div className="text-[11px] text-[#8ea0ba]">Yếu tố bảo hộ</div>
            <div className="mt-0.5 text-[17px] font-bold text-white">
              {profileCount}
              <span className="text-xs font-medium text-[#9fb0c8]"> / 4</span>
            </div>
          </div>
          <div>
            <div className="text-[11px] text-[#8ea0ba]">Loại khai thác</div>
            <div className="mt-0.5 text-[17px] font-bold text-white">
              {authCount}
              <span className="text-xs font-medium text-[#9fb0c8]"> mở</span>
            </div>
          </div>
          <div>
            <div className="text-[11px] text-[#8ea0ba]">Điều cấm</div>
            <div className="mt-0.5 text-[17px] font-bold text-white">{prohibitedCount}</div>
          </div>
        </div>
      </div>

      {/* Tóm tắt trực tiếp */}
      <div className="rounded-2xl border border-line bg-white p-[18px_20px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
        <div className="flex items-center justify-between">
          <span className="text-[14.5px] font-bold text-navy">Tóm tắt trực tiếp</span>
          <span className="text-[11.5px] text-mute">Bước {step}/5</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ivory">
          <span
            className="block h-full rounded-full transition-[width]"
            style={{ width: `${(step / 5) * 100}%`, background: "linear-gradient(90deg,var(--tid-blue),#0b6fbb)" }}
          />
        </div>
        <div className="mt-4 flex flex-col gap-[11px]">
          {rows.map((r) => {
            const status = stepStatus(r.n);
            return (
              <div key={r.n} className="flex items-center gap-2.5 text-[13px]">
                <span
                  className={cn(
                    "box-border flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full",
                    status === "done" && "bg-[#00bc7d]",
                    status === "active" && "border-2 border-blue bg-white",
                    status === "todo" && "border-2 border-[#d5dbe3] bg-white"
                  )}
                >
                  {status === "done" && <IconCheck size={11} stroke={3} className="text-white" />}
                </span>
                <span className="flex-1 text-ink">{r.label}</span>
                {r.n === 5 ? (
                  <span
                    className={cn(
                      "rounded-full px-[9px] py-0.5 text-[11px] font-bold",
                      agreed ? "bg-[#d6f7ea] text-[#007a55]" : "bg-[#fff3dd] text-[#8a5000]"
                    )}
                  >
                    {agreed ? "Đã đồng ý" : "Chờ ký"}
                  </span>
                ) : (
                  <span className="text-xs text-mute">{r.value}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Cam kết bảo vệ */}
      <div className="rounded-2xl border border-line bg-white p-[18px_20px] shadow-[0_6px_18px_rgba(15,23,43,.05)]">
        <div className="mb-3 text-[14.5px] font-bold text-navy">Cam kết bảo vệ của TrustID</div>
        <div className="flex flex-col gap-[11px]">
          {[
            "Dữ liệu lưu trú trong nước, thu thập tối thiểu.",
            "Mã hoá khi lưu trữ & truyền tải.",
            "Có DPO phụ trách bảo vệ dữ liệu.",
            "Rút lại đồng ý bất cứ lúc nào.",
          ].map((t) => (
            <div key={t} className="flex items-start gap-2.5">
              <IconCheck size={16} stroke={1.8} style={{ color: OK }} className="mt-px shrink-0" />
              <span className="text-[13px] leading-[1.5] text-ink">{t}</span>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="mt-4 flex items-center justify-center gap-2 rounded-[11px] border border-line bg-ivory p-[11px] text-[13.5px] font-semibold text-navy"
        >
          <IconMessageChatbot size={15} stroke={1.6} />
          Cần hỗ trợ? Trò chuyện với tư vấn viên
        </a>
      </div>
    </aside>
  );
};

/* ---------- Màn hình thành công ---------- */

const SuccessScreen = ({ restart }) => (
  <section
    data-reveal
    className="relative overflow-hidden text-[#eaf0f8]"
    style={{ background: "radial-gradient(1200px 600px at 50% -20%, #23385a 0%, var(--tid-navy) 52%, var(--tid-navy-2) 100%)" }}
  >
    <div aria-hidden className="pointer-events-none absolute left-1/2 -top-[60px] -translate-x-1/2 opacity-[.06]">
      <svg width="620" height="620" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="95" fill="none" stroke="#fff" strokeWidth="1" />
        <circle cx="100" cy="100" r="74" fill="none" stroke="#fff" strokeWidth="1" />
        <circle cx="100" cy="100" r="53" fill="none" stroke="#fff" strokeWidth="1" />
      </svg>
    </div>
    <div className="relative mx-auto max-w-[900px] px-8 pb-[70px] pt-[78px] text-center">
      <div className="relative inline-flex">
        <Seal size={96} />
        <span
          className="absolute -bottom-1.5 -right-2 flex h-[38px] w-[38px] items-center justify-center rounded-full border-[3px] border-navy"
          style={{ background: OK }}
        >
          <IconCheck size={20} stroke={2.4} className="text-white" />
        </span>
      </div>
      <div className="mt-[26px]">
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,188,125,.4)] bg-[rgba(0,188,125,.14)] px-[15px] py-[7px] text-[13px] font-semibold text-[#5ee6ac]">
          <span className="h-[7px] w-[7px] rounded-full bg-current" />
          Đăng ký hoàn tất · Ví bản quyền đã mở
        </span>
      </div>
      <h1 className="mt-5 text-balance font-serif text-[42px] font-bold leading-[1.16] text-white">
        Hồ sơ nhân dạng của bạn đã được bảo hộ
      </h1>
      <p className="mx-auto mt-4 max-w-[620px] text-[17.5px] leading-[1.66] text-[#c3cede]">
        Nhân dạng số của bạn nay được ghi nhận trong sổ đăng bạ và đặt dưới sự bảo chứng của Hiệp hội.
        Mọi khai thác kể từ đây phải thông qua giấy phép do bạn kiểm soát.
      </p>

      <div className="mx-auto mt-[34px] grid max-w-[620px] grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-white/[.14] bg-white/10 text-left sm:grid-cols-3">
        {[
          ["Mã bảo hộ", "TID-2026-0087", true],
          ["Ghi tem thời gian", "16/07/2026 · 09:42", false],
          ["Mã băm SHA-256", "0x7f3a…c214", true],
        ].map(([k, v, mono]) => (
          <div key={String(k)} className="bg-white/[.03] p-[16px_18px]">
            <div className="text-[11px] uppercase tracking-[0.06em] text-[#8ea0ba]">{k}</div>
            <div className={cn("mt-1 text-[14.5px] text-white", mono && "font-mono tracking-[0.04em] text-[15px]")}>
              {v}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        <a
          href="/dashboard"
          className="inline-flex items-center gap-2.5 rounded-xl bg-blue px-[34px] py-4 text-[16.5px] font-bold text-white shadow-[0_12px_30px_rgba(12,140,233,.4)]"
        >
          Vào Dashboard
          <IconArrowRight size={18} stroke={1.8} />
        </a>
        <button
          onClick={restart}
          className="inline-flex rounded-xl border border-white/[.22] bg-transparent px-6 py-4 text-[14.5px] font-semibold text-[#c3cede]"
        >
          Đăng ký hồ sơ khác
        </button>
      </div>
    </div>

    <div className="bg-ivory px-8 pb-16 pt-[52px]">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-7 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Gợi ý tiếp theo</div>
          <h2 className="mt-2 font-serif text-[26px] font-bold text-navy">
            Ba việc nên làm để hồ sơ sinh lời an toàn
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {nextSteps.map((s) => (
            <a
              key={s.title}
              href="/dashboard"
              className="flex flex-col gap-3 rounded-[14px] border border-line bg-white p-[22px] shadow-[0_6px_18px_rgba(15,23,43,.05)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(15,23,43,.1)]"
            >
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: s.iconBg }}
              >
                <DuotoneIcon name={s.icon} size={24} color={s.color} secondaryColor={s.secondary} />
              </span>
              <div className="text-[15.5px] font-semibold text-navy">{s.title}</div>
              <div className="text-[13.5px] leading-[1.55] text-mute">{s.desc}</div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-2">
                {s.action}
                <IconArrowRight size={12} stroke={1.7} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RegisterWizard;
