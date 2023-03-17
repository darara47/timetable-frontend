export enum LessonType {
  common = "common",
  division = "division",
  text = "text",
}

export enum WeekDays {
  monday = "monday",
  thuesday = "thuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
}

export type Lesson = {
  className: string;
  classURL: string;
  classroomName: string;
  classroomURL: string;
  id: string;
  lessonNumber: number;
  teacherName: string;
  teacherURL: string;
  subject: string;
  type: LessonType;
  weekDay: WeekDays;
};
