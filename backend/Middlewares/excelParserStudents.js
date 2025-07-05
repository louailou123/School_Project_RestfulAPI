import xlsx from "xlsx";
import fs from "fs";

export const excelParserStudents = async (req, res,next) => {
    try {
        const filePath = req.file.path;
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        req.body = xlsx.utils.sheet_to_json(sheet);
        fs.unlinkSync(filePath);
        next()
    } catch (error) {
        return res.status(500).json({ error: "Failed to process file" });
    }
};