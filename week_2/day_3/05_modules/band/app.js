const band = require('./band');
const members = require('./members');

band.addMember(members[0]);
band.addMember(members[1]);


console.log(band.getMembers());

console.log(band.getMemberByName('Art'));
