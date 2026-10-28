/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unicorn/import-style */
const fs = require("fs");
const { join } = require("path");
const Couleurs = require("couleurs");
const { PNG } = require("pngjs");

const chars = " .,:;i1tfLCG08@";
const colorScale = (255 * 4) / (chars.length - 1);
const width = 25;
const height = 25;

const fileName = "icons.json";

(async () => {
    const iconsObj = {};
    fs.writeFileSync(join(__dirname, fileName), JSON.stringify(iconsObj, undefined, 2), "utf8");

    await Promise.allSettled(
        fs.readdirSync(join(__dirname, "images")).map(async (file) => {
            if (!/.+\.png/.test(file)) return;

            try {
                const image = PNG.sync.read(fs.readFileSync(join(__dirname, "images", file)));
                const widthRatio = image.width / width;
                const heightRatio = image.height / height;
                const newHeight = widthRatio > heightRatio ? Math.round(image.height / widthRatio) : height;
                const newWidth = widthRatio > heightRatio ? width : Math.round(image.width / heightRatio);

                let asciifiedImg = "";
                for (let y = 0; y < newHeight; y += 1) {
                    const sourceY = Math.min(image.height - 1, Math.floor(((y + 0.5) * image.height) / newHeight));
                    for (let x = 0; x < newWidth; x += 1) {
                        const sourceX = Math.min(image.width - 1, Math.floor(((x + 0.5) * image.width) / newWidth));
                        const offset = (sourceY * image.width + sourceX) * 4;
                        const color = {
                            r: image.data[offset],
                            g: image.data[offset + 1],
                            b: image.data[offset + 2],
                            a: image.data[offset + 3],
                        };
                        const char = chars.charAt(Math.round((color.r + color.g + color.b + color.a) / colorScale));
                        asciifiedImg += Couleurs.fg(char, color.r, color.g, color.b).repeat(2);
                    }
                    if (y < newHeight - 1) asciifiedImg += "\n";
                }

                iconsObj[file.replace(/\.png/, "")] = asciifiedImg;
            } catch (error) {
                console.log(error);
            }
        }),
    );

    fs.writeFileSync(join(__dirname, fileName), JSON.stringify(iconsObj, undefined, 2), "utf8");
})();
