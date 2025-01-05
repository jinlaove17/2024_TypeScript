// 인덱스드 액세스 타입
// - 객체 타입으로부터 특정 프로퍼티 값을 추출해내는 기능
// - 새로운 프로퍼티가 추가되거나, 기존 프러퍼티가 수정되더라도 코드를 수정할 필요가 없다.
// - [] 안에는 객체 타입의 키로 사용할 수 있는 타입을 넣어준다.
// - 가져온 프로퍼티가 객체일 경우 []를 중복으로 사용하여 내부 프로퍼티를 추출할 수도 있다. Post["author"]["name"]

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "JJ",
  },
};

function printAuthorInfo(author: Post["author"] | PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 배열에서의 인덱스드 액세스 타입 활용
type PostList = Post[];

const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "JJ",
  },
};

// 튜플에서의 인덱스드 액세스 타입 활용
type Tup = [number, string, boolean];
type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
// type Tup3 = Tup[3]; // error!
type TupNum = Tup[number]; // number | string | boolean, 세 타입의 유니온 타입
