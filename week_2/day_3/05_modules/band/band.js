const band = {

  members: [],
  getMembers(){
    let memberNames = [];
    for (let member of band.members) {
      memberNames.push(member.name);
    }

    return memberNames;
  },

  addMember(member){
    band.members.push(member);
  },

  getMemberByName(nameToFind) {
    for (let member of band.members) {
      if(member.name.includes(nameToFind)){
        return member;
      }
    }
  }

}


module.exports = band;
