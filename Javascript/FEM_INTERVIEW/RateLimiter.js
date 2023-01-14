
/*
Write a RateLimiter class that has the method `requestAllowed`. 

Assume this method gets called every time a request comes into our system. 
This method should return a boolean denoting whether a request is allowed to execute or not.

The constructor parameters of RateLimiter should be
   1) an integer for the maximum number of requests allowed and
   2) an integer for the time window (in milliseconds) for which the function returns true.

You may not use `setTimeout` or `setInterval` in your solution.



Example:
With constructor parameters 3 and 1000, we should return true for a maximum of 3 requests per 1000ms.

const rateLimiter = new RateLimiter(3, 1000)
function log () {
  rateLimiter.requestAllowed()
    ? console.log('Allowed!')
    : console.warn('request not allowed')
}

log() // Allowed!
setTimeout(log, 100) //Allowed!
setTimeout(log, 200) //Allowed!
setTimeout(log, 300) // request not allowed
setTimeout(log, 1000) // Allowed!

*/


// function RateLimiter() {

// }
 

class RateLimiter {
  constructor (maxNoOfReq, timeWindow){
    this.maxReq = maxNoOfReq;
    this.timeWindow = timeWindow;
    this.reqCount = 0;
    this.lastReqTime = 0;
  }

  requestAllowed() {
      const curTime = Date.now();
    //   console.log('curTime', curTime);
    //   console.log('this.lastReqTime', this.lastReqTime);
    //   console.log('this.timeWindow', this.timeWindow);
      if(curTime - this.lastReqTime > this.timeWindow) {
      
        this.reqCount = 1;
        this.lastReqTime = curTime;
        return true;
      }

      if(this.reqCount < this.maxReq) {
        this.reqCount++;
        return true
      }

      return false;
  }


}

const rateLimiter = new RateLimiter(3, 1000)
function log () {
  rateLimiter.requestAllowed()
    ? console.log('Allowed!')
    : console.warn('request not allowed')
}

// log() // Allowed!
// setTimeout(log, 100) //Allowed!
// setTimeout(log, 200) //Allowed!
// setTimeout(log, 300) // request not allowed
// setTimeout(log, 1000) // Allowed!
// setTimeout(log, 1001)




function withTimeoutRateLimiter(int, window){
    this.timeOutId;
    this.reqCount = 0;
    this.maxReq=int;
    this.window = window

    this.requestAllowed = function requestAllowed (){
        console.log(this.reqCount);
        if (this.timeOutId) {
            this.reqCount++;
            if(this.reqCount > this.maxReq) {
                return false;
            }else{
                return true;
            }
        }else{
            this.reqCount = 1;
            this.timeOutId = setTimeout(() => {
               this.timeOutId=null; 
               this.reqCount=0;
            }, this.window);
            return true;
        }
        
    }
}

let obj = new withTimeoutRateLimiter(3, 1000);
function log () {
  obj.requestAllowed()
    ? console.log('Allowed!')
    : console.warn('request not allowed')
}
log() // Allowed!
setTimeout(log, 100) //Allowed!
setTimeout(log, 200) //Allowed!
setTimeout(log, 300) // request not allowed
setTimeout(log, 1000) // Allowed!
setTimeout(log, 1001)