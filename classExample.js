/**
 * Creating a new Class (Special type of Function)
 */

class UserCreator {
    constructor(name, score) {
       this.name = name
       this.score = score
    }
 
    increment() {
             return this.score++
    }
 
      login() {
             return `Hey you're logging`
    }
 }
 
 const user1 = new UserCreator('Alice', 20)
 
 user1.login()
 user1.increment()

/**
 * Creating a sub-class using extends and super
 */

class UserPaidCreator extends UserCreator {
    constructor(name, score, balance) {
    super(name,score)
     this.balance = balance     
    }
 
    incrementBalance() { 
         return this.balance++
    }
 }