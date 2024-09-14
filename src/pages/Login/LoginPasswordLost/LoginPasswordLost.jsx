import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import useForm from "../../../hooks/useForm/useForm";
import useFetch from "../../../hooks/useFetch/useFetch";
import { PASSWORD_LOST } from "../../../services/api";
import Error from "../../../components/Error/Error";
import Head from "../../../helper/Head/Head";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const { json } = await request(url, options);
    }
  }

  return (
    <section>
      <Head title="Perdeu sua senha" />
      <h1 className="title">Esqueceu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
