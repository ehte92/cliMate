/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unicorn/import-style */
const fs = require("fs");
const { join } = require("path");
const asciify = require("asciify-image");

const iconOptions = {
    fit: "box",
    width: 25,
    height: 25,
};

const fileName = "icons.json";

(async () => {
    const iconsObj = {};
    fs.writeFileSync(join(__dirname, fileName), JSON.stringify(iconsObj, undefined, 2), "utf8");

    await Promise.allSettled(
        fs.readdirSync(join(__dirname, "images")).map(
            (file) => new Promise((resolve) => {
                if (!/.+\.png/.test(file)) {
                    resolve();
                    return;
                }
                asciify(join(__dirname, "images", file), iconOptions, (err, asciifiedImg) => {
                    if (err) console.log(err);
                    iconsObj[file.replace(/\.png/, "")] = asciifiedImg;
                    resolve();
                });
            }),
        ),
    );

    fs.writeFileSync(join(__dirname, fileName), JSON.stringify(iconsObj, undefined, 2), "utf8");
})();
