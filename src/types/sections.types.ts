export enum SectionTypes {
  class = "class",
  classroom = "classroom",
  teacher = "teacher",
}

export enum SectionYears {
  first = "first",
  second = "second",
  third = "third",
  fourth = "fourth",
  fifth = "fifth",
}

export type Section = {
  id: string;
  name: string;
  url: string;
  type: SectionTypes;
};
