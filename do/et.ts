// Assuming the purpose is to define a user's Facebook ID
class User {
  private _fbId: number;

  constructor(fbId: number) {
    this._fbId = fbId;
  }

  // Getter to safely access the Facebook ID
  get fbId(): number {
    return this._fbId;
  }

  // Setter to update the Facebook ID with validation
  set fbId(newFbId: number) {
    if (newFbId > 0) {
      this._fbId = newFbId;
    } else {
      throw new Error('Facebook ID must be a positive number.');
    }
  }
}

// Usage
const user = new User(23423523);
console.log(`The user's Facebook ID is ${user.fbId}.`);
