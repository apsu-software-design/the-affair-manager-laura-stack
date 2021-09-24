//your code goes here!


class Members {

	 nameMem:string;
	 email:string;

	Members(fullname:string, emailz:string){
		this.nameMem = fullname;
		this.email = emailz;
	}

	setName(addName:string){
		this.nameMem = addName;
	}

	setEmail(addEmail:string){
		this.email = addEmail;
	}

	getMemName(){
		return this.nameMem; 
	}

}

class Affairs{
	name:string;
	time:string;
	location:string;
	members:Members[] = [];
	

	Affairs(fullname:string, timez:string, zip:string){
		this.name = fullname;
		this.time = timez;
		this.location = zip;  
	}

	getAffName(){
		return this.name;
	}

	setAffName(affName:string){
		this.name = affName;
	}

	setTime(date:string){
		this.time = date;
	}

	setZip(zip:string){
		this.location = zip; 
	}

	addMemToAff(newMember:Members){
		this.members.push(newMember);
	}

	getMemberList(){
		/*for(let i = 0; i < this.members.length - 1;i++){
			return this.members[i]
		}*/
		return this.members;
	}


}

class Organizations{
	name:string

	affairs:Affairs[] = [];

	Organizations(orgname:string) {
		this.name = orgname;
		//this.objarray = new Array(); 
	}

	getOrgName(){
		return this.name; 
	}

	setOrgName(orgName:string){
		this.name = orgName;
	}

	addAffairs(newAffair:Affairs){
		this.affairs.push(newAffair); 
	}
}

export class AffairManager{
	members: Members[] = [];  
	affairs:Affairs[] = []; 
	organizations:Organizations[] = []; 
	list:string[] = []; 
	affFilter:Affairs[] = [];

	memNames:Members[] = []; 

	addMember(name:string, email:string){
		let newMember= new Members(); 
		newMember.setName(name); 
		newMember.setEmail(email);
		this.members.push(newMember); 
		//console.log("inside fxn");
		//console.log(this.members[0]);
	}

	addAffair(name:string, zip:string, date:string){
		let newAffair = new Affairs();
		newAffair.setAffName(name);
		newAffair.setZip(zip);
		newAffair.setTime(date); 
		this.affairs.push(newAffair);
		//console.log("inside"); 
		//console.log(this.affairs[0]);
	}

	addOrganization(orgName:string){
		let newOrganization = new Organizations(); 
		newOrganization.setOrgName(orgName);
		this.organizations.push(newOrganization);
		//console.log(this.organizations[0]);
	}

	found:string[] = [];
	findAffairNames(query:string){
		for(let i = 0; i < this.affairs.length; i++){
			if(this.affairs[i].getAffName() == query){
				this.found.push(this.affairs[i].getAffName());
				//console.log(this.found);
			}
		}
		return this.found;
	}

	findMemberNames(query:string){
	for(let i = 0; i < this.members.length; i++){
			if(this.members[i].getMemName() == query){
				this.found.push(this.members[i].getMemName());
				//console.log(this.found);
			}
		}
		return this.found;
	}

	findOrganizationNames(query:string){
	for(let i = 0; i < this.organizations.length; i++){
			if(this.organizations[i].getOrgName() == query){
				this.found.push(this.organizations[i].getOrgName());
				//console.log(this.found);
			}
		}
		return this.found;
	}


	addMemberToAffair(memberName:string, affairName:string){
	
	let index:number;
	let index2:number;

	for(let i = 0; i < this.members.length;i++){
		if(this.members[i].getMemName() == memberName){
			index = this.members.indexOf(this.members[i]); //or just i dingus
		}
	}

	for(let j = 0; j < this.affairs.length;j++){
		if(this.affairs[j].getAffName() == affairName){
			index2 = this.affairs.indexOf(this.affairs[j]);
		}
	}

	this.affairs[index2].addMemToAff(this.members[index]); 

	
	}

	modifyAffair(affairName:string, newName:string){
	let index:number;
		for(let i = 0; i < this.affairs.length; i++){
			if(this.affairs[i].getAffName() == affairName){
				index = this.affairs.indexOf(this.affairs[i]);
			}
		}

		this.affairs[index].setAffName(newName); 

	}

	addAffairToOrganization(affairName:string, orgName:string){
	let index:number;
	let index2:number;

	for(let i = 0; i < this.affairs.length;i++){
		if(this.affairs[i].getAffName() == affairName){
			index = this.affairs.indexOf(this.affairs[i]); //or just i dingus
		}
	}

	for(let j = 0; j < this.organizations.length;j++){
		if(this.organizations[j].getOrgName() == orgName){
			index2 = this.organizations.indexOf(this.organizations[j]);
		}
	}

	this.organizations[index2].addAffairs(this.affairs[index]); 
	}

	
	getMembers(affairName:string){
	let index:number;
	

	for(let i = 0; i < this.affairs.length;i++){
		if(this.affairs[i].getAffName() == affairName){
			index = i;
		}
	}
		console.log(this.affairs[index].members);
		//return this.affairs[index].getMemberList().getMemName(); //idk why this isn't working :/

	}

	modifyAffair(affairName:string, undefined, newTime:string){
	let index:number;
		for(let i = 0; i < this.affairs.length; i++){
			if(this.affairs[i].getAffName() == affairName){
				index = this.affairs.indexOf(this.affairs[i]);
			}
		}

		this.affairs[index].setTime(newTime); 
	}


}
//module.exports = AffairManager;