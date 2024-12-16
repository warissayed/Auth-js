"use server";

const register = async (formdata: FormData) => {
  const fistName = formdata.get("firstname") as string;
  const lastName = formdata.get("lastname") as string;
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;
  console.log(fistName);
  console.log(lastName);
  console.log(email);
  console.log(password);
};

export { register };
