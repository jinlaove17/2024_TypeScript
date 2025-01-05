// 유틸리티 타입 - Partial<T>
// - 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Partial<T> 직접 구현해보기
type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목 나중에 짓자.",
  content: "초안...",
};

// 유틸리티 타입 - Required<T>
// - 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

// Required<T> 직접 구현해보기
type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "good...",
  // 선택적 프로퍼티인 thumbnailURL도 필수 프로퍼티로 바뀜
  thumbnailURL: "https://...",
};

// 유틸리티 타입 - Readonly<T>
// - 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

// Readonly<T> 직접 구현해보기
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글 입니다.",
  tags: [],
  content: "",
};
