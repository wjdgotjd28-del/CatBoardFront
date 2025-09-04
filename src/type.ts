export interface Board {
  id: number;
  title: string;
  content: string;
  category: string; // Category enum 대응 (ex: "CAT_SHOWCASE")
  regTime?: string;
  imgUrl?: string; // 서버 반환 이미지 URL
  imgFiles?: File[]; // 프론트에서만 쓰는 필드
}

export type BoardList = {
  id?: number;
  title: string;
  regTime: string;
  nickname: string;
};
