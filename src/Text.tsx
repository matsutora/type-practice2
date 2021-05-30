import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// FC<Props>はreact ver17だと暗黙的にchildrenを受け取れる型となっている。
// おそらくver18からchildrenを暗黙的に含まないような設定になると思われる。
// 　それまでは暫定のVFCの型を使ったほうが良い。
export const Text: VFC<Props> = (props: Props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
