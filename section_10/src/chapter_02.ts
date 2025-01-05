// 유틸리티 타입 - Pick<T, K>
// - 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Pick<T, K> 직접 구현해보기
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

// 유틸리티 타입 - Omit<T, K>
// - 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

// Omit<T, K> 직접 구현해보기
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

// 유틸리티 타입 - Record<K, V>

type ThumnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

// Record<K, V> 직접 구현해보기
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
