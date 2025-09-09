import { User } from "@/types/data/user";

import { omit } from "@/utils/omit";

import { Box } from "@/components/atoms/Box";
import { Card, CardContent, CardHeader } from "@/components/atoms/Card";

import styles from "./Information.module.css";

type Props = Pick<User, "email" | "phone" | "website" | "address">;

export const Information = ({ address, email, phone, website }: Props) => {
  return (
    <Box className={styles.container}>
      <ContactInfo email={email} phone={phone} website={website} />
      <AddressInfo address={address} />
    </Box>
  );
};

const ContactInfo = ({
  email,
  phone,
  website,
}: {
  email: string;
  phone: string;
  website: string;
}) => (
  <Card>
    <CardHeader>Contact Information</CardHeader>
    <CardContent>
      <ul className={styles.list}>
        <li>email: {email}</li>
        <li>phone: {phone}</li>
        <li>website: {website}</li>
      </ul>
    </CardContent>
  </Card>
);

const AddressInfo = ({ address }: { address: User["address"] }) => (
  <Card>
    <CardHeader>Address</CardHeader>
    <CardContent>
      <ul className={styles.list}>
        {Object.entries(omit(address, ["geo"])).map(([key, value], idx) => (
          <li key={idx}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
