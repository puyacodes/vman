// const path = require("path");
// const fs = require("fs");
// const moment = require("jalali-moment");

// function start(args) {
//   let locale = args[0];
//   let format = args[1];
  

//   if (!locale) {
//     locale = "en";
//   }
//   if (!format) {
//     format = "YYYYMMDDHHmmss";
//   }

//   const ts = moment().locale(locale).format(format);
//   const workersDir = process.cwd();
//   const infoPath = path.join(workersDir, "./info.json");

//   if (fs.existsSync(infoPath)) {
//     const data = fs.readFileSync(infoPath, { encoding: "utf8" });
//     let info = {};

//     try {
//       info = JSON.parse(data);
//     } catch {}

//     if (typeof info != "object" || info == null) {
//       info = {};
//     }

//     info.ts = ts;

//     fs.writeFileSync(infoPath, JSON.stringify(info, null, 4));
//   } else {
//     fs.writeFileSync(
//       infoPath,
//       JSON.stringify(
//         {
//           ts,
//         },
//         null,
//         4
//       )
//     );
//   }
// }

// start(process.argv.slice(2))

const path = require("path");
const fs = require("fs");
const moment = require("jalali-moment");

function start(args) {
  let locale = args[0] || "en";
  let format = args[1] || "YYYYMMDDHHmm";
  let inputFileName = args[2];
  let outputFileName = args[3] || inputFileName;

  if (!locale) {
    locale = "en";
  }
  
  if (!format) {
    format = "YYYYMMDDHHmm"; 
  }

  const ts = moment().locale(locale).format(format);
  
  const workersDir = process.cwd();
  const inputFilePath = path.join(workersDir, inputFileName);
  const outputFilePath = path.join(workersDir, outputFileName);

  if (fs.existsSync(inputFilePath)) {
    let data = fs.readFileSync(inputFilePath, { encoding: "utf8" });

    if (data.includes("{{ts}}")) {
      data = data.replace(/{{ts}}/g, ts);
      fs.writeFileSync(outputFilePath, data);
      console.log(`File ${outputFileName} generated at ${workersDir}`);
    } else {
      let info = {};
      try {
        info = JSON.parse(data);
      } catch {}

      if (typeof info != "object" || info == null) {
        info = {};
      }

      info.ts = ts;

      fs.writeFileSync(outputFilePath, JSON.stringify(info, null, 4));
      console.log(`File ${outputFileName} generated at ${workersDir} with ts information`);
    }
  } else {
    const info = { ts };
    fs.writeFileSync(
      outputFilePath,
      JSON.stringify(info, null, 4)
    );
    console.log(`File ${outputFileName} created at ${workersDir} with ts information`);
  }
}

start(process.argv.slice(2));