
const fs = require('fs');

const current = {
    x: 1440,
    y: 802
};

/*const current = {
    x: 1920,
    y: 1080
};*/

const target = {
    x: 1940,
    y: 1080
};

const dirs = [
    "gamelets/mcq",
    "gamelets/stacking",
    "gamelets/slider",
    "gamelets/yesno",
    "gamelets/yesnosocial",
    "gamelets/calendar",
    "gamelets/plate",
    "story/sandwich",
    "story/groceries",
    "story/dinner"
    // "outcome"
];

const convert = dir => {    
    fs.readdir(dir, (err, files) => {
        files.forEach(file => {

            const path = `${dir}/${file}`;
            if (!path.endsWith("svg")) {
                return;
            }    

            if (fs.lstatSync(path).isDirectory() || path.includes("ready")) {
                return;
            }
    
            console.log(`Converting ${path}`);

            fs.readFile(path, "utf8", (err, data) => {
                const widthIndex = data.indexOf("width=");
                const viewBoxIndex = data.indexOf("viewBox=");
                const slice = data.slice(widthIndex, viewBoxIndex);
                const [widthStr, heightStr] = slice.split(" ");
                const width = parseFloat(widthStr.match(/width="([0-9.]+)"/)[1]);
                const height = parseFloat(heightStr.match(/height="([0-9.]+)"/)[1]);
                const heightRatio = current.y / height;
                const newHeight = target.y / heightRatio;
                const sizeRatio = width / height;
                const newWidth = newHeight * sizeRatio;
                const newData = data.replace(`width="${width}" height="${height}"`, `width="${newWidth}" height="${newHeight}"`);
                const outDir = `${dir}/ready`;
                if (!fs.existsSync(outDir)) {
                    fs.mkdirSync(outDir);
                }
                fs.writeFile(`${outDir}/${file}`, newData, err => {});
            });
        });
    });    
};

dirs.forEach(dir => convert(dir));
