"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("08a05f1e-7167-499b-9f47-ccd01750d806");
  }, []);

  return null;
};
