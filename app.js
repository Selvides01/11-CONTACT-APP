const yargs = require("yargs");
const contacts = require('./contacts');

yargs.command({
    command : 'add',
  describe: 'Menambahkan contact baru',
  builder: {
    nama: {
        describe: "nama lengkap",
        demandOption: true,
        type: 'string',
    },
    email: {
        describe: 'Email',
        demandOption: false,
        type: 'string',
    },
    noHP: {
        describe: 'Nomor Handphone',
        demandOption:true,
        type: 'string',
    }, 
  },
  handler(argv) {
   contacts.simpanContact(argv.nama, argv.email, argv.noHP);
  },
});


yargs.parse();