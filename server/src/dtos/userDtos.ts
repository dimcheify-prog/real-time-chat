export default class UserDtos {
  username;
  id;

  constructor(model: { id: number; username: string }) {
    this.username = model.username;
    this.id = model.id;
  }
}
