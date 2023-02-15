const express = require('express');
const { spawn } = require('child_process');
const os = require('os');
const app = express();

const defaultFolderName = 'Run_08-Feb-07_48_50';

app.get('/open-folder', (req, res) => {
  const userName = os.userInfo().username;
  const folderPath = `C:\\Users\\${userName}\\Downloads\\${defaultFolderName}`;
  const cmd = spawn('cmd.exe', ['/c', 'start', folderPath]);
  res.send(`Opening folder: ${folderPath}`);
});

app.listen(3000, () => {
  console.log('API running on port 3000');
});
