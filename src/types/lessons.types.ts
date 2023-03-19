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

export const lessonsSchedule = [
  {
    startAt: "6:55",
    endAt: "7:40",
  },
  {
    startAt: "8:00",
    endAt: "8:45",
  },
  {
    startAt: "8:55",
    endAt: "9:40",
  },
  {
    startAt: "9:50",
    endAt: "10:35",
  },
  {
    startAt: "10:45",
    endAt: "11:30",
  },
  {
    startAt: "11:50",
    endAt: "12:35",
  },
  {
    startAt: "12:45",
    endAt: "13:30",
  },
  {
    startAt: "13:40",
    endAt: "14:25",
  },
  {
    startAt: "14:35",
    endAt: "15:20",
  },
  {
    startAt: "15:25",
    endAt: "16:10",
  },
  {
    startAt: "16:15",
    endAt: "17:00",
  },
  {
    startAt: "17:05",
    endAt: "17:50",
  },
  {
    startAt: "17:55",
    endAt: "18:40",
  },
  {
    startAt: "18:45",
    endAt: "19:30",
  },
  {
    startAt: "19:35",
    endAt: "20:20",
  },
];
