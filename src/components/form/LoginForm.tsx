import * as React from "react";
import { Button } from "src/components/Button";
import { Validation } from "src/util/Validation";

export const LoginForm = () => {
  const [info, setInfo] = React.useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setInfo({
      ...info,
      [key]: value,
    });
    setMessage({
      ...message,
      [key]: Validation.formValidate(key, value),
    });
  };
  const canSubmit = (): boolean => {
    const validInfo =
      Object.values(info).filter((value) => {
        return value === "";
      }).length === 0;
    const validMessage =
      Object.values(message).filter((value) => {
        return value !== "";
      }).length === 0;
    return validInfo || validMessage || !loading;
  };
  const submit = () => {
    setLoading(true);
    setLoading(false);
  };
  return (
    <form>
      <div className="px-4 py-2 mt-8 bg-white dark:bg-gray-400">
        <div>
          <div>メールアドレス*</div>
          {message.email && <span className="ml-2 text-xs text-red-500">{message.email}</span>}
          <input
            className="block w-full mt-1 border-none rounded-md focus:ring focus:ring-green-200 focus:ring-opacity-50 dark:bg-gray-400"
            name="email"
            type="text"
            value={info.email}
            placeholder="メールアドレスを入力"
            onChange={handleChange}
          />
        </div>
        <hr className="my-2" />
        <div className="block">
          <div>パスワード*</div>
          {message.password && <span className="ml-2 text-xs text-red-500">{message.password}</span>}
          <input
            className="block w-full mt-1 border-none rounded-md focus:ring focus:ring-green-200 focus:ring-opacity-50 dark:bg-gray-400"
            name="password"
            type="password"
            value={info.password}
            placeholder="半角英数字をそれぞれ1種類以上含む6文字以上"
            onChange={handleChange}
          />
        </div>
      </div>
      <Button button variant="link" className="mt-2 ml-4 text-base">
        パスワードを表示する
      </Button>
      <div className="mx-4 mt-5">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-green-400 rounded-xl hover:bg-green-500"
          type="submit"
          disabled={!canSubmit}
          onClick={submit}
        >
          ログイン
        </button>
      </div>
    </form>
  );
};
