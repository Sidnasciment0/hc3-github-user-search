import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";

import img from "../../assets/github-logo.png";

export default function App() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;

        const repositoriesName = [];

        repositories.forEach((item) => repositoriesName.push(item.name));

        localStorage.setItem(
          "RepositoriesName",
          JSON.stringify(repositoriesName)
        );

        navigate("/repositories");
      })
      .catch((err) => setErro(true));
  }

  return (
    <S.HomeContainer>
      <S.Img src={img} />
      <S.Content>
        {/* <p>{usuario}</p> */}
        <S.Input
          className="usuarioInput"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => {
            setUsuario(e.target.value);
            setErro(false);
          }}
        />
        <S.Button type="button" onClick={handlePesquisa}>
          Pesquisar
        </S.Button>
      </S.Content>

      {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente</S.ErrorMsg> : ""}
    </S.HomeContainer>
  );
}
