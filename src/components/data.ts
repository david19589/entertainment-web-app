export interface DataItem {
  isBookmarked: boolean;
  category: string;
  rating: string;
  year: number;
  title: string;
  thumbnail: {
    regular?: { small?: string; medium?: string; large?: string };
    trending?: { small?: string; medium?: string; large?: string };
  };
  isTrending: boolean;
}

export interface DataProps {
  Data: DataItem[];
  bookmarked: { [key: string]: boolean };
  handleBookmark: (title: string) => void;
}
