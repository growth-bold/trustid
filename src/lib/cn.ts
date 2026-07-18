/** Ghép các class có điều kiện, bỏ qua giá trị falsy. */
export const cn = (...classes) => classes.filter(Boolean).join(" ");
