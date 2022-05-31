import QRCode from "qrcode";

QRCode.toString(
  "https://github.com/podefr",
  {
    type: "terminal",
    errorCorrectionLevel: "H",
  },
  (_, url) => console.log(url)
);
