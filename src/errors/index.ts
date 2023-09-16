import { Error } from "@/protocols";
import httpStatus from "http-status";

function notFound(): Error {
  return {
    type: "notFound",
    message: `Insira o "id" de musicas existentes.`,
    status: httpStatus.NOT_FOUND,
  };
}

export const errors = { notFound };
