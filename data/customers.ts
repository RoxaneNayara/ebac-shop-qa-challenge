export type Customer = {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  phone: string;
};

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Environment variable ${name} is required.`);
  }

  return value;
}

export const registeredCustomer: Customer = {
  username: getRequiredEnv("TEST_USER_USERNAME"),
  email: getRequiredEnv("TEST_USER_EMAIL"),
  password: getRequiredEnv("TEST_USER_PASSWORD"),
  firstName: getRequiredEnv("TEST_USER_FIRST_NAME"),
  lastName: getRequiredEnv("TEST_USER_LAST_NAME"),
  company: getRequiredEnv("TEST_USER_COMPANY"),
  country: getRequiredEnv("TEST_USER_COUNTRY"),
  address: getRequiredEnv("TEST_USER_ADDRESS"),
  city: getRequiredEnv("TEST_USER_CITY"),
  state: getRequiredEnv("TEST_USER_STATE"),
  postcode: getRequiredEnv("TEST_USER_POSTCODE"),
  phone: getRequiredEnv("TEST_USER_PHONE"),
};
