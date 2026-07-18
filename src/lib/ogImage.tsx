import { ImageResponse } from "next/og";
import { org } from "@/data/site";

/** Kích thước & kiểu ảnh OG chuẩn cho social (1200×630). */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = "TrustID — Chứng nhận bảo hộ nhân dạng số";

/* Con dấu rút gọn (không dùng textPath để tương thích Satori) — trùng favicon. */
const sealSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<circle cx="32" cy="32" r="31" fill="#19283d"/>
<circle cx="32" cy="32" r="30" fill="none" stroke="#c79a2b" stroke-width="2"/>
<circle cx="32" cy="32" r="25.5" fill="none" stroke="#c79a2b" stroke-width="1" opacity=".45"/>
<g transform="translate(32 33) scale(.86)">
<path d="M 0 -29 L 22 -20.5 L 22 4 C 22 20 11.5 29 0 33.5 C -11.5 29 -22 20 -22 4 L -22 -20.5 Z" fill="#f3ead4" stroke="#c79a2b" stroke-width="2.4"/>
<path d="M 0 -15 C 8.6 -15 13.5 -8.6 13.5 0 M 0 -8.6 C 5 -8.6 8.6 -4.3 8.6 1.7 M 0 -1.7 C 2.6 -1.7 3.4 .9 3.4 5.2 M 0 -15 C -8.6 -15 -13.5 -8.6 -13.5 0 M 0 -8.6 C -5 -8.6 -8.6 -4.3 -8.6 1.7 M 0 -1.7 C -2.6 -1.7 -3.4 .9 -3.4 5.2" fill="none" stroke="#19283d" stroke-width="2" stroke-linecap="round"/>
<path d="M 0 6.8 C 4.3 10.3 7.7 13.7 0 20.6 C -7.7 13.7 -4.3 10.3 0 6.8 Z" fill="#b0121f"/>
<path d="M 0 -25.8 l 1.9 4 l 4.3 .4 l -3.2 2.9 l .9 4.2 l -3.9 -2.1 l -3.9 2.1 l .9 -4.2 l -3.2 -2.9 l 4.3 -.4 Z" fill="#c79a2b"/>
</g></svg>`;

const sealDataUri = `data:image/svg+xml;base64,${Buffer.from(sealSvg).toString("base64")}`;

/* Ký tự cần cho việc subset font (rút nhỏ dung lượng tải). */
const OG_TEXT = Array.from(
  new Set(
    (
      "TrustID Được bảo chứng bởi Hiệp hội nhân dạng số " +
      "Quyền và khai thác hợp pháp của bạn " +
      "Đăng ký · Cấp phép Thu minh · CHỨNG NHẬN BẢO HỘ NHÂN DẠNG SỐ " +
      "Digital Identity Protection Chủ thể được Mã uỷ quyền Hiệu lực Còn " +
      "Nguyễn M. A. TID-2025-0042 trustid.vn"
    ).split("")
  )
).join("");

async function loadGoogleFont(family: string, weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(
    / /g,
    "+"
  )}:wght@${weight}&text=${encodeURIComponent(OG_TEXT)}`;
  const css = await (await fetch(url)).text();
  const m = css.match(/src: url\((https:[^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (m?.[1]) {
    const res = await fetch(m[1]);
    if (res.ok) return res.arrayBuffer();
  }
  throw new Error(`Không tải được font ${family} ${weight}`);
}

async function loadFonts() {
  const specs = [
    { family: "Be Vietnam Pro", name: "Be Vietnam Pro", weight: 400 as const },
    { family: "Be Vietnam Pro", name: "Be Vietnam Pro", weight: 600 as const },
    { family: "Noto Serif", name: "Noto Serif", weight: 700 as const },
  ];
  const fonts = [];
  for (const s of specs) {
    try {
      fonts.push({ name: s.name, data: await loadGoogleFont(s.family, s.weight), weight: s.weight, style: "normal" as const });
    } catch {
      // Bỏ qua font lỗi tải — Satori dùng font mặc định thay thế.
    }
  }
  return fonts;
}

const SERIF = '"Noto Serif"';
const label = { fontSize: 15, letterSpacing: 1, textTransform: "uppercase" as const, color: "#8a93a3", fontWeight: 600 };

/** Sinh ảnh OG dạng "giấy chứng nhận bảo hộ nhân dạng số". */
export async function renderCertificateOG() {
  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          padding: "58px 64px",
          color: "#eaf0f8",
          fontFamily: '"Be Vietnam Pro"',
          background: "linear-gradient(105.99deg, #4d3a26 -8.18%, #10182a 26.54%, #143245 105.51%)",
        }}
      >
        {/* Vòng tròn trang trí góc phải */}
        <div style={{ position: "absolute", right: -170, top: -150, width: 520, height: 520, borderRadius: 520, border: "1px solid rgba(255,255,255,.06)", display: "flex" }} />
        <div style={{ position: "absolute", right: -110, top: -90, width: 400, height: 400, borderRadius: 400, border: "1px solid rgba(255,255,255,.06)", display: "flex" }} />

        {/* Cột trái: thương hiệu + tiêu đề */}
        <div style={{ display: "flex", flexDirection: "column", width: 600, justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={sealDataUri} width={52} height={52} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 700, color: "#ffffff" }}>{org.name}</div>
              <div style={{ fontSize: 15, color: "#9fb0c8" }}>{org.tagline}</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginTop: 30,
              padding: "9px 16px",
              borderRadius: 999,
              background: "rgba(199,154,43,.14)",
              border: "1px solid rgba(224,182,74,.35)",
              color: "#e0b64a",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Được bảo chứng bởi Hiệp hội bảo chứng nhân dạng số
          </div>

          <div style={{ display: "flex", fontFamily: SERIF, fontSize: 46, fontWeight: 700, lineHeight: 1.16, color: "#ffffff", marginTop: 22 }}>
            Quyền được bảo hộ và khai thác hợp pháp nhân dạng số của bạn.
          </div>

          <div style={{ display: "flex", fontSize: 20, color: "#c3cede", marginTop: 20 }}>
            Đăng ký · Cấp phép · Thu hộ nhân dạng số minh bạch.
          </div>
        </div>

        {/* Cột phải: thẻ chứng nhận */}
        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", paddingLeft: 30 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 440,
              padding: "28px 30px 26px",
              borderRadius: 16,
              border: "1px solid #e6dcbf",
              background: "linear-gradient(180deg,#fdfbf5,#f4eedd)",
              boxShadow: "0 30px 70px rgba(0,0,0,.42)",
              transform: "rotate(-2.2deg)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px dashed #d8cfb4", paddingBottom: 18 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "#c79a2b", fontWeight: 600 }}>Chứng nhận bảo hộ nhân dạng số</div>
                <div style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 700, color: "#19283d", marginTop: 8 }}>Digital Identity Protection</div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={sealDataUri} width={66} height={66} alt="" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", paddingTop: 18 }}>
              <div style={{ display: "flex", ...label }}>Chủ thể được bảo hộ</div>
              <div style={{ display: "flex", fontFamily: SERIF, fontSize: 24, fontWeight: 700, color: "#19283d", marginTop: 4 }}>Nguyễn M. A.</div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", ...label }}>Mã uỷ quyền</div>
                <div style={{ display: "flex", fontSize: 20, color: "#19283d", marginTop: 5, letterSpacing: 1 }}>TID-2025-0042</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", ...label }}>Hiệu lực</div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 5,
                    padding: "5px 13px",
                    borderRadius: 999,
                    background: "#d0fae5",
                    color: "#007a55",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  <div style={{ width: 9, height: 9, borderRadius: 9, background: "#007a55", display: "flex" }} />
                  Còn hiệu lực
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px dashed #d8cfb4", marginTop: 20, paddingTop: 16 }}>
              <div style={{ display: "flex", fontSize: 15, color: "#8a7a4e", fontStyle: "italic" }}>Đối chiếu công khai · trustid.vn</div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts }
  );
}
