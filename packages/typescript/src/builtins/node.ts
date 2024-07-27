import { createPackage } from "../create-package.js";

export const path = createPackage({
  name: "node:path",
  version: "22.5.1",
  builtin: true,
  descriptor: {
    ".": {
      default: "path",
      named: [
        "basename",
        "delimeter",
        "dirname",
        "extname",
        "format",
        "matchesGlob",
        "isAbsolute",
        "join",
        "normalize",
        "parse",
        "posix",
        "relative",
        "resolve",
        "sep",
        "toNamespacedPath",
        "win32",
      ],
    },
  },
});

export const fs = createPackage({
  name: "node:path",
  version: "22.5.1",
  builtin: true,
  descriptor: {
    ".": {
      default: "fs",
      named: [
        "access",
        "appendFile",
        "chmod",
        "chown",
        "close",
        "copyFile",
        "cp",
        "createReadStream",
        "createWriteStream",
        "exists",
        "fchmod",
        "fchown",
        "fdatasync",
        "fstat",
        "fsync",
        "ftruncate",
        "futimes",
        "glob",
        "lchmod",
        "lchown",
        "lutimes",
        "link",
        "lstat",
        "mkdir",
        "mkdtemp",
        "open",
        "openAsBlob",
        "opendir",
        "read",
        "read",
        "read",
        "readdir",
        "readFile",
        "readlink",
        "readv",
        "realpath",
        "realpath",
        "rename",
        "rmdir",
        "rm",
        "stat",
        "statfs",
        "symlink",
        "truncate",
        "unlink",
        "unwatchFile",
        "utimes",
        "watch",
        "watchFile",
        "write",
        "write",
        "write",
        "writeFile",
        "writev",
        "accessSync",
        "appendFileSync",
        "chmodSync",
        "chownSync",
        "closeSync",
        "copyFileSync",
        "cpSync",
        "existsSync",
        "fchmodSync",
        "fchownSync",
        "fdatasyncSync",
        "fstatSync",
        "fsyncSync",
        "ftruncateSync",
        "futimesSync",
        "globSync",
        "lchmodSync",
        "lchownSync",
        "lutimesSync",
        "linkSync",
        "lstatSync",
        "mkdirSync",
        "mkdtempSync",
        "opendirSync",
        "openSync",
        "readdirSync",
        "readFileSync",
        "readlinkSync",
        "readSync",
        "readSync",
        "readvSync",
        "realpathSync",
        "realpathSync",
        "renameSync",
        "rmdirSync",
        "rmSync",
        "statSync",
        "statfsSync",
        "symlinkSync",
        "truncateSync",
        "unlinkSync",
        "utimesSync",
        "writeFileSync",
        "writeSync",
        "writeSync",
        "writeSync",
        "writevSync",
      ],
    },
    "./promises": {
      default: "fs",
      named: [
        "access",
        "appendFile",
        "chmod",
        "chown",
        "copyFile",
        "cp",
        "glob",
        "lchmod",
        "lchown",
        "lutimes",
        "link",
        "lstat",
        "mkdir",
        "mkdtemp",
        "open",
        "opendir",
        "readdir",
        "readFile",
        "readLink",
        "realpath",
        "rename",
        "rmdir",
        "rm",
        "stat",
        "statfs",
        "symlink",
        "truncate",
        "unlink",
        "utimes",
        "watch",
        "writeFile",
        "constants",
      ],
    },
  },
});
