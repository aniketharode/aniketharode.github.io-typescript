class About{

education:string[];
placesLived:string[];
contactinfo:string;
basicInfo:string[];
sports:string[];
music:string[];
movies:string[];
fiends:string[];

setEducation = (...x:string[]) =>{
    this.education=x;
}

getEducation = () => {
    for(let i=0;i<this.education.length;i++){
        let x = ["My Education:-",this.education[i]];
      //  console.log("My Education:-");
    console.log(`${x[0]}\n${x[1]}`);

    }
}

setPlacesLived = (...x:string[])=>{
this.placesLived=x;
}

getPlacesLived = () =>{
    console.log(`Places i lived ${this.placesLived}`)
}

setContactInfo = (x:string)=>{
  
    if(x.search("@")>1)
    this.contactinfo=x;
    else{
        console.log(`email should have the @ symbol`)
    }
}

getContactInfo = ()=>{
    console.log(`contact info:-\n ${this.contactinfo}`);
}

setSports = (...x:string[])=>{
this.sports=x;
}

getSports = () =>{
    console.log(`favourite sports are ${this.sports[0]} and ${this.sports[1]}`);
}

setMusic = (...x:string[]) =>{
this.music=x;
}

getMusic = ()=>{
    console.log(`Music:-\n${this.music}`);
}

setMovie = (...x:string[]) =>{
    this.music=x;
    }
    
    getMovie = ()=>{
        console.log(`Movie:-\n${this.music}`);
    }


    setFriend = (...x:string[]) =>{
        this.music=x;
        }
        
        getFriend = ()=>{
            console.log(`Friends are:-\n${this.music}`);
        }
    

getCallInstance = ()=>{
    about.getEducation();
    about.getPlacesLived();
    about.getContactInfo();
    about.getSports();
    about.getMusic();
    about.getMovie();
}


}


let about = new About();
about.setEducation("Kendriya Vidyalaya","GH Raison College");

about.setPlacesLived("Nagpur","Mumbai");

about.setContactInfo("aniketh@xyz.com");

about.setSports("cricket","football");

about.setMusic("xyz","pqr");

about.setMovie("abcd","efgh");

about.getCallInstance();
