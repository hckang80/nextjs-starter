import { Button, Card, Grid, Text } from '@radix-ui/themes';
import styles from './page.module.css';

export default function LoginPage() {
  return (
    <Grid align='center' className={styles.root} p='5'>
      <Card size='3'>
        <Text as='div' size='6' weight='bold' mb='2'>
          Login
        </Text>
        <Text as='div' color='gray' size='2'>
          This demo uses Google for authentication.
        </Text>

        <Button mt='5' color='tomato' size='3' className={styles.button}>
          Google
        </Button>
      </Card>
    </Grid>
  );
}
