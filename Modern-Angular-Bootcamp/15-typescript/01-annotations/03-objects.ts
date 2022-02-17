const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
// This annotation is necessary becasue we could want multiple things
// in the object.
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
