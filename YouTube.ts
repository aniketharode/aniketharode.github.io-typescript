class YouTube{

    private topselling:string[];
    private recomended:string[];
    private songs:string;
    private latestTrending:string;
    private notificaton:number;
    private likedVideos:string;
    private subscription:string[];
    
    setTopSelling = (x:string[]) =>{
        this.topselling=x;

    }
    getTopSelling = () =>{
        console.log("Top Selling YouTube Movies:-"+this.topselling);
     
         }

         setRecomended = (...x:string[]) =>{
            this.recomended=x;
    
        }
        getRecomended = () =>{
            console.log("Recomended:-"+this.recomended);
    
        }

        setNotification = (x:number) =>{
            this.notificaton=x;
    
        }
        getNotification = () =>{
            console.log("You have "+this.notificaton +" notifiaction");

        }

        setSongs = (songs:string) =>{
            this.songs=songs;
    
        }
       
       getSongs = () => {
         return this.songs;
        }
        
        songsDetails = (song:string) => {

            if(song.match("O sathi")){
            let x = [
                {
                song:
                {"views":"1,234,567","likes":"1k","dislikes":100}
            }
        ];
        console.log("song is "+song+"\nviews:- "+x[0].song.views+"\nlikes:- "+x[0].song.likes+"\ndislikes:-"+x[0].song.dislikes);
        }
        else{
            console.log("no matching");
        }
    }


    getLikedVideos(){
            let x : [string,number];
            let y : [string,number];
            let z : [string,number];
            x = ["Fifa 2018",12123444];
            y = ["crciket ",532323293];
            z = ["best goals",141527];
            console.log(`liked videos :-\n${x}\n${y}\n${z}`);
    }

    setSubscription(...sub:string[]){
         this.subscription=sub;
    }

    getSubscription(){
        console.log(`Here are the subscribed videos\n${this.subscription}`);
   }


       callFunction = ()=>{
         //this.setNotification(9);
         this.getNotification();
         //this.setRecomended("top selling mobile","fifa 2018","xyz","abcdss","india cricket");
         this.getRecomended();
         //this.setSongs("O sathi");
         this.songsDetails(this.getSongs());
         this.getLikedVideos();
         //this.setSubscription("Sony Music","Cricket","FIFA2018","Trailers");
         this.getSubscription();
        }



}

let youtube = new YouTube();
let array:string[]=["thor","avengers"];
youtube.setTopSelling(array);
youtube.getTopSelling();

youtube.setNotification(9);
         
youtube.setRecomended("top selling mobile","fifa 2018","xyz","abcdss","india cricket");
        
youtube.setSongs("O sathi");
         
         
youtube.setSubscription("Sony Music","Cricket","FIFA2018","Trailers");
         

youtube.callFunction();