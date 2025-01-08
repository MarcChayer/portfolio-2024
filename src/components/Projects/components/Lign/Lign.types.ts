export type LignProps = {
  index: number;
  id: string;
  title: string;
  technos: string;
  year: string;
  setModal: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      index: number;
    }>
  >;
};
