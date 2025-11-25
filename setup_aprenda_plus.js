const fs = require("fs");
const path = require("path");

function createFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`📁 Pasta criada: ${folderPath}`);
  }
}

console.log("🚀 Iniciando criação da estrutura Aprenda+...");

const folders = [
  "app/(auth)",
  "app/(gestor)",
  "app/(professor)",
  "app/(responsavel)",

  "src/theme",
  "src/lib",
  "src/store",
  "src/components/AprendaMais",
];

folders.forEach((folder) => {
  createFolder(path.join(__dirname, folder));
});

console.log("✅ Estrutura Aprenda+ criada com sucesso!");
