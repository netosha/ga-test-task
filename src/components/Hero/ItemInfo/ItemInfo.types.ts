export interface ItemInfoProps {
  author: string;
  name: string;
  bid: {
    currency: 'ETH';
    amount: number;
    till: Date;
  };
  likes: number;
}
