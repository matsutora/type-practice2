import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
      {/* オプショナルチェイニング　.でプロパティを参照していく中で要素がない場合はそこでundefinedを返す記述。?を要素の後に記入 */}
    </dl>
  );
};
