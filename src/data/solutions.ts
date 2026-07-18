/** Giải pháp theo từng nhóm đối tượng — dữ liệu cho khối tab Solutions. */

export const solutionsData = {
  subject: {
    kicker: "Chủ thể",
    title: "Nghệ sĩ · KOL · Cá nhân",
    fear: "“Tiền và quyền của tôi giao cho các anh có an toàn không?”",
    heading: "Quyền kiểm soát nằm trong tay chủ thể — và thu nhập được trả về minh bạch.",
    blurb:
      "Chủ thể giữ toàn quyền định đoạt nhân dạng số của mình. Chúng tôi thu hộ qua tài khoản tách bạch, đối soát định kỳ và báo cáo đầy đủ cho từng chủ thể.",
    cta: "Đăng ký bảo hộ",
    ctaHref: "/register",
    points: [
      { t: "Rút uỷ quyền bất cứ lúc nào", d: "Quyền rút lại đồng ý (minh thị) được bảo đảm như một nghĩa vụ, không phải ưu đãi." },
      { t: "Thu hộ qua tài khoản tách bạch", d: "Tiền của chủ thể không nằm chung tài khoản vận hành; đối soát và thanh toán theo kỳ công bố." },
      { t: "Nhật ký sử dụng nhân dạng", d: "Biết chính xác ai đang khai thác, phạm vi nào, còn hiệu lực đến khi nào." },
      { t: "Mã uỷ quyền tra cứu công khai", d: "Mỗi uỷ quyền có một mã để bất kỳ ai — kể cả chính chủ thể — tự kiểm chứng." },
    ],
  },
  business: {
    kicker: "Bên khai thác",
    title: "Doanh nghiệp sử dụng nhân dạng",
    fear: "“Giấy phép các anh cấp có thật sự hợp pháp không?”",
    heading: "Mỗi giấy phép là một chứng thư có thể tra cứu, viện dẫn căn cứ pháp lý cụ thể.",
    blurb:
      "Bên khai thác nhận được sự chắc chắn pháp lý: uỷ quyền có hiệu lực, dẫn chiếu điều luật, và có thể chứng minh trước bất kỳ tranh chấp nào.",
    cta: "Xin cấp phép sử dụng",
    ctaHref: "/license",
    points: [
      { t: "An toàn pháp lý khi khai thác", d: "Ủy quyền dẫn chiếu Luật 91/2025/QH15 và các nghị định liên quan — không khai thác trong vùng xám." },
      { t: "Chứng thư chống tranh chấp", d: "Chứng thư uỷ quyền công khai, tra cứu tức thời, đứng vững khi có khiếu nại." },
      { t: "Quy trình cấp phép chuẩn hoá", d: "Một luồng xin cấp phép rõ ràng theo phạm vi, thời hạn và mức phí công bố." },
      { t: "Được hiệp hội giám sát", d: "Việc cấp phép do một định chế độc lập bảo chứng, không phải tự nền tảng cấp cho mình." },
    ],
  },
  partner: {
    kicker: "Nền tảng đối tác",
    title: "Nền tảng · Tổ chức tích hợp",
    fear: "“Chúng tôi cần hạ tầng cấp phép sẵn có, tuân thủ.”",
    heading: "Hạ tầng cấp phép và thu hộ được bảo chứng, sẵn sàng để tích hợp.",
    blurb:
      "Đối tác kế thừa toàn bộ chuẩn tuân thủ, sổ đăng bạ và cơ chế thu hộ đã được bảo chứng — thay vì tự xây một quy trình pháp lý từ đầu.",
    cta: "Trở thành đối tác",
    ctaHref: "/#lienhe",
    points: [
      { t: "Hạ tầng cấp phép & thu hộ", d: "Kế thừa quy trình uỷ quyền, đối soát và phân phối đã chuẩn hoá." },
      { t: "Tích hợp sổ đăng bạ công khai", d: "Đồng bộ mã uỷ quyền để người dùng cuối tự kiểm chứng ngay trên nền tảng của bạn." },
      { t: "Chung chuẩn tuân thủ", d: "Áp dụng cùng bộ nguyên tắc đồng ý minh thị và ranh giới đạo đức bắt buộc." },
      { t: "Đồng vận hành dưới bảo chứng", d: "Hoạt động dưới sự giám sát của hiệp hội bảo chứng, minh bạch với chủ thể." },
    ],
  },
};

export const solutionsOrder = ["subject", "business", "partner"];
