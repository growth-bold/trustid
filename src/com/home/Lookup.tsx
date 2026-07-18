"use client";

import { useState } from "react";
import { IconSearch, IconAlertCircle, IconShieldCheck } from "@tabler/icons-react";
import { Seal } from "@/com/brand/Seal";
import { registryDb, registrySamples, statusColor } from "@/data/registry";

/** Tra cứu và tự kiểm chứng một mã uỷ quyền trong sổ đăng bạ công khai. */
export const Lookup = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const run = (code) => {
    const key = (code || "").trim().toUpperCase();
    const hit = registryDb[key];
    if (hit) {
      setQuery(key);
      setResult(hit);
      setNotFound(false);
    } else {
      setQuery(key);
      setResult(null);
      setNotFound(key.length > 0);
    }
  };

  const status = result ? statusColor[result.statusKind] || statusColor.active : null;

  return (
    <div className="w-full font-sans">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          run(query);
        }}
        className="flex flex-wrap items-end gap-2.5"
      >
        <div className="flex min-w-[240px] flex-1 flex-col gap-1.5">
          <label className="text-[13px] font-semibold tracking-[0.01em] text-navy">
            Mã uỷ quyền
          </label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ví dụ: TID-2025-0042"
            spellCheck={false}
            className="box-border h-[52px] w-full rounded-xl border border-[#d7dee8] bg-white px-4 font-mono text-base tracking-[0.06em] text-navy shadow-[0_2px_4px_rgba(15,23,43,.04),0_1px_2px_rgba(15,23,43,.05)] outline-none transition focus:border-blue focus:shadow-[0_0_0_4px_rgba(12,140,233,.18)]"
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-[52px] items-center gap-2.5 rounded-xl bg-blue px-[26px] text-[15px] font-semibold text-white shadow-[0_6px_16px_rgba(12,140,233,.28)] transition hover:bg-blue-2 active:scale-[.98]"
        >
          <IconSearch size={17} stroke={1.6} />
          Tra cứu
        </button>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-[12.5px] text-mute">
        <span>Thử nhanh:</span>
        {registrySamples.map((s) => (
          <button
            key={s.code}
            onClick={() => run(s.code)}
            className="cursor-pointer rounded-full border border-[#d7dee8] bg-ivory px-2.5 py-1 font-mono text-xs tracking-[0.04em] text-navy transition hover:border-blue hover:text-blue"
          >
            {s.label}
          </button>
        ))}
      </div>

      {notFound && (
        <div className="mt-[18px] flex items-start gap-3 rounded-xl border border-[#ffd0d2] bg-[#fff2f2] px-[18px] py-4">
          <IconAlertCircle size={20} stroke={1.6} className="mt-px shrink-0 text-[#e7000b]" />
          <div>
            <div className="text-[15px] font-semibold text-[#9f0712]">
              Không tìm thấy uỷ quyền hợp lệ
            </div>
            <div className="mt-0.5 text-[13.5px] leading-[1.55] text-[#7a2226]">
              Không có bản ghi nào khớp với mã <b className="font-mono">{query}</b> trong sổ đăng bạ
              công khai. Vui lòng kiểm tra lại mã, hoặc gửi yêu cầu xác minh tới bộ phận đối soát.
            </div>
          </div>
        </div>
      )}

      {result && (
        <div className="mt-5 overflow-hidden rounded-xl border border-[#e3ddca] bg-[linear-gradient(180deg,#fdfbf5,#f7f2e6)] shadow-[0_18px_44px_rgba(15,23,43,.14)]">
          <div className="flex items-start justify-between gap-4 border-b border-dashed border-[#d8cfb4] px-6 py-5">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
                Chứng thư uỷ quyền khai thác
              </div>
              <div className="mt-1 font-serif text-[22px] font-bold tracking-[0.04em] text-navy">
                {result.code}
              </div>
            </div>
            <div className="shrink-0">
              <Seal size={72} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-7 gap-y-[18px] px-6 py-5">
            <div className="col-span-2 flex items-center gap-2.5">
              <span
                className="inline-flex items-center gap-[7px] rounded-full px-[13px] py-1.5 text-[13px] font-semibold"
                style={{ color: status.color, background: status.background }}
              >
                <span className="h-2 w-2 rounded-full bg-current" />
                {result.status}
              </span>
              <span className="text-[12.5px] text-mute">Cập nhật {result.updated}</span>
            </div>
            {result.fields.map((f) => (
              <div key={f.label}>
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.04em] text-[#8a93a3]">
                  {f.label}
                </div>
                <div className="mt-0.5 text-[15px] font-medium leading-[1.5] text-navy">
                  {f.value}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2.5 border-t border-dashed border-[#d8cfb4] bg-[rgba(25,40,61,.04)] px-6 py-3.5 text-[12.5px] text-mute">
            <IconShieldCheck size={15} stroke={1.5} className="text-gold" />
            Xác thực bởi Hiệp hội bảo chứng nhân dạng số · Bản ghi công khai, đối chiếu trực tiếp với
            sổ đăng bạ.
          </div>
        </div>
      )}
    </div>
  );
};

export default Lookup;
