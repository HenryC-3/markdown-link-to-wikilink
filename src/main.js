const replace = require("replace-in-file");
const recursive = require("recursive-readdir");
const path = require("path");

const fileNamePrefix = "hello.";
const fileExtension = ".html";
const dir = path.join(__dirname, "../test/demo");
// comment out code above, un-comment code blow, put absolute path of your target dir
// const dir = ""

const MDLinkReg = /\[(.*?)\]\((\S*?) ?('(.*?)')?\)/; // // https://regex101.com/r/fTJqF7/1

try {
    recursive(dir, function (_, files) {
        const results = replace.sync({
            files: files,
            from: new RegExp(MDLinkReg, "g"),
            to: linkConvertor,
        });
        console.log("Done");
        console.table(results);
    });
} catch (error) {
    console.error("Error occurred:", error);
}

function linkConvertor(str) {
    const group = str.match(MDLinkReg);
    const label = group[1];
    const link = group[2];
    if (isAssetsLink(link) || isWebLink(link)) {
        return `[${label}](${link})`; // process link "/assets/image.png" or "https://"
    } else {
        let [path, heading] = link.split("#"); // process link "/a/b/c.html#heading-name"
        const noteName = path
            .replace(/^\//, "") // "/a/b.md" → "a/b.md"
            .replace(`${fileExtension}`, "") // "b.md" → "b"
            .replace(/\.+\//g, "") // "../../a/b" → "a/b"
            .split("/")
            .join("."); // a.b
        return heading
            ? `[[${fileNamePrefix}${noteName}#${heading}]]`
            : `[[${fileNamePrefix}${noteName}]]`;
    }
}

function isAssetsLink(
    str,
    regs = [
        /(^\/[(assets)(images)]+\/)|(^[(assets)(images)]+\/)|(^\.\/[(assets)(images)]+\/)/, // https://regex101.com/r/b39uCQ/1
    ]
) {
    const result = regs.some((reg) => {
        return reg.test(str);
    });
    return result;
}

function isWebLink(str) {
    const reg = /^https:\/\//;
    return reg.test(str);
}
