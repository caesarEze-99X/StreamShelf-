import { CommonInfoParams } from 'navigation/types';

export type CTAItem = {
  item: string;
  index: number;
  onPress?: () => void;
} & Pick<CommonInfoHelperHook, 'onCTAItemPressed'>;

export type CTAItemRender = {
  item: string;
  index: number;
};

export type CommonInfoHelperHook = {
  generateCTAList: () => Array<string>;
  onCTAItemPressed: (item: string) => void;
};

export type CTAActionsProps = {
  content: CommonInfoParams;
};
