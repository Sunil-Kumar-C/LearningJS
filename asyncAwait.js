//async await - to avoid callback hell
//better error handling
//to avoid promise chaining- .then.then.then

async function getUser() {
  try {
    const response = await fetch("https://api.example.com/user");
    const data = await response.json();
    console.log("User:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUser();

// combining promises with async/await
function getUserProfile(){
    return new Promise((resolve,reject)=>{
        let success = true;
        setTimeout(() => {
            if(success){
                resolve({id:101, name:'alice'});
            }else{
                reject('failed to get user profile');
            }
        },2000)
    });
}

function getUserData(userId){
    return new Promise ((resolve,reject)=>{
        let success = true;
        setTimeout(()=>{
            if(success){
                // Simulate a lookup based on userId
                const data = [
                    {id:101, order:1, product:'phone'},
                    {id:102, order:2, product:'laptop'}
                ];
                const userData = data.find(u => u.id === userId);
                if(userData) {
                    resolve(userData.product);
                } else {
                    reject('No data found for user');
                }
            }else{
                reject('failed to get user data');
            }
        },2000)
    });
}
// async as sequential execution
async function getUserProfileData(){
    try{
        const userProfile = await getUserProfile();
        console.log('User Profile:', userProfile);
        const userData = await getUserData(userProfile.id);
        console.log('User Data:', userData);
    }catch(error){
        console.error('Error:', error);
    }finally{
        console.log('Process completed.');
    } 
}

// async as parallel execution

/*async function getUserProfileData(){
    try{
        console.log("Fetching user profile and data in parallel...");
        
        const [userProfile, userData] = await Promise.all([
            getUserProfile(),
            getUserData(101) // Assuming we want data for user with id 101
        ]);
        console.log("User Profile:", userProfile);
        console.log("User Data:", userData);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        console.log("Process completed.");
    }
}*/

getUserProfileData();