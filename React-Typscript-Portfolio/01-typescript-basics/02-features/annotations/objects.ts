const profile = {
  name: 'john',
  age: 31,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile; // Specify element you want to destructure.

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
