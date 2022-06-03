import moment from "moment";

export const format_date = (date) => moment.utc(date).format("LL");

export const format_time = (date) => moment.utc(date).format("hh:mm a");

export const formatCurrency = (input) =>
  new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
  }).format(input);

export const closeModals = () => {
  window?.$(".modal").modal("hide");
  window?.$(".modal-backdrop").remove();
};
