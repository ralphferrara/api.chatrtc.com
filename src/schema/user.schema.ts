import mongoose, { Schema, Document } from 'mongoose';

interface Person {
  age: number;
  gender: string;
}

export interface UserDocument extends Document {
  id: number;
  level: number;
  username: string;
  personA: Person;
  personB: Person;
  city: string;
  state: string;
  zip: string;
  country: string;
  latitude: number;
  longitude: number;
  isCertified: boolean;
  avatar: string;
  link: string;
}

const UserSchema: Schema = new Schema({
  id: { type: Number, required: true },
  level: { type: Number, required: true },
  username: { type: String, required: true },
  personA: {
    age: { type: Number, required: true },
    gender: { type: String, required: true }
  },
  personB: {
    age: { type: Number, required: true },
    gender: { type: String, required: true }
  },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  isCertified: { type: Boolean, required: true },
  avatar: { type: String, required: true },
  link: { type: String, required: true }
});

export default mongoose.model<UserDocument>('User', UserSchema);