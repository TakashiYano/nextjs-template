import * as React from "react";
import Link from "next/link";
import { Validation } from "src/util/Validation";

export function RegisterForm() {
  const [info, setInfo] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = React.useState({
    username: "",
    email: "",
    message: "",
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
    setLoading({
      loading: true,
    });
    setLoading({
      loading: false,
    });
  };
  return (
    <form className="grid grid-cols-1 gap-6 m-16">
      <label className="block">
        <span className="text-gray-700">ユーザー名*</span>
        <input
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          name="username"
          type="text"
          value={info.username}
          placeholder=""
          onChange={handleChange}
        />
        {message.username && (
          <p style={{ color: "red", fontSize: 16 }}>{message.username}</p>
        )}
      </label>
      <label className="block">
        <span className="text-gray-700">メールアドレス*</span>
        <input
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          name="email"
          type="text"
          value={info.email}
          placeholder="example@gmail.com"
          onChange={handleChange}
        />
        {message.email && (
          <p style={{ color: "red", fontSize: 16 }}>{message.email}</p>
        )}
      </label>
      <label className="block">
        <span className="text-gray-700">パスワード*</span>
        <input
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          name="password"
          type="password"
          value={info.password}
          placeholder=""
          onChange={handleChange}
        />
        {message.password && (
          <p style={{ color: "red", fontSize: 16 }}>{message.password}</p>
        )}
      </label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white dark:text-gray-700 font-bold py-2 px-4 rounded"
        type="submit"
        disabled={!canSubmit}
        onClick={submit}
      >
        会員登録
      </button>
      <span className="text-center text-gray-700">または</span>
      <button
        className="bg-blue-200 hover:bg-blue-400 text-gray-700 font-bold py-2 px-4 rounded"
        type="submit"
        onClick={submit}
      >
        Twitterで会員登録
      </button>
      <span className="text-center">
        <Link href="/sign_in">
          <a className="text-blue-700 dark:text-blue-500">ログインページへ</a>
        </Link>
      </span>
    </form>
  );
}
