import {mkdir, copyFile} from 'node:fs/promises';
await mkdir('dist', {recursive:true});
for (const file of ['index.html','app.js','style.css','logo.png']) await copyFile(file, `dist/${file}`);
