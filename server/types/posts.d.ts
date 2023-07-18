export type BodyReqPUT = {
  readonly published: boolean;
  readonly id: number;
};

type BodyReqCreate = {
    title: string;
    content: string;
    authorId: number;
    qualityPost: number;
  };
